/**
 * Orchestrates Javadoc HTML -> ambient `.d.ts` generation for the three Mirth
 * User API userutil packages, then writes the published split files:
 *
 *   nextgen-connect/v4.5.2/com/mirth/connect-server-userutil.d.ts
 *   nextgen-connect/v4.5.2/com/mirth/connect-userutil.d.ts
 *   nextgen-connect/v4.5.2/com/mirth/plugins.d.ts
 *
 * The generator is deterministic: members are sorted, output is stable, and a
 * fixed set of preserved (non-user-api) declarations is re-emitted verbatim so
 * the files stay self-contained. Run with `pnpm run generate`.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as prettier from 'prettier';
import { parseClassHtml, type ClassModel } from './parse-javadoc.ts';
import { emitPackageBody, emitGlobalAliases, type AliasPackage } from './emit-dts.ts';

const VERSION = 'v4.5.2';
const PRODUCT = 'nextgen-connect';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const JAVADOC_ROOT = join(REPO_ROOT, 'javadoc', PRODUCT, VERSION, 'com', 'mirth', 'connect');
const OUT_DIR = join(REPO_ROOT, PRODUCT, VERSION, 'com', 'mirth');
const GLOBALS_DIR = join(REPO_ROOT, PRODUCT, VERSION, 'globals');

/**
 * Simple names declared by hand in `globals/index.d.ts` that must NOT also be
 * emitted as generated `typeof` aliases (TS errors on duplicate identifiers).
 * `DatabaseConnectionFactory` is injected by Mirth as an INSTANCE (so its
 * `createDatabaseConnection(...)` is an instance method) and is declared as an
 * instance global there — keep it out of the `typeof` aliases.
 */
const HANDWRITTEN_GLOBAL_NAMES = new Set<string>(['DatabaseConnectionFactory']);

/**
 * Simple names that collide with built-in TypeScript lib globals (DOM / ES) a
 * consumer is likely to have in their `lib`. Emitting a `declare var <Name>`
 * for these would redeclare a standard global with an incompatible type (e.g.
 * the Fetch `Response`), producing TS2403/TS2451 in consumer projects. They
 * remain usable via their `com.mirth.connect.*` FQN; we just skip the
 * unqualified alias. Mirth exposes these as return/parameter types, not as
 * injected script globals, so omitting the alias loses nothing in practice.
 */
const LIB_GLOBAL_COLLISIONS = new Set<string>([
  'Response', // lib.dom.d.ts — Fetch API Response
]);

/** Enums whose constants Mirth injects into scope as individual globals. */
const ENUM_CONSTANT_GLOBALS = [{ pkg: 'com.mirth.connect.userutil', enumName: 'Status' }];

/** Files in a package dir that are navigation, not classes. */
const SKIP = new Set(['package-frame.html', 'package-summary.html', 'package-tree.html']);

interface PackageSpec {
  /** Javadoc directory relative to JAVADOC_ROOT. */
  dir: string;
  /** Fully-qualified namespace this package's classes live in. */
  pkg: string;
  /** Output `.d.ts` filename. */
  outFile: string;
  /** Leading comment for the output file. */
  header: string;
  /** Enum names to emit as type+const aliases instead of full enums. */
  aliasEnums: Map<string, string>;
  /** Extra (non-user-api) declarations re-emitted verbatim inside the namespace nesting. */
  extra?: string;
}

const PACKAGES: PackageSpec[] = [
  {
    dir: join(JAVADOC_ROOT, 'server', 'userutil'),
    pkg: 'com.mirth.connect.server.userutil',
    outFile: 'connect-server-userutil.d.ts',
    header:
      '// com.mirth.connect.server.* — the server-side User API (server.userutil) plus\n' +
      '// the internal server.util.javascript context-factory marker interface.\n' +
      '//\n' +
      '// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;\n' +
      '// re-run `pnpm run generate` to regenerate.',
    // server.userutil.DeployedState is its own enum in Javadoc, but the package
    // aliases it to the donkey enum so the two stay structurally identical.
    aliasEnums: new Map([
      ['DeployedState', 'com.mirth.connect.donkey.model.channel.DeployedState'],
    ]),
    // Preserved non-user-api type the monolith carried (referenced by
    // ContextFactory / DatabaseConnectionFactory constructors).
    extra:
      'namespace util {\n' +
      '  namespace javascript {\n' +
      '    /**\n' +
      '     * Internal Mirth context factory for JavaScript execution.\n' +
      '     * This is an internal class used by ContextFactory and DatabaseConnectionFactory.\n' +
      '     */\n' +
      '    interface MirthContextFactory {\n' +
      '      // Internal implementation - not directly used by channel scripts\n' +
      '    }\n' +
      '  }\n' +
      '}',
  },
  {
    dir: join(JAVADOC_ROOT, 'userutil'),
    pkg: 'com.mirth.connect.userutil',
    outFile: 'connect-userutil.d.ts',
    header:
      '// com.mirth.connect.userutil.* — the client+server User API: message/connector\n' +
      '// wrappers, Status/ContentType enums, list/map builders, and HTTP helpers.\n' +
      '//\n' +
      '// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;\n' +
      '// re-run `pnpm run generate` to regenerate.',
    aliasEnums: new Map(),
  },
  {
    dir: join(JAVADOC_ROOT, 'plugins', 'httpauth', 'userutil'),
    pkg: 'com.mirth.connect.plugins.httpauth.userutil',
    outFile: 'plugins.d.ts',
    header:
      '// com.mirth.connect.plugins.* — HTTP authentication User API types.\n' +
      '//\n' +
      '// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;\n' +
      '// re-run `pnpm run generate` to regenerate.',
    aliasEnums: new Map(),
  },
];

const INDENT = '  ';
function indentText(text: string, level: number): string {
  const pad = INDENT.repeat(level);
  return text
    .split('\n')
    .map((line) => (line.length ? pad + line : line))
    .join('\n');
}

/**
 * Wraps a package body in the `declare namespace com { namespace mirth { ... }}`
 * nesting derived from `pkg`. `extra` (if any) is placed in the deepest shared
 * parent namespace so it merges alongside the userutil namespace.
 */
function wrapNamespaces(pkg: string, body: string, extra?: string): string {
  const segments = pkg.split('.'); // com, mirth, connect, [server|plugins...], userutil
  // The userutil namespace is the last segment; its parent is segments[-2].
  const inner = segments[segments.length - 1];
  const parents = segments.slice(0, -1); // up to and including server / httpauth

  // Build inner content: the userutil namespace body, plus any extra sibling
  // declarations placed in the parent namespace (one level up).
  let content = `namespace ${inner} {\n${indentText(body, 1)}\n}`;
  if (extra) {
    content = `${extra}\n\n${content}`;
  }

  // Now nest content inside parents from innermost to `com`.
  let acc = content;
  for (let i = parents.length - 1; i >= 0; i--) {
    const ns = parents[i];
    const keyword = i === 0 ? 'declare namespace' : 'namespace';
    acc = `${keyword} ${ns} {\n${indentText(acc, 1)}\n}`;
  }
  return acc;
}

function listClassFiles(dir: string): string[] {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.html') && !SKIP.has(f))
    .sort();
}

async function main(): Promise<void> {
  const report: { pkg: string; classes: number; methods: number; unresolved: string[] }[] = [];
  // Resolve the repo Prettier config once so emitted files match the rest of
  // the tree and `prettier --check` stays green after generation.
  const prettierConfig = (await prettier.resolveConfig(OUT_DIR)) ?? {};

  // Models per package, kept so the global-alias file can be emitted afterward.
  const aliasPackages: AliasPackage[] = [];

  for (const spec of PACKAGES) {
    const files = listClassFiles(spec.dir);
    const models: ClassModel[] = [];
    for (const file of files) {
      const html = readFileSync(join(spec.dir, file), 'utf8');
      const model = parseClassHtml(html);
      if (!model.name) {
        console.warn(`! Could not parse a class name from ${file}; skipping.`);
        continue;
      }
      models.push(model);
    }
    aliasPackages.push({ pkg: spec.pkg, models });

    const { body, unresolved, methodCount, classCount } = emitPackageBody(
      spec.pkg,
      models,
      spec.aliasEnums,
    );

    const wrapped = wrapNamespaces(spec.pkg, body, spec.extra);
    const raw = `${spec.header}\n\n${wrapped}\n`;
    const out = await prettier.format(raw, { ...prettierConfig, parser: 'typescript' });
    writeFileSync(join(OUT_DIR, spec.outFile), out, 'utf8');

    report.push({
      pkg: spec.pkg,
      classes: classCount,
      methods: methodCount,
      unresolved: [...unresolved].sort(),
    });
    console.log(`Wrote ${spec.outFile}: ${classCount} types, ${methodCount} methods.`);
  }

  // Emit the generated global aliases (User API classes by simple name).
  const excludeNames = new Set<string>([...HANDWRITTEN_GLOBAL_NAMES, ...LIB_GLOBAL_COLLISIONS]);
  const aliasResult = emitGlobalAliases(aliasPackages, excludeNames, ENUM_CONSTANT_GLOBALS);
  const aliasOut = await prettier.format(aliasResult.text, {
    ...prettierConfig,
    parser: 'typescript',
  });
  writeFileSync(join(GLOBALS_DIR, 'userapi.d.ts'), aliasOut, 'utf8');
  console.log(
    `Wrote globals/userapi.d.ts: ${aliasResult.count} globals ` +
      `(${aliasResult.classAliases.length} typeof aliases, ` +
      `${aliasResult.enumConstAliases.length} enum constants).`,
  );

  console.log('\n=== Generation report ===');
  const allUnresolved = new Set<string>();
  for (const r of report) {
    console.log(`\n${r.pkg}`);
    console.log(`  classes/enums: ${r.classes}`);
    console.log(`  methods: ${r.methods}`);
    if (r.unresolved.length) {
      console.log('  unresolved types (mapped to any + TODO):');
      for (const u of r.unresolved) {
        console.log(`    - ${u}`);
        allUnresolved.add(u);
      }
    } else {
      console.log('  unresolved types: none');
    }
  }
  console.log(`\nTotal distinct unresolved types: ${allUnresolved.size}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
