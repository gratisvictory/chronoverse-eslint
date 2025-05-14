import process from 'node:process';
// eslint-disable-next-line n/no-unsupported-features/node-builtins
import { parseArgs as parseArguments } from 'node:util';
import { build } from './index.js';

/**
 * Parse command line arguments for build options
 * @returns {import('./index.js').BuildOptions} Parsed build options from command line arguments
 */
const parseCliArguments = () => {
	const { positionals, values } = parseArguments({
		allowPositionals: true,
		args: process.argv.slice(2),
		options: {
			entry: { type: 'string', multiple: true, short: 'e' },
			format: { type: 'string', short: 'f' },
			help: { type: 'boolean', short: 'h' },
			minify: { type: 'boolean', default: true, short: 'm' },
			outdir: { type: 'string', short: 'o' },
			platform: { type: 'string', short: 'p' },
			target: { type: 'string' },
			tsconfig: { type: 'string', short: 't' },
			watch: { type: 'boolean', default: false, short: 'w' },
		},
	});

	if (values.help) {
		console.log(`
📦 @chronoverse-shared/builder

Usage: builder [options] [entry-files...]

Options:
  -e, --entry     Entry point files (can be specified multiple times)
  -o, --outdir    Output directory (default: "dist")
  -t, --tsconfig  Path to tsconfig.json (default: "./tsconfig.json")
  -m, --minify    Minify the output (default: true)
  -p, --platform  Build platform: "node", "browser", or "neutral" (default: "node")
  -f, --format    Module format: "esm" or "cjs" (default: "esm")
  --target        JavaScript target (default: "esnext")
  -w, --watch     Watch mode (default: false)
  -h, --help      Show this help message

Examples:
  builder
  builder src/index.js
  builder --entry=src/index.js --outdir=dist --minify
  builder -e src/index.js -e src/cli.js -o dist -w
    `);
		process.exit(0);
	}

	/** @type {import('./index.js').BuildOptions} */
	const options = {};

	const entryPoints = values.entry || [];

	if (positionals.length !== 0) {
		const newEntryPoints = [
			...entryPoints,
			...positionals,
		];
		options.entryPoints = newEntryPoints;
	} else if (entryPoints.length !== 0) {
		options.entryPoints = entryPoints;
	}

	if (values.outdir) options.outdir = values.outdir;
	if (values.tsconfig) options.tsconfig = values.tsconfig;
	if (values.minify !== undefined) options.minify = values.minify;
	if (values.platform) {
		const { platform } = values;
		if (platform === 'node' || platform === 'browser' || platform === 'neutral') options.platform = platform;
	}
	if (values.format) {
		const { format } = values;
		if (format === 'esm' || format === 'cjs') options.format = format;
	}
	if (values.target) options.target = values.target;
	if (values.watch !== undefined) options.watch = values.watch;

	return options;
};

/**
 * Main function to run the build process
 */
const main = async () => {
	try {
		const options = parseCliArguments();
		await build(options);
	} catch (error) {
		console.error('Build failed:', error instanceof Error ? error.message : String(error));
		process.exit(1);
	}
};

await main();
