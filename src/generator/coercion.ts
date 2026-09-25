/**
 * The Rhino parameter-coercion rule, applied to a published `.d.ts` tree.
 *
 * Every method/constructor/function PARAMETER whose type is a Java type Rhino
 * converts JS values into is rewritten to accept those JS values: scalar Java
 * types become the aliases in `java/coercion.d.ts` (`JString`, `JInteger`,
 * `JObject`, ...), `List`/`Collection`/`Iterable` also accept a JS array, and
 * `Map` also accepts a plain JS object. Java arrays widen their element type.
 * Return types, fields, and generic type arguments are left exact.
 *
 * Names are resolved with the type checker, so an unqualified `Byte[]` inside
 * `namespace java.lang` is recognized. The rewrite is idempotent: a file that
 * already follows the rule produces no edits, which is what the check mode
 * relies on.
 */

import { writeFileSync } from 'node:fs';
import { relative } from 'node:path';
import * as prettier from 'prettier';
import ts from 'typescript';

/** Scalar Java types -> the parameter alias declared in `java/coercion.d.ts`. */
const SCALAR_ALIASES: Record<string, string> = {
  'java.lang.String': 'JString',
  'java.lang.CharSequence': 'JCharSequence',
  'java.lang.Object': 'JObject',
  'java.lang.Boolean': 'JBoolean',
  'java.lang.Character': 'JCharacter',
  'java.lang.Byte': 'JByte',
  'java.lang.Short': 'JShort',
  'java.lang.Integer': 'JInteger',
  'java.lang.Long': 'JLong',
  'java.lang.Float': 'JFloat',
  'java.lang.Double': 'JDouble',
};

/** JS primitive keywords an alias already includes, so a union member of that keyword is redundant. */
const ALIAS_ABSORBS: Record<string, string[]> = {
  JString: ['string'],
  JCharSequence: ['string'],
  JBoolean: ['boolean'],
  JCharacter: ['string', 'number'],
  JByte: ['number'],
  JShort: ['number'],
  JInteger: ['number'],
  JLong: ['number'],
  JFloat: ['number'],
  JDouble: ['number'],
};

/** Java interfaces a JS array satisfies in Rhino (NativeArray implements java.util.List). */
const ARRAY_LIKE = new Set(['java.util.List', 'java.util.Collection', 'java.lang.Iterable']);

/** Java interface a plain JS object satisfies in Rhino (NativeObject implements java.util.Map). */
const MAP_LIKE = 'java.util.Map';

export interface CoercionEdit {
  file: string;
  line: number;
  param: string;
  before: string;
  after: string;
}

function fqnOf(checker: ts.TypeChecker, name: ts.EntityName): string | undefined {
  let sym = checker.getSymbolAtLocation(name);
  if (!sym) return undefined;
  if (sym.flags & ts.SymbolFlags.Alias) sym = checker.getAliasedSymbol(sym);
  return checker.getFullyQualifiedName(sym);
}

/** Collapses whitespace and drops the leading `|` Prettier adds to a union it wraps. */
function normalize(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^\|\s*/, '');
}

/** Parenthesizes a type so it can take an `[]` suffix. */
function asArrayElement(text: string): string {
  return /[|&]/.test(text) ? `(${text})` : text;
}

/**
 * Returns the union members a parameter of type `node` should accept. A result
 * with more than one member is joined with ` | ` by the caller.
 */
function widen(node: ts.TypeNode, checker: ts.TypeChecker, sf: ts.SourceFile): string[] {
  const text = normalize(node.getText(sf));

  if (ts.isParenthesizedTypeNode(node)) {
    const inner = widen(node.type, checker, sf);
    return inner.length === 1 ? inner : [`(${inner.join(' | ')})`];
  }

  if (ts.isUnionTypeNode(node)) {
    const members = node.types.flatMap((t) => widen(t, checker, sf));
    if (members.includes('JObject')) return ['JObject'];
    const absorbed = new Set(members.flatMap((m) => ALIAS_ABSORBS[m] ?? []));
    return [...new Set(members)].filter((m) => !absorbed.has(m));
  }

  if (ts.isArrayTypeNode(node)) {
    const elem = widen(node.elementType, checker, sf);
    return [`${asArrayElement(elem.join(' | '))}[]`];
  }

  if (ts.isTypeReferenceNode(node)) {
    const fqn = fqnOf(checker, node.typeName);
    if (fqn && SCALAR_ALIASES[fqn]) return [SCALAR_ALIASES[fqn]];
    const args = node.typeArguments ?? [];
    if (fqn && ARRAY_LIKE.has(fqn) && args.length === 1) {
      const elem = widen(args[0], checker, sf).join(' | ');
      return [text, `${asArrayElement(elem)}[]`];
    }
    if (fqn === MAP_LIKE && args.length === 2) {
      const value = widen(args[1], checker, sf).join(' | ');
      return [text, `Record<string, ${value}>`];
    }
  }

  return [text];
}

function isSignatureParam(p: ts.ParameterDeclaration): boolean {
  const parent = p.parent;
  if (ts.isIndexSignatureDeclaration(parent)) return false;
  if (ts.isIdentifier(p.name) && p.name.text === 'this') return false;
  return (
    ts.isMethodSignature(parent) ||
    ts.isMethodDeclaration(parent) ||
    ts.isConstructorDeclaration(parent) ||
    ts.isConstructSignatureDeclaration(parent) ||
    ts.isCallSignatureDeclaration(parent) ||
    ts.isFunctionDeclaration(parent)
  );
}

/**
 * Computes (and with `fix`, applies and Prettier-formats) the coercion edits
 * for `files`. `program` must include every file whose declarations those files
 * reference, so names resolve.
 */
export async function applyCoercion(opts: {
  rootFile: string;
  files: string[];
  fix: boolean;
  repoRoot: string;
}): Promise<CoercionEdit[]> {
  const program = ts.createProgram([opts.rootFile], {
    noEmit: true,
    types: [],
    lib: ['lib.es2020.d.ts'],
  });
  const checker = program.getTypeChecker();
  const targets = new Set(opts.files.map((f) => f.replace(/\\/g, '/').toLowerCase()));
  const edits: CoercionEdit[] = [];
  const prettierConfig = (await prettier.resolveConfig(opts.rootFile)) ?? {};

  for (const sf of program.getSourceFiles()) {
    if (!targets.has(sf.fileName.replace(/\\/g, '/').toLowerCase())) continue;
    const fileEdits: { start: number; end: number; text: string }[] = [];

    const visit = (node: ts.Node): void => {
      if (ts.isParameter(node) && node.type && isSignatureParam(node)) {
        const before = normalize(node.type.getText(sf));
        const after = widen(node.type, checker, sf).join(' | ');
        if (after !== before) {
          fileEdits.push({ start: node.type.getStart(sf), end: node.type.getEnd(), text: after });
          edits.push({
            file: relative(opts.repoRoot, sf.fileName).replace(/\\/g, '/'),
            line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1,
            param: node.name.getText(sf),
            before,
            after,
          });
        }
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);

    if (opts.fix && fileEdits.length > 0) {
      let out = sf.text;
      for (const e of fileEdits.sort((a, b) => b.start - a.start)) {
        out = out.slice(0, e.start) + e.text + out.slice(e.end);
      }
      out = await prettier.format(out, { ...prettierConfig, parser: 'typescript' });
      writeFileSync(sf.fileName, out, 'utf8');
    }
  }
  return edits;
}
