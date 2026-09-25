/**
 * Type tests for the global User API surface, exercised the way a Mirth channel
 * script would use them — no imports, just ambient globals. Run with:
 *   pnpm run test:types
 *
 * These assertions are compile-only; a type regression fails `tsc`.
 */

// Map accessors return `any` like the script maps they read, and accept an optional value to put.
const channelValue: unknown = $c('myKey');
const stored: unknown = JSON.parse($gc('jsonConfig'));
$g('dbConnection').close();
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
void stored;
void cfgValue;
void id;
void count;

// Scope variables from Mirth 4.5.2's JavaScriptScopeUtil.
const cfgDirect: unknown = configurationMap.get('environment');
const connectorName: string = connector;
const outboundTemplate: string = template;
const rowValue: unknown = resultMap.get('patient_id');
const delimiter: string = columnDelimiter;
// message is a string in the preprocessor and an ImmutableMessage in the postprocessor.
const preprocessorMessage: string = message;
// Both response classes have getMessage/getError/getStatusMessage; the status getter differs.
const responseText = response.getMessage();
// $ only reads.
// @ts-expect-error $ takes a single key
$('key', 'value');
// These appear in Mirth's editor highlighting but aren't in any script scope.
// @ts-expect-error not a runtime global
createDatabaseConnection('driver', 'url');
// @ts-expect-error not a runtime global
databaseConnectionFactory.createDatabaseConnection('driver', 'url');

void cfgDirect;
void connectorName;
void outboundTemplate;
void rowValue;
void delimiter;
void preprocessorMessage;
void responseText;
