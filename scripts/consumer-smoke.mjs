// Consumer smoke test (regression guard).
//
// Packs this package as it would be published, installs the tarball into a
// throwaway project, writes a realistic Mirth channel script that uses the
// ambient globals (ChannelUtil, DateUtil, Status constants, RawMessage,
// DatabaseConnectionFactory, …) and type-checks it with THIS repo's TypeScript.
//
// This catches defects that only surface in the packed-and-installed form, such
// as missing global aliases or `exports` subpath resolution problems, which the
// in-repo `test:types` cannot see. Run with `node scripts/consumer-smoke.mjs`
// (wired up as `pnpm run test:consumer`).

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const IS_WINDOWS = process.platform === 'win32';

/**
 * Run a command. On Windows, npm/pnpm are `.cmd` shims that `execFileSync` can
 * only launch via the shell, so enable `shell` there. All args we pass are
 * simple flags or quoted paths without shell metacharacters, so concatenation
 * is safe.
 */
function run(cmd, args, opts = {}) {
  const needsShell = IS_WINDOWS && (cmd === 'npm' || cmd === 'pnpm');
  const finalArgs = needsShell ? args.map((a) => (a.includes(' ') ? `"${a}"` : a)) : args;
  return execFileSync(cmd, finalArgs, {
    encoding: 'utf8',
    shell: needsShell,
    ...opts,
  });
}

let tempDir;
try {
  // 1. Pack the tarball exactly as it would publish.
  console.log('[smoke] packing tarball with pnpm pack…');
  const packOut = run('pnpm', ['pack', '--pack-destination', REPO_ROOT], { cwd: REPO_ROOT });
  // pnpm prints the tarball filename on the last non-empty line; resolve robustly
  // by scanning the repo root for the produced .tgz.
  const tgz = readdirSync(REPO_ROOT).filter((f) => f.endsWith('.tgz'));
  if (tgz.length === 0) {
    throw new Error(`pnpm pack produced no .tgz. Output:\n${packOut}`);
  }
  // Newest tarball wins if several exist.
  tgz.sort();
  const tarball = join(REPO_ROOT, tgz[tgz.length - 1]);
  console.log(`[smoke] tarball: ${tarball}`);

  // 2. Throwaway consumer project.
  tempDir = mkdtempSync(join(tmpdir(), 'mirth-types-consumer-'));
  console.log(`[smoke] consumer dir: ${tempDir}`);

  writeFileSync(
    join(tempDir, 'package.json'),
    JSON.stringify(
      {
        name: 'mirth-types-consumer-smoke',
        version: '0.0.0',
        private: true,
      },
      null,
      2,
    ),
  );

  // strict, noEmit, types: [] — only the triple-slash reference in the sample
  // pulls in the package types. bundler resolution honors the package `exports`
  // subpath so the `/nextgen-connect/v4.5.2` reference resolves.
  writeFileSync(
    join(tempDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          strict: true,
          noEmit: true,
          skipLibCheck: false,
          target: 'es2020',
          module: 'esnext',
          moduleResolution: 'bundler',
          types: [],
        },
        include: ['channel-script.ts'],
      },
      null,
      2,
    ),
  );

  // 3. Install the tarball.
  console.log('[smoke] installing tarball with npm…');
  run('npm', ['install', '--no-audit', '--no-fund', '--no-package-lock', tarball], {
    cwd: tempDir,
    stdio: 'inherit',
  });

  // 4. A realistic Mirth channel script exercising the globals.
  const sample = [
    '/// <reference types="@ubercode/mirth-connect-types/nextgen-connect/v4.5.2" />',
    '',
    '// channelId is an ambient string global.',
    'const cid: string = channelId;',
    '',
    '// $c is the channelMap accessor (get/put).',
    "$c('k', 'v');",
    '',
    '// Static utility call, accessed by simple name, with a JS string literal arg.',
    'const chName = ChannelUtil.getChannelName(channelId);',
    'logger.info(chName);',
    '',
    '// DateUtil static method with a JS string literal pattern.',
    "const now = DateUtil.getCurrentDate('yyyyMMddHHmmss');",
    'logger.info(now);',
    '',
    '// msg is the current message (E4X XML | string).',
    'logger.info(String(msg));',
    '',
    '// addAttachment helper with JS string literals.',
    "addAttachment('x', 'text/plain');",
    '',
    '// Status enum constants are injected as bare globals.',
    'responseStatus = ERROR;',
    '',
    '// DatabaseConnectionFactory is an INSTANCE: createDatabaseConnection is an',
    '// instance method (not static).',
    "const dbConn = DatabaseConnectionFactory.createDatabaseConnection('driver', 'url', 'u', 'p');",
    'logger.info(String(dbConn));',
    '',
    '// Construct a User API class by simple name with a JS string literal.',
    "const raw = new RawMessage('data');",
    'logger.info(String(raw));',
    '',
    'void cid;',
    '',
  ].join('\n');
  writeFileSync(join(tempDir, 'channel-script.ts'), sample);

  // 5. Type-check with THIS repo's TypeScript.
  const tscBin = join(REPO_ROOT, 'node_modules', 'typescript', 'bin', 'tsc');
  console.log('[smoke] type-checking the sample with the repo TypeScript…');
  try {
    const out = run('node', [tscBin, '--noEmit', '-p', join(tempDir, 'tsconfig.json')]);
    if (out.trim()) console.log(out);
  } catch (err) {
    console.error('[smoke] FAILED: tsc reported errors in the consumer project.\n');
    if (err.stdout) console.error(err.stdout);
    if (err.stderr) console.error(err.stderr);
    process.exitCode = 1;
    throw new Error('consumer type-check failed');
  }

  console.log('[smoke] OK — packed package type-checks in a fresh consumer project.');
} finally {
  if (tempDir) {
    try {
      rmSync(tempDir, { recursive: true, force: true });
    } catch (e) {
      console.warn(`[smoke] could not remove temp dir ${tempDir}: ${e.message}`);
    }
  }
  // Clean up the tarball(s) we produced in the repo root.
  for (const f of readdirSync(REPO_ROOT).filter((n) => n.endsWith('.tgz'))) {
    try {
      rmSync(join(REPO_ROOT, f), { force: true });
    } catch {
      // best-effort
    }
  }
}
