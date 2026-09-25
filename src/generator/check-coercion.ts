/**
 * Enforces the Rhino parameter-coercion rule (see `coercion.ts`) on every
 * published declaration file, generated and hand-written alike.
 *
 *   pnpm run check:coercion          # fail listing each non-conforming parameter
 *   pnpm run check:coercion --fix    # rewrite them in place
 */

import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { applyCoercion } from './coercion.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const PRODUCT_ROOT = join(REPO_ROOT, 'nextgen-connect');

async function main(): Promise<void> {
  const fix = process.argv.includes('--fix');
  let total = 0;
  for (const version of readdirSync(PRODUCT_ROOT)) {
    const versionDir = join(PRODUCT_ROOT, version);
    const files = readdirSync(versionDir, { recursive: true, encoding: 'utf8' })
      .filter((f) => f.endsWith('.d.ts'))
      .map((f) => join(versionDir, f));
    const edits = await applyCoercion({
      rootFile: join(versionDir, 'index.d.ts'),
      files,
      fix,
      repoRoot: REPO_ROOT,
    });
    for (const e of edits) {
      console.log(`${e.file}:${e.line} ${e.param}: ${e.before}  ->  ${e.after}`);
    }
    total += edits.length;
  }
  if (total === 0) {
    console.log('coercion: every parameter follows the rule.');
  } else if (fix) {
    console.log(`coercion: rewrote ${total} parameter(s).`);
  } else {
    console.error(`coercion: ${total} parameter(s) break the rule. Run with --fix.`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
