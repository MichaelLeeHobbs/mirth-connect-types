/**
 * Java type string -> TypeScript type string mapping.
 *
 * The generator consumes Javadoc HTML, where types appear either as anchor
 * links (`<a title="class in com.mirth.connect.userutil">Type</a>`) carrying
 * their owning package, or as bare text (primitives, and internal Mirth types
 * that Javadoc does not link). `parse-javadoc.ts` normalizes both forms into a
 * single Java type string (e.g. `List<com.mirth.connect.userutil.Attachment>`),
 * which this module resolves to a fully-qualified TypeScript type string that
 * is declared somewhere in the published `.d.ts` tree.
 *
 * Anything that cannot be resolved to a declared type becomes `any`, and the
 * original Java type is recorded so the caller can surface a `// TODO` and a
 * report entry.
 */

/**
 * Fully-qualified names that the published `.d.ts` tree already declares.
 *
 * This list is intentionally explicit (rather than scanned from the `.d.ts`
 * files) so the generator is deterministic and self-documenting: if a future
 * Mirth version references a type not in this set, it surfaces as a TODO rather
 * than silently emitting a dangling reference.
 */
const KNOWN_FQNS = new Set<string>([
  // java.lang
  'java.lang.Object',
  'java.lang.String',
  'java.lang.CharSequence',
  'java.lang.Boolean',
  'java.lang.Byte',
  'java.lang.Short',
  'java.lang.Integer',
  'java.lang.Long',
  'java.lang.Float',
  'java.lang.Double',
  'java.lang.Character',
  'java.lang.Number',
  'java.lang.Throwable',
  'java.lang.Exception',
  'java.lang.Class',
  'java.lang.ClassLoader',
  'java.lang.Comparable',
  'java.lang.Iterable',
  'java.lang.StringBuilder',
  'java.lang.StringBuffer',
  'java.lang.UnsupportedEncodingException',
  // java.io
  'java.io.File',
  'java.io.InputStream',
  'java.io.OutputStream',
  'java.io.Reader',
  'java.io.Writer',
  'java.io.Serializable',
  'java.io.IOException',
  'java.io.ObjectInputStream',
  'java.io.ObjectOutputStream',
  // java.net
  'java.net.URI',
  'java.net.URL',
  'java.net.URLConnection',
  // java.math
  'java.math.BigDecimal',
  'java.math.BigInteger',
  // java.nio
  'java.nio.charset.Charset',
  // java.util
  'java.util.List',
  'java.util.Set',
  'java.util.Map',
  'java.util.Map.Entry',
  'java.util.Collection',
  'java.util.Iterator',
  'java.util.ListIterator',
  'java.util.Locale',
  'java.util.Calendar',
  'java.util.Date',
  'java.util.Properties',
  'java.util.EventListener',
  'java.util.EventObject',
  'java.util.concurrent.Future',
  'java.util.concurrent.TimeUnit',
  'java.util.stream.IntStream',
  // java.sql
  'java.sql.Connection',
  'java.sql.Driver',
  'java.sql.ResultSet',
  'java.sql.ResultSetMetaData',
  'java.sql.PreparedStatement',
  'java.sql.Statement',
  'java.sql.SQLException',
  'java.sql.SQLWarning',
  'java.sql.SQLXML',
  'java.sql.Savepoint',
  'java.sql.Date',
  'java.sql.Time',
  'java.sql.Timestamp',
  'java.sql.Blob',
  'java.sql.Clob',
  'java.sql.NClob',
  'java.sql.Ref',
  'java.sql.RowId',
  'java.sql.Array',
  'java.sql.rowset.CachedRowSet',
  // javax.sql
  'javax.sql.RowSet',
  'javax.sql.RowSetListener',
  'javax.sql.RowSetEvent',
  'javax.sql.RowSetMetaData',
  'javax.sql.rowset.CachedRowSet',
  'javax.sql.rowset.RowSetWarning',
  'javax.sql.rowset.RowSetMetaData',
  'javax.sql.rowset.spi.SyncProvider',
  'javax.sql.rowset.spi.RowSetReader',
  'javax.sql.rowset.spi.RowSetWriter',
  'javax.sql.rowset.spi.RowSetInternal',
  // org.dcm4che2
  'org.dcm4che2.data.DicomObject',
  // com.mirth.connect.model (declared in internal.d.ts)
  'com.mirth.connect.model.converters.IMessageSerializer',
  // com.mirth.connect.donkey (declared in donkey.d.ts)
  'com.mirth.connect.donkey.model.channel.DeployedState',
  'com.mirth.connect.donkey.model.message.ConnectorMessage',
  'com.mirth.connect.donkey.model.message.Message',
  'com.mirth.connect.donkey.model.message.MessageContent',
  'com.mirth.connect.donkey.model.message.MessageSerializerException',
  'com.mirth.connect.donkey.model.message.Response',
  'com.mirth.connect.donkey.model.message.attachment.Attachment',
  'com.mirth.connect.donkey.server.controllers.UnsupportedDataTypeException',
  // com.mirth.connect.server.util.javascript (declared in server-userutil.d.ts)
  'com.mirth.connect.server.util.javascript.MirthContextFactory',
]);

/**
 * Java primitive -> TS. Numeric primitives map to the named aliases in
 * java/primitives.d.ts (which all resolve to `number`) so the emitted signature
 * documents the original Java width.
 */
const PRIMITIVES: Record<string, string> = {
  void: 'void',
  boolean: 'boolean',
  int: 'int',
  long: 'long',
  short: 'short',
  byte: 'byte',
  float: 'float',
  double: 'double',
  char: 'char',
};

/**
 * Bare Java library simple names (no package in the Javadoc text) -> FQN. Used
 * when Javadoc emits an unlinked simple name; the linked form already carries a
 * package and is handled generically.
 */
const SIMPLE_NAME_FQN: Record<string, string> = {
  String: 'java.lang.String',
  Object: 'java.lang.Object',
  CharSequence: 'java.lang.CharSequence',
  Boolean: 'java.lang.Boolean',
  Byte: 'java.lang.Byte',
  Short: 'java.lang.Short',
  Integer: 'java.lang.Integer',
  Long: 'java.lang.Long',
  Float: 'java.lang.Float',
  Double: 'java.lang.Double',
  Character: 'java.lang.Character',
  Number: 'java.lang.Number',
  Class: 'java.lang.Class',
  ClassLoader: 'java.lang.ClassLoader',
  Exception: 'java.lang.Exception',
  Throwable: 'java.lang.Throwable',
  List: 'java.util.List',
  Set: 'java.util.Set',
  Map: 'java.util.Map',
  Collection: 'java.util.Collection',
  Iterator: 'java.util.Iterator',
  ListIterator: 'java.util.ListIterator',
  Locale: 'java.util.Locale',
  Calendar: 'java.util.Calendar',
  Date: 'java.util.Date',
  Properties: 'java.util.Properties',
  Future: 'java.util.concurrent.Future',
  TimeUnit: 'java.util.concurrent.TimeUnit',
  Connection: 'java.sql.Connection',
  Driver: 'java.sql.Driver',
  ResultSet: 'java.sql.ResultSet',
  CachedRowSet: 'javax.sql.rowset.CachedRowSet',
  InputStream: 'java.io.InputStream',
  OutputStream: 'java.io.OutputStream',
  File: 'java.io.File',
  Reader: 'java.io.Reader',
  Writer: 'java.io.Writer',
  Charset: 'java.nio.charset.Charset',
};

export interface ResolveContext {
  /** Simple names declared in the class's own userutil package (resolve unqualified). */
  localSimpleNames: Set<string>;
  /** Fully-qualified prefix of the class's own userutil package. */
  localPackage: string;
  /** Type variables in scope (e.g. `V` for a generic class) — passed through verbatim. */
  typeVars: Set<string>;
  /** Collects original Java type strings that could not be resolved. */
  unresolved: Set<string>;
}

/**
 * Splits a comma-separated generic argument list at top level (ignoring commas
 * nested inside `<...>`).
 */
function splitGenericArgs(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of s) {
    if (ch === '<') depth++;
    else if (ch === '>') depth--;
    if (ch === ',' && depth === 0) {
      out.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

/**
 * Resolves a single Java type string (already normalized by the parser) into a
 * TypeScript type string. Records unresolved types into `ctx.unresolved` and
 * returns `any` for them.
 */
export function mapType(javaType: string, ctx: ResolveContext): string {
  let t = javaType.trim();
  if (!t) return 'any';

  // Bounded wildcards: `? extends X` / `? super X` -> map to the bound type.
  const wild = t.match(/^\?\s+(?:extends|super)\s+(.+)$/);
  if (wild) return mapType(wild[1], ctx);
  if (t === '?') return 'any';

  // Varargs -> array.
  let varargs = false;
  if (t.endsWith('...')) {
    varargs = true;
    t = t.slice(0, -3).trim();
  }

  // Array suffixes (possibly multiple).
  let arraySuffix = '';
  while (t.endsWith('[]')) {
    arraySuffix += '[]';
    t = t.slice(0, -2).trim();
  }
  if (varargs) arraySuffix += '[]';

  // byte[] is preserved as `byte[]`; handled by the generic array logic below
  // since `byte` maps to the `byte` alias.

  // Generic type: split base<args>.
  const ltIndex = t.indexOf('<');
  if (ltIndex !== -1 && t.endsWith('>')) {
    const base = t.slice(0, ltIndex).trim();
    const argsStr = t.slice(ltIndex + 1, -1);
    const baseResolved = resolveBase(base, ctx);
    const args = splitGenericArgs(argsStr).map((a) => mapType(a, ctx));
    return `${baseResolved}<${args.join(', ')}>${arraySuffix}`;
  }

  // Wildcards.
  if (t === '?' || t === 'any') return `any${arraySuffix}`;

  const resolved = resolveBase(t, ctx);
  // Raw use of a generic type (e.g. Java raw `List`): supply default args so the
  // emitted TS reference satisfies the declaration's required arity.
  const arity = GENERIC_ARITY[resolved];
  if (arity !== undefined) {
    const defaults = Array.from({ length: arity }, () => 'any').join(', ');
    return `${resolved}<${defaults}>${arraySuffix}`;
  }
  return `${resolved}${arraySuffix}`;
}

/** Required type-argument counts for declared generic types (for raw-type use). */
const GENERIC_ARITY: Record<string, number> = {
  'java.util.List': 1,
  'java.util.Set': 1,
  'java.util.Collection': 1,
  'java.util.Iterator': 1,
  'java.util.ListIterator': 1,
  'java.util.Map': 2,
  'java.util.Map.Entry': 2,
  'java.util.concurrent.Future': 1,
  'java.lang.Comparable': 1,
  'java.lang.Iterable': 1,
  'java.lang.Class': 1,
};

function resolveBase(base: string, ctx: ResolveContext): string {
  const b = base.trim();

  // Type variable in scope (single upper-case letter or known var).
  if (ctx.typeVars.has(b)) return b;

  // Primitives.
  if (PRIMITIVES[b] !== undefined) return PRIMITIVES[b];

  // Wildcard remnants.
  if (b === '?') return 'any';

  // java.lang.Void / Void -> void (used as Future<Void>).
  if (b === 'java.lang.Void' || b === 'Void') return 'void';

  // java.lang.Number / Number -> TS `number` (Rhino exposes Java numerics as JS numbers).
  if (b === 'java.lang.Number' || b === 'Number') return 'number';

  // Already fully-qualified (contains a dot).
  if (b.includes('.')) {
    if (KNOWN_FQNS.has(b)) return b;
    // Mirth userutil types are declared; trust the package prefix.
    if (
      b.startsWith('com.mirth.connect.server.userutil.') ||
      b.startsWith('com.mirth.connect.userutil.') ||
      b.startsWith('com.mirth.connect.plugins.httpauth.userutil.')
    ) {
      return b;
    }
    // Unknown FQN (typically an internal Mirth type Javadoc left unlinked).
    ctx.unresolved.add(b);
    return unresolvedAny(b);
  }

  // Simple name local to this userutil package.
  if (ctx.localSimpleNames.has(b)) {
    return `${ctx.localPackage}.${b}`;
  }

  // Known Java library simple name.
  if (SIMPLE_NAME_FQN[b] !== undefined) return SIMPLE_NAME_FQN[b];

  // Single-letter -> treat as an (unbound) type variable.
  if (/^[A-Z]$/.test(b)) return b;

  // Unknown simple name.
  ctx.unresolved.add(b);
  return unresolvedAny(b);
}

/** Renders an unresolved type as `any` with an inline TODO marker. */
function unresolvedAny(original: string): string {
  return `any /* TODO: unresolved type ${original} */`;
}

/**
 * Maps a method/constructor PARAMETER type, widening a bare `java.lang.String`
 * to `java.lang.String | string` so JS string literals are accepted (Rhino
 * auto-converts JS strings to Java strings at call time). A `java.lang.String[]`
 * parameter becomes `(java.lang.String | string)[]` for the same reason.
 *
 * Only the parameter's own top-level `java.lang.String` is widened. Generic
 * type arguments (e.g. `java.util.List<java.lang.String>`) and any other type
 * are mapped exactly as {@link mapType} does, so accuracy is preserved there.
 * Return types are NOT routed through this function.
 */
export function mapParamType(javaType: string, ctx: ResolveContext): string {
  const mapped = mapType(javaType, ctx);
  if (mapped === 'java.lang.String') return 'java.lang.String | string';
  if (mapped === 'java.lang.String[]') return '(java.lang.String | string)[]';
  return mapped;
}
