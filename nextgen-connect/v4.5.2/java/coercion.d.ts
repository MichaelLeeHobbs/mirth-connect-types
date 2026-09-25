// Parameter types that Rhino coerces from JavaScript values.
//
// When a script calls a Java method, Rhino converts each JS argument to the
// declared Java parameter type: a JS string to `java.lang.String`, a JS number
// to `java.lang.Integer`/`Long`/..., a JS boolean to `java.lang.Boolean`, and
// anything to `java.lang.Object`. A JS array is a `java.util.List` (Rhino's
// NativeArray implements it) and a plain JS object is a `java.util.Map`
// (NativeObject implements it).
//
// Method and constructor PARAMETERS use these aliases so idiomatic script code
// type-checks. Return types stay the exact Java type. `pnpm run check:coercion`
// enforces the rule across every declaration file; the generator applies it on
// output.

/**
 * A `java.lang.String` parameter: also accepts a JS string, or an E4X `XML` object, which Rhino
 * converts with `toString()` (so `serializer.fromXML(msg)` works).
 */
type JString = java.lang.String | string | XML;

/** A `java.lang.CharSequence` parameter: also accepts a JS string. */
type JCharSequence = java.lang.CharSequence | string;

/** A `java.lang.Object` parameter: Rhino accepts any JS value. */
type JObject = unknown;

/** A `java.lang.Boolean` parameter: also accepts a JS boolean. */
type JBoolean = java.lang.Boolean | boolean;

/** A `java.lang.Character` parameter: also accepts a one-character JS string or a char code. */
type JCharacter = java.lang.Character | string | number;

/** A `java.lang.Byte` parameter: also accepts a JS number. */
type JByte = java.lang.Byte | number;

/** A `java.lang.Short` parameter: also accepts a JS number. */
type JShort = java.lang.Short | number;

/** A `java.lang.Integer` parameter: also accepts a JS number. */
type JInteger = java.lang.Integer | number;

/** A `java.lang.Long` parameter: also accepts a JS number (precision is lost above 2^53). */
type JLong = java.lang.Long | number;

/** A `java.lang.Float` parameter: also accepts a JS number. */
type JFloat = java.lang.Float | number;

/** A `java.lang.Double` parameter: also accepts a JS number. */
type JDouble = java.lang.Double | number;
