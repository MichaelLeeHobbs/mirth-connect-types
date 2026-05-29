import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // The published .d.ts trees are validated by `tsc` (typecheck / test:types),
    // not ESLint — ambient global declarations trip rules like no-undef/no-var.
    // Prettier still formats them via the `format` script.
    ignores: ['node_modules', 'javadoc/**', '**/*.d.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Generator tooling is the only runtime code in this package.
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
);
