# @ubercode/mirth-connect-types

TypeScript type definitions for the **Mirth Connect / NextGen Connect** server-side
JavaScript (Rhino) **User API** — the globals, `$`-map accessors, and Java/`com.mirth.connect`
classes available inside channel scripts, transformers, and code templates.

> Sibling to [`integration-engine-api`](https://github.com/MichaelLeeHobbs/integration-engine-api),
> which types the **REST API**. This package types the **in-engine script runtime**.

> [!IMPORTANT]
> **Early preview** — types currently cover **NextGen Connect 4.5.2** only. More versions and
> forks (Open Integration Engine, BridgeLink) are coming; see
> [Project status & roadmap](#project-status--roadmap).

## Why

Mirth channel code runs on Rhino with no module system and a large, mostly-undocumented
surface of Java and `com.mirth.connect.*` classes. These definitions give you editor
IntelliSense, inline Javadoc, and compile-time checking for that surface.

## Install

```sh
pnpm add -D @ubercode/mirth-connect-types
```

## Usage

Mirth Connect runs your channel scripts as **JavaScript** on Rhino — it does **not** support
TypeScript. You keep writing JavaScript and paste that same `.js` into Mirth as always; this
package simply gives your editor full type information for it: autocomplete, inline Javadoc,
parameter hints, and — if you opt in — type-checking. **Nothing is compiled or bundled for
Mirth.** The types live only in your editor/checker, never in what you deploy.

The definitions are **ambient globals** (no `import` — mirroring how Mirth scripts run). The
User API utility classes are exposed as unqualified globals — `ChannelUtil`, `AttachmentUtil`,
`DateUtil`, `FileUtil`, `HTTPUtil`, `SerializerFactory`, `Lists`/`Maps`, … — and the `Status`
constants (`SENT`, `QUEUED`, `ERROR`, …) too, exactly as Mirth injects them. Methods accept JS
string literals (Rhino auto-converts them to `java.lang.String`).

```js
// transformer.js — plain JavaScript, exactly what you paste into Mirth
$c('patientId', msg['PID']['PID.3']['PID.3.1'].toString());
const name = ChannelUtil.getChannelName(channelId); // ← autocomplete, hover docs, checking
```

➡️ **[Editor setup](#editor-setup)** wires these into VS Code or WebStorm in about a minute — no
TypeScript project required.

## Editor setup

These definitions work in **plain JavaScript** projects — you do not need to adopt TypeScript.
The package ships ambient declarations; you just point your editor at them.

**1. Add the package** to the project that holds your Mirth scripts:

```sh
pnpm add -D @ubercode/mirth-connect-types   # or: npm i -D … / yarn add -D …
```

**2. Activate the types** with one small declaration file at the project root — call it anything,
e.g. `mirth.d.ts`:

```ts
/// <reference types="@ubercode/mirth-connect-types" />
```

That one line makes every Mirth global (`msg`, `tmp`, `$c`, `ChannelUtil`, `Status`, …) available
to all the `.js` files in the project. The bare specifier loads the default version; to pin one
explicitly, use the subpath form
`/// <reference types="@ubercode/mirth-connect-types/nextgen-connect/v4.5.2" />` together with
`"moduleResolution": "bundler"` (see _TypeScript projects_ below).

### VS Code (JavaScript)

Add a `jsconfig.json` at the project root so VS Code treats the folder as a JS project:

```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2020"], // Rhino ≈ ES5 plus bits of ES6 — keep modest; do not add "dom"
    "checkJs": false, // set true to type-check every .js, or use `// @ts-check` per file
  },
  "include": ["**/*.js", "mirth.d.ts"],
}
```

- Autocomplete and hover docs work immediately.
- Want mistakes flagged as errors? Set `"checkJs": true`, or add `// @ts-check` to the top of
  individual scripts for opt-in, file-by-file checking.

### WebStorm / IntelliJ IDEA (JavaScript)

WebStorm automatically uses type definitions found in `node_modules` and honors `jsconfig.json`,
so the `mirth.d.ts` + `jsconfig.json` above is enough — globals resolve in code completion and
quick documentation out of the box. If completion doesn't appear:

- confirm the project's `node_modules` is recognized
  (**Settings → Languages & Frameworks → Node.js**), or
- register it explicitly: **Settings → Languages & Frameworks → JavaScript → Libraries → Add…**
  and point at `node_modules/@ubercode/mirth-connect-types`.

For inline error highlighting, enable the TypeScript service (it checks `.js` too) under
**Settings → Languages & Frameworks → TypeScript**, or add `// @ts-check` per file.

### TypeScript projects (optional)

If you author tooling in a TypeScript-aware project, you can skip `mirth.d.ts` and reference the
version directly in `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["@ubercode/mirth-connect-types/nextgen-connect/v4.5.2"],
  },
}
```

Either way, **the code that runs in Mirth is still JavaScript** — the types are purely an
editor/checker aid, not a build step.

> Verified end-to-end: real consumption (subpath `exports`, ambient globals, `skipLibCheck: false`
> with the DOM `lib`) is exercised on every `check` by a pack → install → type-check smoke test
> (`pnpm run test:consumer`).

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

## Project status & roadmap

> [!IMPORTANT]
> **This is an early preview.** It currently provides types for **NextGen Connect 4.5.2** only,
> and the surface may shift as the generator and conventions settle.

Planned next:

- **More Mirth Connect versions** — generated from each release's Javadoc and published under the
  same `nextgen-connect/v<x.y.z>` subpath scheme, so you can pin types per environment.
- **Forks** — Open Integration Engine and BridgeLink, under their own `open-integration-engine/…`
  and `bridgelink/…` subpaths (mirroring [`integration-engine-api`](https://github.com/MichaelLeeHobbs/integration-engine-api)).
- Deeper documentation for the internal `java.*` support types.

Feedback and issues are very welcome while the surface stabilizes.

## License

MIT © Michael Hobbs
