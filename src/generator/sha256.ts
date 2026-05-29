/**
 * Prints the SHA-256 of each generated userutil `.d.ts`. Used to confirm
 * `pnpm run generate` is byte-idempotent: generate, hash, generate again, hash,
 * and compare. Run with `pnpm run generate:hash`.
 */

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', '..', 'nextgen-connect', 'v4.5.2', 'com', 'mirth');

const FILES = ['connect-server-userutil.d.ts', 'connect-userutil.d.ts', 'plugins.d.ts'];

for (const file of FILES) {
  const hash = createHash('sha256')
    .update(readFileSync(join(OUT_DIR, file)))
    .digest('hex');
  console.log(`${hash}  ${file}`);
}
