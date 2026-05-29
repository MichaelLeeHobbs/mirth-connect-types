# Changelog

All notable changes to `@ubercode/mirth-connect-types` are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the package version follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> The npm package version is independent of the Mirth version a type set targets — the Mirth
> version is encoded in the subpath export (e.g. `@ubercode/mirth-connect-types/nextgen-connect/v4.5.2`).

## [0.1.0] — unreleased

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

[0.1.0]: https://github.com/MichaelLeeHobbs/mirth-connect-types/releases/tag/v0.1.0
