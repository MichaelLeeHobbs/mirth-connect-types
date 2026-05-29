/**
 * Type definitions for the Mirth Connect / NextGen Connect server-side
 * JavaScript (Rhino) User API — version 4.5.2.
 *
 * These are AMBIENT GLOBAL declarations: Mirth channel scripts run in a Rhino
 * script scope with no module system, so everything here is declared globally
 * and consumed without `import`. Add this package to your tsconfig `types`, or
 * reference it directly:
 *
 *   /// <reference types="@ubercode/mirth-connect-types/nextgen-connect/v4.5.2" />
 *
 * ----------------------------------------------------------------------------
 * String type conventions
 * ----------------------------------------------------------------------------
 * Rhino exposes three string-ish types:
 *   1. `string`            JS primitive string. typeof === "string".
 *                          Used for Mirth global JS wrapper return values and
 *                          for `toString()` (required by TS's Object base).
 *   2. `String`            JS String wrapper object. typeof === "object".
 *                          Rare in this surface.
 *   3. `java.lang.String`  Java String object. typeof === "object".
 *                          Returned/accepted by Java APIs; Rhino transparently
 *                          converts to/from a JS string in most contexts.
 * We model Java method returns as `java.lang.String` for accuracy about what
 * the Java API actually hands back.
 *
 * ----------------------------------------------------------------------------
 * Java type conventions
 * ----------------------------------------------------------------------------
 * Java types are namespaced by their Java package (`java.lang.Object`,
 * `java.util.List`, etc.). Java numeric primitives map to `number` via the
 * aliases in ./java/primitives.d.ts.
 *
 * The declarations are split across files by package and merged via these
 * triple-slash references (ambient namespaces merge across files).
 */

/// <reference path="./java/primitives.d.ts" />
/// <reference path="./java/lang.d.ts" />
/// <reference path="./java/io.d.ts" />
/// <reference path="./java/net.d.ts" />
/// <reference path="./java/util.d.ts" />
/// <reference path="./java/nio.d.ts" />
/// <reference path="./java/sql.d.ts" />
/// <reference path="./javax/sql.d.ts" />
/// <reference path="./org/dcm4che2.d.ts" />
/// <reference path="./com/mirth/commons.d.ts" />
/// <reference path="./com/mirth/internal.d.ts" />
/// <reference path="./com/mirth/donkey.d.ts" />
/// <reference path="./com/mirth/plugins.d.ts" />
/// <reference path="./com/mirth/connect-server-userutil.d.ts" />
/// <reference path="./com/mirth/connect-userutil.d.ts" />
/// <reference path="./globals/index.d.ts" />
/// <reference path="./globals/userapi.d.ts" />
