/**
 * Model -> ambient `.d.ts` text emitter.
 *
 * Emits the body of a `declare namespace com.mirth.connect.<pkg> { ... }` from
 * a list of {@link ClassModel}s. The caller (`generate.ts`) wraps this body in
 * the package namespace and the surrounding `com.mirth.connect` nesting, and
 * prepends any preserved non-user-api declarations. Output is sorted and
 * deterministic so re-running produces byte-identical files (Prettier then
 * normalizes the final formatting).
 */

import type { ClassModel, MethodModel, ConstructorModel, ParamModel } from './parse-javadoc.ts';
import { mapType, mapParamType, type ResolveContext } from './type-map.ts';
import { OVERLAYS, type Overlay } from './overlays.ts';

const INDENT = '  ';

function indent(text: string, level: number): string {
  const pad = INDENT.repeat(level);
  return text
    .split('\n')
    .map((line) => (line.length ? pad + line : line))
    .join('\n');
}

/** Build a `/** ... *\/` JSDoc block from description + tags. */
function jsdoc(opts: {
  description?: string;
  params?: { name: string; doc?: string }[];
  returns?: string;
  deprecated?: string | true;
  since?: string;
  throws?: { type: string; doc?: string }[];
  /** Extra prose merged in from an overlay, appended after the description. */
  note?: string;
  /** A code snippet merged in from an overlay, rendered as an `@example` block. */
  example?: string;
}): string {
  const lines: string[] = [];
  if (opts.description) {
    for (const line of opts.description.split('\n')) lines.push(line);
  }
  if (opts.note) {
    if (lines.length) lines.push('');
    for (const line of opts.note.split('\n')) lines.push(line);
  }
  const tagLines: string[] = [];
  for (const p of opts.params ?? []) {
    tagLines.push(`@param ${p.name}${p.doc ? ` - ${p.doc}` : ''}`);
  }
  if (opts.returns) tagLines.push(`@returns ${opts.returns}`);
  for (const t of opts.throws ?? []) {
    tagLines.push(`@throws ${t.type}${t.doc ? ` - ${t.doc}` : ''}`);
  }
  if (opts.deprecated !== undefined) {
    tagLines.push(
      `@deprecated${typeof opts.deprecated === 'string' && opts.deprecated ? ` ${opts.deprecated}` : ''}`,
    );
  }
  if (opts.since) tagLines.push(`@since ${opts.since}`);
  if (opts.example) {
    tagLines.push('@example', '```js', ...opts.example.split('\n'), '```');
  }

  if (lines.length && tagLines.length) lines.push('');
  lines.push(...tagLines);

  if (!lines.length) return '';
  const body = lines
    .map((l) => l.split('\n'))
    .flat()
    .map((l) => ` * ${l}`.trimEnd())
    .join('\n');
  return `/**\n${body}\n */`;
}

function typeParamsSuffix(typeParams: string[]): string {
  return typeParams.length ? `<${typeParams.join(', ')}>` : '';
}

function buildContext(pkg: string, localNames: Set<string>, typeVars: string[]): ResolveContext {
  return {
    localSimpleNames: localNames,
    localPackage: pkg,
    typeVars: new Set(typeVars),
    unresolved: new Set(),
  };
}

function emitParams(params: ParamModel[], ctx: ResolveContext): string {
  return params.map((p) => `${p.name}: ${mapParamType(p.type, ctx)}`).join(', ');
}

function emitConstructor(c: ConstructorModel, ctx: ResolveContext): string {
  const doc = jsdoc({
    description: c.jsdoc,
    params: c.params,
    deprecated: c.deprecated,
    throws: c.throws,
  });
  const sig = `constructor(${emitParams(c.params, ctx)});`;
  return doc ? `${doc}\n${sig}` : sig;
}

/**
 * Per-class overlay context: the class's fully-qualified name plus a set that
 * tracks which method names have already consumed their overlay, so an
 * overloaded method's example/note is emitted on its first overload only.
 */
interface OverlayContext {
  classFqn: string;
  consumed: Set<string>;
}

function emitMethod(
  m: MethodModel,
  kind: ClassModel['kind'],
  ctx: ResolveContext,
  overlay?: OverlayContext,
): string {
  const localCtx = buildContext(ctx.localPackage, ctx.localSimpleNames, [
    ...ctx.typeVars,
    ...m.typeParams,
  ]);
  // Propagate unresolved set into the shared collector.
  // `toString()` must return the TS primitive `string` to remain assignable to
  // the structural `Object.toString(): string` base TypeScript injects.
  const returns =
    m.name === 'toString' && m.params.length === 0 ? 'string' : mapType(m.returnType, localCtx);
  const paramsText = emitParams(m.params, localCtx);
  for (const u of localCtx.unresolved) ctx.unresolved.add(u);

  // Attach a method overlay to the first overload of this name only.
  let ov: Overlay | undefined;
  if (overlay && !overlay.consumed.has(m.name)) {
    ov = OVERLAYS[`${overlay.classFqn}#${m.name}`];
    if (ov) overlay.consumed.add(m.name);
  }

  const doc = jsdoc({
    description: m.jsdoc,
    params: m.params,
    returns: m.returnsDoc,
    deprecated: m.deprecated,
    since: m.since,
    throws: m.throws,
    note: ov?.note,
    example: ov?.example,
  });
  const staticKw = m.static && kind !== 'interface' ? 'static ' : '';
  const tp = typeParamsSuffix(m.typeParams);
  const sig = `${staticKw}${m.name}${tp}(${paramsText}): ${returns};`;
  return doc ? `${doc}\n${sig}` : sig;
}

function emitClassLike(model: ClassModel, ctx: ResolveContext): string {
  const parts: string[] = [];
  const classFqn = `${ctx.localPackage}.${model.name}`;
  const overlayCtx: OverlayContext = { classFqn, consumed: new Set() };

  const members: string[] = [];
  for (const c of model.constructors) members.push(emitConstructor(c, ctx));
  for (const f of model.fields) {
    const doc = jsdoc({ description: f.jsdoc, deprecated: f.deprecated });
    const staticKw = f.static ? 'static ' : '';
    const sig = `${staticKw}${f.name}: ${mapType(f.type, ctx)};`;
    members.push(doc ? `${doc}\n${sig}` : sig);
  }
  for (const m of model.methods) members.push(emitMethod(m, model.kind, ctx, overlayCtx));

  // extends / implements.
  let header = `${model.kind === 'interface' ? 'interface' : 'class'} ${model.name}${typeParamsSuffix(model.typeParams)}`;
  const heritage: string[] = [];
  if (model.extends) heritage.push(`extends ${mapType(model.extends, ctx)}`);
  // Javadoc omits inherited members, so a class that only re-documents a few
  // (or none) of an interface's methods cannot structurally satisfy
  // `implements` in TS. Emit `implements` only when the class declares its own
  // members (the full collection wrappers do); otherwise record it in JSDoc so
  // the information is preserved without breaking the build.
  let implementsForDoc: string[] = [];
  if (model.implements.length) {
    const impls = model.implements.map((i) => mapType(i, ctx));
    if (members.length > 0) {
      heritage.push(`implements ${impls.join(', ')}`);
    } else {
      implementsForDoc = impls;
    }
  }
  if (heritage.length) header += ` ${heritage.join(' ')}`;

  const body = members.map((m) => indent(m, 1)).join('\n\n');
  parts.push(`${header} {\n${body}\n}`);

  let description = model.jsdoc ?? '';
  if (implementsForDoc.length) {
    description =
      (description ? description + '\n\n' : '') +
      implementsForDoc.map((i) => `@implements ${i}`).join('\n');
  }
  const classOverlay = OVERLAYS[classFqn];
  const classDoc = jsdoc({
    description,
    note: classOverlay?.note,
    example: classOverlay?.example,
  });
  return classDoc ? `${classDoc}\n${parts.join('\n')}` : parts.join('\n');
}

/**
 * Emits a Java enum as a TS `enum` plus a companion `namespace` carrying the
 * static `values()` / `valueOf(name)` helpers, matching the migrated style.
 */
function emitEnum(model: ClassModel, ctx: ResolveContext): string {
  const constants = model.enumConstants
    .map((c) => {
      const doc = c.jsdoc ? `${jsdoc({ description: c.jsdoc })}\n` : '';
      return indent(`${doc}${c.name},`, 1);
    })
    .join('\n');

  const enumDoc = jsdoc({ description: model.jsdoc });
  const enumBlock = `${enumDoc ? enumDoc + '\n' : ''}enum ${model.name} {\n${constants}\n}`;

  // Companion namespace with values()/valueOf() and any static methods present.
  const helperLines: string[] = [];
  // Prefer the methods Javadoc actually documented (values/valueOf/toString).
  const staticMethods = model.methods.filter((m) => m.static);
  const haveValues = staticMethods.some((m) => m.name === 'values');
  const haveValueOf = staticMethods.some((m) => m.name === 'valueOf');
  for (const m of staticMethods) {
    if (m.name === 'values') {
      const doc = jsdoc({ description: m.jsdoc, returns: m.returnsDoc });
      helperLines.push(indent(`${doc ? doc + '\n' : ''}function values(): ${model.name}[];`, 1));
    } else if (m.name === 'valueOf') {
      const doc = jsdoc({
        description: m.jsdoc,
        params: m.params,
        returns: m.returnsDoc,
        throws: m.throws,
      });
      helperLines.push(
        indent(
          `${doc ? doc + '\n' : ''}function valueOf(name: ${mapParamType('java.lang.String', ctx)}): ${model.name};`,
          1,
        ),
      );
    }
  }
  if (!haveValues) {
    helperLines.push(
      indent(
        '/**\n * Returns an array containing the constants of this enum type.\n * @returns An array containing the constants of this enum type.\n */\n' +
          `function values(): ${model.name}[];`,
        1,
      ),
    );
  }
  if (!haveValueOf) {
    helperLines.push(
      indent(
        '/**\n * Returns the enum constant with the specified name.\n * @param name - The name of the enum constant to be returned.\n * @returns The enum constant with the specified name.\n */\n' +
          `function valueOf(name: ${mapType('java.lang.String', ctx)}): ${model.name};`,
        1,
      ),
    );
  }
  const ns = `namespace ${model.name} {\n${helperLines.join('\n\n')}\n}`;
  return `${enumBlock}\n\n${ns}`;
}

export interface EmitResult {
  body: string;
  unresolved: Set<string>;
  methodCount: number;
  classCount: number;
}

/**
 * Emits the inner body (declarations only, no namespace wrapper) for one
 * userutil package. `aliasEnums` lists enum names that should be emitted as a
 * `type` + `const` alias to an existing declaration instead of a full enum
 * (used for `DeployedState`, which aliases the donkey enum).
 */
export function emitPackageBody(
  pkg: string,
  models: ClassModel[],
  aliasEnums: Map<string, string>,
): EmitResult {
  const localNames = new Set(models.map((m) => m.name));
  const unresolved = new Set<string>();
  let methodCount = 0;
  const blocks: string[] = [];

  // Deterministic order: alphabetical by name.
  const sorted = [...models].sort((a, b) => a.name.localeCompare(b.name));

  for (const model of sorted) {
    const ctx = buildContext(pkg, localNames, model.typeParams);

    if (aliasEnums.has(model.name)) {
      const target = aliasEnums.get(model.name)!;
      const doc = jsdoc({
        description: (model.jsdoc ? model.jsdoc + '\n\n' : '') + `@see ${target}`,
      });
      blocks.push(
        `${doc ? doc + '\n' : ''}type ${model.name} = ${target};\nconst ${model.name}: typeof ${target};`,
      );
      continue;
    }

    if (model.kind === 'enum') {
      blocks.push(emitEnum(model, ctx));
    } else {
      blocks.push(emitClassLike(model, ctx));
      methodCount += model.methods.length;
    }
    for (const u of ctx.unresolved) unresolved.add(u);
  }

  return {
    body: blocks.join('\n\n'),
    unresolved,
    methodCount,
    classCount: sorted.length,
  };
}

/** One userutil package's models plus the namespace they are declared in. */
export interface AliasPackage {
  pkg: string;
  models: ClassModel[];
}

export interface GlobalAliasResult {
  text: string;
  /** Total `declare var`/`declare const` global statements emitted. */
  count: number;
  /** Class/enum names emitted as `typeof` aliases. */
  classAliases: string[];
  /** Enum-constant names emitted as instance constants. */
  enumConstAliases: string[];
}

/**
 * Emits the generated `globals/userapi.d.ts`: a flat list of ambient global
 * aliases that make the User API classes Mirth injects by simple name usable
 * unqualified (`ChannelUtil.getChannelName(...)`, `new RawMessage(...)`,
 * `Status.SENT`, …).
 *
 * For every class/enum in the userutil packages a `declare var <Name>: typeof
 * com.mirth.connect.<pkg>.<Name>;` is emitted — `typeof` carries both the static
 * side and the construct signature. `excludeNames` lists simple names that are
 * declared by hand in `globals/index.d.ts` (e.g. instance globals like
 * `DatabaseConnectionFactory`) and must NOT be re-declared here, so no
 * duplicate-identifier error occurs.
 *
 * Enum constants of the named enums are additionally emitted as individual
 * instance globals (`declare const SENT: com.mirth.connect.userutil.Status;`)
 * because Mirth injects them into scope.
 */
export function emitGlobalAliases(
  packages: AliasPackage[],
  excludeNames: Set<string>,
  enumConstantGlobals: { pkg: string; enumName: string }[],
): GlobalAliasResult {
  const classAliases: string[] = [];
  const enumConstAliases: string[] = [];
  const blocks: string[] = [];

  // Collect (name, fqn) for every class/enum, deterministically sorted.
  const entries: { name: string; fqn: string }[] = [];
  for (const { pkg, models } of packages) {
    for (const m of models) {
      if (!m.name) continue;
      if (excludeNames.has(m.name)) continue;
      entries.push({ name: m.name, fqn: `${pkg}.${m.name}` });
    }
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));

  for (const { name, fqn } of entries) {
    blocks.push(`declare var ${name}: typeof ${fqn};`);
    classAliases.push(name);
  }

  // Enum-constant instance globals.
  const constLines: string[] = [];
  for (const { pkg, enumName } of enumConstantGlobals) {
    const enumPkg = packages.find((p) => p.pkg === pkg);
    const model = enumPkg?.models.find((m) => m.name === enumName && m.kind === 'enum');
    if (!model) continue;
    const fqn = `${pkg}.${enumName}`;
    for (const c of model.enumConstants) {
      if (excludeNames.has(c.name)) continue;
      constLines.push(`declare const ${c.name}: ${fqn};`);
      enumConstAliases.push(c.name);
    }
  }

  const header =
    '// Global aliases for the Mirth User API classes injected by simple name.\n' +
    '//\n' +
    '// Mirth runs channel scripts in a Rhino scope where the server.userutil and\n' +
    '// userutil classes (ChannelUtil, AttachmentUtil, RawMessage, Status, …) are\n' +
    '// available unqualified. These ambient aliases mirror that so scripts can use\n' +
    '// them without the com.mirth.connect.* prefix.\n' +
    '//\n' +
    '// AUTO-GENERATED from Javadoc by src/generator/generate.ts. Do not edit by hand;\n' +
    '// re-run `pnpm run generate` to regenerate.';

  const sections: string[] = [blocks.join('\n')];
  if (constLines.length) {
    sections.push(
      '// Status enum constants — Mirth injects these so e.g. `responseStatus = ERROR` works.\n' +
        constLines.join('\n'),
    );
  }

  return {
    text: `${header}\n\n${sections.join('\n\n')}\n`,
    count: classAliases.length + enumConstAliases.length,
    classAliases,
    enumConstAliases,
  };
}
