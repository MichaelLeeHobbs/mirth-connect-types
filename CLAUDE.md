# CLAUDE.md — @ubercode/mirth-connect-types

## What this is

A **types-only** npm package: ambient TypeScript declarations for the Mirth Connect /
NextGen Connect server-side JavaScript (Rhino) **User API**. There is **no runtime code** to
ship — the `.d.ts` files _are_ the published artifact (no build/dist, no tsup, no vitest).
The only executable code is the Javadoc-to-`.d.ts` generator under `src/generator/`.

Sibling project: `../integration-engine-api` types the REST API and is the structural
template (per product + per version, `src/generator/`, `test-types/`, per-version `exports`).

## Layout

- `nextgen-connect/v<version>/` — published definitions for one Mirth version.
  - `index.d.ts` — entry; wires the split files with `/// <reference path>`.
  - `globals/`, `java/`, `com/mirth/` — split by package; ambient namespaces **merge across files**.
- `javadoc/<product>/<version>/` — raw Javadoc HTML pulled from a Mirth container (source of truth).
- `src/generator/` — `fetch-javadoc.ts` (pull HTML), `generate.ts` (HTML → skeleton `.d.ts`).
- `test-types/` — `*.test-d.ts` compile-only assertions; run via `pnpm run test:types`.

## Conventions

- Declarations are **global/ambient** (no top-level `import`/`export` in the `.d.ts`, so they
  register globally). Don't wrap them in `declare global {}` — these are script-scope files,
  not modules.
- Model Java method returns as `java.lang.String` etc. for accuracy; numeric primitives use the
  aliases in `java/primitives.d.ts` (`long`, `int`, `byte`, …).
- Hot-path User API classes get hand-written JSDoc + `@example`; the long tail can stay generated.
- Tooling matches the author's other `_published` packages: pnpm, ESLint 9 flat config, Prettier
  (printWidth 100, single quotes, semis, 2-space). `.d.ts` are excluded from ESLint (tsc validates
  them) but formatted by Prettier.

## Validate

`pnpm run check` = lint + typecheck + type tests + format check. Always run before committing.

## Targeting a new Mirth version

Copy `nextgen-connect/v<old>/` to the new version dir, re-run `fetch-javadoc`/`generate` against a
container of that version, reconcile diffs, and add a subpath to `exports` in `package.json`.
