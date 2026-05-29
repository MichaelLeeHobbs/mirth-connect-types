/**
 * Pulls the Mirth User API Javadoc out of a running Mirth container into
 * `javadoc/<product>/<version>/`, which `generate.ts` then consumes.
 *
 * The Javadoc ships inside the official Mirth image at
 * `/opt/connect/docs/javadocs/user-api/`. The working command (for the 4.5.2
 * container in this repo's compose stack) is:
 *
 *   docker cp mikes-mirth-code-mirth4_5_2-1:/opt/connect/docs/javadocs/user-api/. \
 *     ./javadoc/nextgen-connect/v4.5.2/
 *
 * This script parameterizes that by container name + product + version. The
 * HTML is already committed to the repo, so generation does NOT require a
 * running container; this module only needs to run when refreshing a version.
 *
 * Usage:
 *   tsx src/generator/fetch-javadoc.ts [--container <name>] [--version <v>] \
 *     [--product <p>] [--src <path-in-container>] [--dry-run]
 */

import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

interface Options {
  container: string;
  product: string;
  version: string;
  srcPath: string;
  dryRun: boolean;
}

const DEFAULTS: Options = {
  container: 'mikes-mirth-code-mirth4_5_2-1',
  product: 'nextgen-connect',
  version: 'v4.5.2',
  srcPath: '/opt/connect/docs/javadocs/user-api/.',
  dryRun: false,
};

function parseArgs(argv: string[]): Options {
  const opts: Options = { ...DEFAULTS };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case '--container':
        opts.container = argv[++i];
        break;
      case '--product':
        opts.product = argv[++i];
        break;
      case '--version':
        opts.version = argv[++i];
        break;
      case '--src':
        opts.srcPath = argv[++i];
        break;
      case '--dry-run':
        opts.dryRun = true;
        break;
      default:
        console.warn(`Ignoring unknown argument: ${arg}`);
    }
  }
  return opts;
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const repoRoot = join(__dirname, '..', '..');
  const dest = join(repoRoot, 'javadoc', opts.product, opts.version);

  const cmd = 'docker';
  const args = ['cp', `${opts.container}:${opts.srcPath}`, `${dest}/`];

  console.log('Fetching Mirth User API Javadoc from container:');
  console.log(`  container : ${opts.container}`);
  console.log(`  source    : ${opts.srcPath}`);
  console.log(`  dest      : ${dest}`);
  console.log(`  command   : ${cmd} ${args.join(' ')}`);

  if (opts.dryRun) {
    console.log('\n--dry-run: not executing. The Javadoc HTML is already present in the repo.');
    return;
  }

  mkdirSync(dest, { recursive: true });
  const result = spawnSync(cmd, args, { stdio: 'inherit' });
  if (result.error) {
    console.error(`\nFailed to run docker cp: ${result.error.message}`);
    console.error('Ensure Docker is installed and the Mirth container is running.');
    process.exitCode = 1;
    return;
  }
  if (result.status !== 0) {
    console.error(`\ndocker cp exited with code ${result.status}.`);
    process.exitCode = result.status ?? 1;
    return;
  }
  console.log('\nDone. Run `pnpm run generate` to regenerate the .d.ts files.');
}

main();
