/**
 * Type tests for the global User API surface, exercised the way a Mirth channel
 * script would use them — no imports, just ambient globals. Run with:
 *   pnpm run test:types
 *
 * These assertions are compile-only; a type regression fails `tsc`.
 */

// Map accessors return `unknown` and accept an optional value to put.
const channelValue: unknown = $c('myKey');
$c('myKey', 'someValue');
$gc('count', 1);

// Mutable message globals exist.
msg = '<HL7Message/>';
tmp = msg;

// $cfg is read-only (one argument).
const cfgValue: unknown = $cfg('environment');

// Java primitive aliases resolve to number.
const id: long = 42;
const count: int = 7;
void channelValue;
void cfgValue;
void id;
void count;
