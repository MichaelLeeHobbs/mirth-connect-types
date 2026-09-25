# Changelog

All notable changes to `@ubercode/mirth-connect-types` are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the package version follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> The npm package version is independent of the Mirth version a type set targets — the Mirth
> version is encoded in the subpath export (e.g. `@ubercode/mirth-connect-types/nextgen-connect/v4.5.2`).

## [Unreleased]

### Changed

- **Parameters accept the JS values Rhino converts for them**, across the generated User API and
  the hand-written `java.*`/`javax.*`/internal files: JS strings (and E4X `XML`) for `String`,
  JS numbers for boxed numerics, any value for `Object`, JS arrays for `List`/`Collection`/
  `Iterable`, and JS objects for `Map`. Aliases (`JString`, `JInteger`, `JObject`, …) are in
  `java/coercion.d.ts`. Return types are unchanged. Fixes `destinationSet.remove([...])`,
  `removeAllExcept('name')`, `globalMap.put('k', 'v')`, `new java.lang.String(s)`,
  `ChannelUtil.startConnector(id, 1)`, and similar calls that run on Mirth but failed to type-check.
- The script maps (`globalMap`, `channelMap`, `sourceMap`, …) are `java.util.Map<JString, any>`,
  and the `$c`/`$gc`/`$g`/… accessors return `any`, so reads of live objects need no cast.
- `msg` and `tmp` are `any`: they are an E4X `XML` object, a parsed JSON value, or a string
  depending on the channel's data type, which the types can't see.
- Java primitive arrays and chars are returned the way Rhino hands them to scripts: `getBytes()`
  returns `byte[]` and `toCharArray()` returns `char[]` (JS number arrays), and `charAt()` returns
  `char` (a number). The deprecated `String#getBytes(int, int, byte[], int)` overload is removed.

### Added

- `javax.crypto` (`Cipher`, `Mac`, `SecretKeyFactory`, `KeyGenerator`, `SecretKey`, and
  `spec.SecretKeySpec`/`IvParameterSpec`/`GCMParameterSpec`/`PBEKeySpec`), the
  `java.security` types they use, `javax.xml.bind.DatatypeConverter` (bundled with Mirth), and
  `java.io.ByteArrayInputStream`/`ByteArrayOutputStream`.
- `java.util.Properties` extends the new `java.util.Hashtable`, so `put`/`get` exist.
- Rhino top-level: `Packages` (mirrors `java`/`javax`/`com`; other packages are `any`),
  `JavaAdapter`, `importPackage`, and `importClass` (marked deprecated, as Mirth logs an error).
- `JSON.parse` accepts a `java.lang.String` (Rhino converts it).
- `XMLList`: `children()`, `elements()`, `descendants()`, and `child()` return it, and it indexes
  to `XML`.
- Scope built-ins: `reader` (batch scripts) and both `getAttachment(...)` forms.
- `java.time` (`Instant`, `LocalDate`, `LocalDateTime`, `ZonedDateTime`, `ZoneId`, `ZoneOffset`,
  `zone.ZoneRules`, `format.DateTimeFormatter`, `format.TextStyle`).
- `XML#toXMLString()` and the E4X settings (`XML.prettyPrinting`, `prettyIndent`,
  `ignoreWhitespace`, `ignoreComments`, `ignoreProcessingInstructions`, `settings()`,
  `setSettings()`, `defaultSettings()`).
- `java.lang.Thread`, `java.io.StringWriter`/`PrintWriter`, and `Throwable#printStackTrace(PrintWriter)`.
- Mirth internals (`com.mirth.connect.model`, `server.controllers`, `server.util`, and
  `donkey.server`'s `Donkey` and subpackages) are `any` values instead of errors.
- E4X child access on any `XML` value (`seg['OBX.1']['OBX.1.1'] = 'x'`): `XML` has a string
  index signature.
- Collection lookups (`Map#get`/`containsKey`/`containsValue`/`remove`, `List`/`Collection`
  `contains`/`indexOf`/`remove`) take `JKey<K>`, the key type or a JS string, but not a JS number.
  Rhino passes a JS number to Java's `Object` parameter as a `Double`, which never matches an
  `Integer` key. `ImmutableMessage#getConnectorMessages()` returns a `ConnectorMessageMap` whose
  `get` does accept a number, since Mirth converts it.
- donkey `Message` and `ConnectorMessage` getters (from the 4.5.2 donkey jar).
- Java interfaces are runtime values (`JavaInterface<T>`), so `x instanceof java.util.List`
  compiles and narrows, while `new java.util.List()` is still an error.
- `java.text.SimpleDateFormat` and `Normalizer`, `java.security.KeyStore`, and
  `java.io.FileInputStream`/`FileOutputStream`.
- `java.util.ArrayList`, `HashMap`, `Base64`, `Arrays`, `UUID`, and `Calendar#add`;
  `java.lang.System`, `java.lang.reflect.Array`, `java.lang.Runnable`, the boxed types' `TYPE`
  constants, and `java.io.BufferedReader`.
- README: Rhino language support (`const` in a loop keeps its first value; template literals don't
  interpolate; no spread, `class`, or
  default parameters) with a matching `lib` list, and a troubleshooting entry for code templates
  that end in `module.exports`.
- `new XML(value)` constructor.
- README troubleshooting: where the reference file must live, `typeRoots` disabling checks, E4X
  literal files, and duplicate installs.
- `pnpm run check:coercion`, which fails the build when a declaration breaks the coercion rule.

## [0.1.1] — 2026-09-24

### Changed

- README: removed references to the unpublished `integration-engine-api` project.
- CI: Windows runs pass (LF line endings via `.gitattributes`); releases publish from GitHub
  Actions via npm trusted publishing with provenance.

## [0.1.0] — 2026-09-24

Initial release. Targets **Mirth Connect / NextGen Connect 4.5.2**.

### Added

- **User API type definitions** (`nextgen-connect/v4.5.2`): the message/map globals, `$`-map
  accessors (`$c`/`$co`/`$s`/`$gc`/`$g`/`$r`/`$cfg`/`$`), built-in helper functions
  (`createSegment`, `addAttachment`, `updateAttachment`, `validate`, …), the E4X `XML` class, and
  the `com.mirth.connect.*` User API — the three `*.userutil` namespaces (~49 types) generated
  from the Mirth 4.5.2 Javadoc with JSDoc + `@example` overlays.
- **Unqualified global aliases** for every User API class/enum (`ChannelUtil`, `AttachmentUtil`,
  `new RawMessage(...)`, `Status.SENT`, …) plus the `Status` constants — matching how Mirth
  injects them into the script scope.
- Supporting ambient declarations for `java.*`, `javax.sql.*`, `org.dcm4che2.*`, and the internal
  `com.mirth.connect.{donkey,model,…}` types the User API references.
- **Javadoc → `.d.ts` generator** (`src/generator/`) with deterministic, byte-idempotent output
  and a regeneration-safe overlay system for hand-written examples.
- **Tooling:** pnpm, ESLint 9 (flat) + Prettier, husky + lint-staged, GitHub Actions CI + publish
  workflows, `test-types/` compile-only assertions, and a `test:consumer` pack → install →
  type-check smoke test that validates real published-package consumption.

### Notes

- String **parameters** accept `java.lang.String | string` (Rhino auto-converts JS strings);
  return types stay `java.lang.String` for accuracy.
- `Response` is reachable only via its `com.mirth.connect.userutil.Response` FQN — the unqualified
  global alias is omitted to avoid colliding with the DOM `Response` global.

[0.1.1]: https://github.com/MichaelLeeHobbs/mirth-connect-types/releases/tag/v0.1.1
[0.1.0]: https://github.com/MichaelLeeHobbs/mirth-connect-types/releases/tag/v0.1.0
