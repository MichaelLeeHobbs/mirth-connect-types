# Contributing

Thanks for helping improve `@ubercode/mirth-connect-types`.

## The golden rule: don't hand-edit generated files

- The three `nextgen-connect/<version>/com/mirth/*-userutil.d.ts` files **and**
  `nextgen-connect/<version>/globals/userapi.d.ts` are **generated**. Never edit them by hand —
  change the generator in `src/generator/` (or the curated `src/generator/overlays.ts`) and run
  `pnpm run generate`.
- Everything else is hand-maintained ambient `.d.ts`: `globals/index.d.ts`, `java/*`, `javax/*`,
  `org/*`, and the internal (non-`userutil`) `com/mirth/*` files.
- See [`CLAUDE.md`](./CLAUDE.md) for the full architecture.

## Workflow

```sh
pnpm install
pnpm run generate     # regenerate the userutil files + global aliases from the vendored Javadoc + overlays
pnpm run check        # lint + typecheck + test:types + format + test:consumer
```

Before opening a PR:

- `pnpm run check` must pass.
- `pnpm run generate` must be **byte-idempotent** — compare `pnpm run generate:hash` before and
  after; the committed generated files must match a fresh run.
- A pre-commit hook runs `lint-staged` automatically.

## Adding a new Mirth version

1. Copy the closest existing version dir: `cp -r nextgen-connect/v<old> nextgen-connect/v<new>`.
2. Refresh the Javadoc against a container of that version (`docker compose up` the matching image,
   then `pnpm run fetch-javadoc`).
3. `pnpm run generate`, reconcile diffs, and add a subpath to `exports` in `package.json`.
4. `pnpm run check`.

## Type conventions

- Java method **returns** use `java.lang.String` (and other Java types) for accuracy; string
  **parameters** are widened to `java.lang.String | string` so JS string literals type-check
  (Rhino auto-converts).
- Numeric Java primitives map to the aliases in `java/primitives.d.ts` (`int`, `long`, `byte`, …).
- No TypeScript `enum` in hand-written files (it is lint-banned); the generated enums are the
  documented exception.
- Don't emit a global alias that collides with a TypeScript lib global (e.g. `Response`). The
  `test:consumer` smoke test runs with the DOM `lib` and `skipLibCheck: false`, so it catches these.
