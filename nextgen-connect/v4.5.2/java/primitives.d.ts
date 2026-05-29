// Java primitive type aliases.
//
// In Rhino, Java numeric primitives are converted to JavaScript numbers.
// These aliases carry no runtime meaning; they document the original Java type
// at the call site. Because JavaScript numbers are 64-bit floats, large Java
// `long` values may lose precision when surfaced to script code.

/** Java 64-bit signed integer. Maps to JavaScript `number`. */
type long = number;

/** Java 32-bit signed integer. Maps to JavaScript `number`. */
type int = number;

/** Java 16-bit signed integer. Maps to JavaScript `number`. */
type short = number;

/** Java 8-bit signed integer. Maps to JavaScript `number`. */
type byte = number;

/** Java single-precision float. Maps to JavaScript `number`. */
type float = number;

/** Java double-precision float. Maps to JavaScript `number`. */
type double = number;

/** Java UTF-16 code unit. Maps to JavaScript `number`. */
type char = number;
