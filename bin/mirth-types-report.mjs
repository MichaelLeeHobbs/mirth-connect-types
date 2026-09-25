#!/usr/bin/env node
// Collects the type errors in a Mirth script project that involve this package, so a user can
// report types we got wrong or missed. Errors in the user's own code are left out.
//
//   npx mirth-types-report [--project jsconfig.json] [--out report.md] [--no-source]
//                          [--typescript <dir>]
//
// Uses the project's own TypeScript (or --typescript) and its own config, so the results match
// what the editor shows. No dependencies beyond that TypeScript.

import { createRequire } from 'node:module';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const PACKAGE = '@ubercode/mirth-connect-types';
const MAX_LOCATIONS = 3;
const MAX_SOURCE = 160;
// A diagnostic message mentioning one of these involves the package even when the AST check
// can't see it (for example an error inside a JSDoc type).
const PACKAGE_TEXT =
  /typeof (java|javax|com|org|Packages)\b|'(java|javax|com\.mirth)\.|\b(JString|JCharSequence|JObject|JBoolean|JCharacter|JByte|JShort|JInteger|JLong|JFloat|JDouble|JKey|JavaInterface|XMLList)\b|'XML'/;

function parseArgs(argv) {
  const args = { project: undefined, out: undefined, source: true, typescript: undefined };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--project' || a === '-p') args.project = argv[++i];
    else if (a === '--out' || a === '-o') args.out = argv[++i];
    else if (a === '--no-source') args.source = false;
    else if (a === '--typescript') args.typescript = argv[++i];
    else if (a === '--help' || a === '-h') {
      console.log(
        readFileSync(new URL(import.meta.url), 'utf8')
          .split('\n')
          .slice(1, 10)
          .join('\n'),
      );
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return args;
}

function fail(message) {
  console.error(`mirth-types-report: ${message}`);
  process.exit(2);
}

function realOrSelf(p) {
  try {
    return realpathSync(p);
  } catch {
    return p;
  }
}

function loadTypeScript(cwd, override) {
  const require = createRequire(join(cwd, 'noop.js'));
  try {
    return require(override ? resolve(override) : 'typescript');
  } catch {
    return fail(
      'could not load TypeScript. Install it in the project (npm i -D typescript@6) or pass --typescript <dir>.',
    );
  }
}

function findPackageRoot(cwd) {
  const require = createRequire(join(cwd, 'noop.js'));
  try {
    return realOrSelf(dirname(require.resolve(`${PACKAGE}/package.json`)));
  } catch {
    return undefined;
  }
}

function findConfig(cwd, explicit) {
  if (explicit) return resolve(cwd, explicit);
  for (const name of ['jsconfig.json', 'tsconfig.json']) {
    if (existsSync(join(cwd, name))) return join(cwd, name);
  }
  return fail('no jsconfig.json or tsconfig.json here. Pass --project <path>.');
}

function flatten(ts, messageText) {
  return ts.flattenDiagnosticMessageText(messageText, '\n').split('\n').slice(0, 4).join(' / ');
}

/** The deepest node whose span contains [start, end). */
function nodeAt(ts, sf, start, end) {
  let found = sf;
  const visit = (n) => {
    if (n.getStart(sf) <= start && end <= n.getEnd()) {
      found = n;
      ts.forEachChild(n, visit);
    }
  };
  ts.forEachChild(sf, visit);
  return found;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const ts = loadTypeScript(cwd, args.typescript);
  const configPath = findConfig(cwd, args.project);
  const parsed = ts.getParsedCommandLineOfConfigFile(
    configPath,
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (d) => fail(flatten(ts, d.messageText)),
    },
  );
  if (!parsed) fail(`could not read ${configPath}`);

  const program = ts.createProgram({ rootNames: parsed.fileNames, options: parsed.options });
  const checker = program.getTypeChecker();
  const packageRoot = findPackageRoot(cwd);
  const packageVersion = packageRoot
    ? JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8')).version
    : 'not installed';

  // Which package copies the program actually loaded (more than one means a duplicate install).
  const loadedRoots = new Set();
  const isPackageFile = (fileName) => {
    const real = realOrSelf(fileName).split(sep).join('/');
    const m = real.match(/^(.*\/mirth-connect-types)\/nextgen-connect\//);
    if (m) loadedRoots.add(m[1]);
    return Boolean(m);
  };
  const userFiles = [];
  for (const sf of program.getSourceFiles()) {
    if (isPackageFile(sf.fileName)) continue;
    if (sf.isDeclarationFile && sf.fileName.includes('node_modules')) continue;
    if (program.isSourceFileDefaultLibrary(sf)) continue;
    userFiles.push(sf);
  }

  const declaredInPackage = (symbol) =>
    Boolean(symbol?.declarations?.some((d) => isPackageFile(d.getSourceFile().fileName)));
  const describe = (symbol) =>
    symbol ? checker.getFullyQualifiedName(symbol).replace(/"/g, '') : '';

  /** Returns the package symbol an error involves, or undefined when it's the user's own code. */
  const packageInvolvement = (sf, diag) => {
    const node = nodeAt(ts, sf, diag.start, diag.start + (diag.length ?? 0));
    const candidates = [node, node.parent, node.parent?.parent].filter(Boolean);
    for (const n of candidates) {
      const own = checker.getSymbolAtLocation(n);
      if (declaredInPackage(own)) return describe(own);
      if (ts.isPropertyAccessExpression(n) || ts.isElementAccessExpression(n)) {
        const receiver = checker.getTypeAtLocation(n.expression);
        for (const t of receiver.isUnion() ? receiver.types : [receiver]) {
          const s = t.aliasSymbol ?? t.getSymbol();
          if (declaredInPackage(s)) return `${describe(s)} (member access)`;
        }
      }
      if ((ts.isCallExpression(n) || ts.isNewExpression(n)) && n !== node) {
        const callee = checker.getSymbolAtLocation(
          ts.isPropertyAccessExpression(n.expression) ? n.expression.name : n.expression,
        );
        if (declaredInPackage(callee)) return `${describe(callee)} (argument)`;
      }
    }
    return PACKAGE_TEXT.test(flatten(ts, diag.messageText)) ? '(named in the message)' : undefined;
  };

  const syntax = [];
  let totalErrors = 0;
  const findings = new Map();
  const unknownNames = new Map();
  for (const sf of userFiles) {
    for (const d of program.getSyntacticDiagnostics(sf)) syntax.push({ sf, d });
    for (const d of program.getSemanticDiagnostics(sf)) {
      totalErrors++;
      if (d.start === undefined) continue;
      const where = `${relative(cwd, sf.fileName).split(sep).join('/')}:${sf.getLineAndCharacterOfPosition(d.start).line + 1}`;
      if (d.code === 2304 || d.code === 2552) {
        const name = sf.text.slice(d.start, d.start + d.length);
        const entry = unknownNames.get(name) ?? { count: 0, where };
        entry.count++;
        unknownNames.set(name, entry);
        continue;
      }
      const symbol = packageInvolvement(sf, d);
      if (!symbol) continue;
      const message = flatten(ts, d.messageText);
      const key = `${d.code}|${symbol}|${message}`;
      const f = findings.get(key) ?? { code: d.code, symbol, message, count: 0, locations: [] };
      f.count++;
      if (f.locations.length < MAX_LOCATIONS) {
        const line = sf.text.split(/\r?\n/)[sf.getLineAndCharacterOfPosition(d.start).line].trim();
        f.locations.push({ where, source: line.slice(0, MAX_SOURCE) });
      }
      findings.set(key, f);
    }
  }

  const o = parsed.options;
  const out = [];
  out.push(`# ${PACKAGE} type report`, '');
  out.push(
    `- Package: ${packageVersion} · TypeScript: ${ts.version} · Node: ${process.version} · Config: \`${relative(cwd, configPath)}\``,
    `- Options: lib \`${JSON.stringify(o.lib?.map((l) => l.replace(/^lib\.|\.d\.ts$/g, '')) ?? 'default')}\`, strict \`${Boolean(o.strict)}\`, noImplicitAny \`${o.noImplicitAny ?? Boolean(o.strict)}\`, checkJs \`${Boolean(o.checkJs)}\`, skipLibCheck \`${Boolean(o.skipLibCheck)}\``,
    `- Checked ${userFiles.length} project file(s): ${totalErrors} error(s) in total, ${findings.size} distinct one(s) involve the package.`,
    '',
  );
  if (args.source) {
    out.push(
      '> Review the source lines below before sharing; remove anything sensitive, or rerun with `--no-source`.',
      '',
    );
  }

  const setup = [];
  if (!packageRoot) setup.push(`\`${PACKAGE}\` isn't installed where this project can resolve it.`);
  if (loadedRoots.size === 0)
    setup.push(
      'The program loads none of the package files. Add a `/// <reference types="@ubercode/mirth-connect-types" />` file that the config includes.',
    );
  if (loadedRoots.size > 1)
    setup.push(
      `The program loads ${loadedRoots.size} copies of the package: ${[...loadedRoots].map((r) => `\`${relative(cwd, r)}\``).join(', ')}. Remove the extra install.`,
    );
  if (Number(ts.versionMajorMinor.split('.')[0]) >= 7)
    setup.push(
      "TypeScript 7 can't check typical Mirth JavaScript (no ES5 constructor inference, Closure JSDoc is a parse error). Use TypeScript 6.",
    );
  if (syntax.length)
    setup.push(
      `${syntax.length} parse error(s): TypeScript skips all other checking in \`tsc\` and many editors. First: \`${relative(cwd, syntax[0].sf.fileName)}\`: ${flatten(ts, syntax[0].d.messageText)}`,
    );
  if (setup.length) out.push('## Setup problems', '', ...setup.map((s) => `- ${s}`), '');

  out.push('## Errors that involve the package', '');
  if (findings.size === 0) out.push('None found.', '');
  for (const f of [...findings.values()].sort((a, b) => b.count - a.count)) {
    out.push(`### TS${f.code} on \`${f.symbol}\` (${f.count}×)`, '', f.message, '');
    for (const l of f.locations) {
      out.push(
        args.source ? `- \`${l.where}\`: \`${l.source.replace(/`/g, "'")}\`` : `- \`${l.where}\``,
      );
    }
    out.push('');
  }

  if (unknownNames.size) {
    out.push(
      '## Unknown names',
      '',
      'Some may be Mirth globals the package is missing; most are usually your own code-template globals.',
      '',
      ...[...unknownNames.entries()]
        .sort((a, b) => b[1].count - a[1].count)
        .map(([name, e]) => `- \`${name}\` (${e.count}×, first at \`${e.where}\`)`),
      '',
    );
  }

  const text = out.join('\n');
  if (args.out) {
    writeFileSync(resolve(cwd, args.out), text);
    console.log(`Wrote ${args.out}: ${findings.size} package-related error(s).`);
  } else {
    process.stdout.write(text);
  }
}

main();
