# @ubercode/mirth-connect-types

TypeScript type definitions for the **Mirth Connect / NextGen Connect** server-side
JavaScript (Rhino) **User API** — the globals, `$`-map accessors, and Java/`com.mirth.connect`
classes available inside channel scripts, transformers, and code templates.

> Sibling to [`integration-engine-api`](https://github.com/MichaelLeeHobbs/integration-engine-api),
> which types the **REST API**. This package types the **in-engine script runtime**.

## Why

Mirth channel code runs on Rhino with no module system and a large, mostly-undocumented
surface of Java and `com.mirth.connect.*` classes. These definitions give you editor
IntelliSense, inline Javadoc, and compile-time checking for that surface.

## Install

```sh
pnpm add -D @ubercode/mirth-connect-types
```

## Usage

The definitions are **ambient globals** (no `import` — that mirrors how Mirth scripts run).
Enable them per project in `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "types": ["@ubercode/mirth-connect-types/nextgen-connect/v4.5.2"],
  },
}
```

…or reference them directly in a file:

```ts
/// <reference types="@ubercode/mirth-connect-types/nextgen-connect/v4.5.2" />

$c('patientId', msg['PID']['PID.3']['PID.3.1'].toString());
const name = ChannelUtil.getChannelName(channelId);
```

The Mirth User API utility classes are exposed as **unqualified globals** — `ChannelUtil`,
`AttachmentUtil`, `DateUtil`, `FileUtil`, `HTTPUtil`, `SerializerFactory`, `Lists`/`Maps`, … —
and the `Status` constants (`SENT`, `QUEUED`, `ERROR`, …) are global too, exactly as Mirth
injects them. Methods accept JS string literals (Rhino auto-converts them to `java.lang.String`).

Real-world consumption (subpath `exports`, ambient globals, `skipLibCheck: false` with the DOM
`lib`) is verified on every `check` by a pack → install → type-check smoke test
(`pnpm run test:consumer`).

## Versioning

Definitions are organized **per product + per Mirth version**, matching `integration-engine-api`:

```
nextgen-connect/v4.5.2/   ← current target
  index.d.ts              ← entry; triple-slash references the split files
  globals/                ← index.d.ts: msg, tmp, $c/$co/..., maps, helpers; and
                          ←   userapi.d.ts (generated: ChannelUtil/AttachmentUtil/Status/... globals)
  java/                   ← java.lang / java.util / java.io / ... primitive aliases
  com/mirth/              ← com.mirth.connect.* (userutil, donkey, plugins, ...)
```

### What's covered

The three User API packages are generated from the Mirth Javadoc:

| Package                                       | Types | File                                     |
| --------------------------------------------- | ----: | ---------------------------------------- |
| `com.mirth.connect.server.userutil`           |    30 | `com/mirth/connect-server-userutil.d.ts` |
| `com.mirth.connect.userutil`                  |    17 | `com/mirth/connect-userutil.d.ts`        |
| `com.mirth.connect.plugins.httpauth.userutil` |     2 | `com/mirth/plugins.d.ts`                 |

The supporting `java.*`, `javax.*`, `org.dcm4che2.*`, and internal
`com.mirth.connect.{donkey,model}.*` types these reference are declared as
minimal hand-maintained ambient files (not exhaustive — only the surface the
User API actually touches).

The npm `package` version tracks this repo's releases (semver); the **Mirth** version a set of
types targets is encoded in the path/subpath export. Additional versions and products
(Open Integration Engine, BridgeLink) slot in under the same scheme.

## How the types are produced

The three userutil files are **fully generated** from the Javadoc — they carry
the JSDoc, `@param`/`@returns`/`@throws`/`@deprecated` tags, and signatures the
Javadoc documents. **Do not hand-edit them**; they are overwritten by
`pnpm run generate`.

1. **Fetch** the User API Javadoc from a running Mirth container (see
   `docker-compose` in the companion repo) into `javadoc/<product>/<version>/` —
   the reproducible source of truth. The HTML is committed, so regeneration does
   not require a container.
2. **Generate** the three userutil `.d.ts` (plus `globals/userapi.d.ts`, which
   exposes every User API class/enum as an unqualified global alias) from the
   Javadoc via `src/generator/`. The generator is deterministic: members are
   sorted and output is run through Prettier, so re-running produces
   **byte-identical** files. String parameters are widened to
   `java.lang.String | string` so the API is callable with JS literals.
3. **Curate via overlays.** Hand-written `@example` snippets and extra prose for
   the hot-path classes/methods (`ChannelUtil`, `AttachmentUtil`, `DateUtil`,
   `FileUtil`, `HTTPUtil`, `VMRouter`, `DatabaseConnection*`, `Lists`/`Maps`, …)
   live in `src/generator/overlays.ts`, keyed by `ClassName` /
   `ClassName#methodName`. The emitter merges them into the generated JSDoc, so
   curation survives regeneration.

```sh
pnpm run fetch-javadoc   # pull Javadoc HTML from the container (only when refreshing a version)
pnpm run generate        # Javadoc HTML + overlays -> the three userutil .d.ts
pnpm run generate:hash   # sha256 of the generated files (idempotency check)
pnpm run check           # lint + typecheck + type tests + format check
```

## Scripts

| Script                       | Purpose                                                                                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `check`                      | `lint` + `typecheck` + `test:types` + `format` + `test:consumer` (CI gate).                                                                                                  |
| `typecheck`                  | `tsc --noEmit` over the published `.d.ts`.                                                                                                                                   |
| `test:types`                 | Compile the `test-types/` assertions against the definitions.                                                                                                                |
| `test:consumer`              | Pack the tarball, install it in a temp project, and type-check a real Mirth script — proves the published package resolves and the ambient globals work under the DOM `lib`. |
| `lint` / `format`            | ESLint (generator code) / Prettier (everything).                                                                                                                             |
| `fetch-javadoc` / `generate` | Regenerate the three userutil files from a Mirth container's Javadoc.                                                                                                        |
| `generate:hash`              | Print the sha256 of each generated file (byte-idempotency check).                                                                                                            |

## License

MIT © Michael Hobbs
