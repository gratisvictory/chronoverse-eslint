#!/usr/bin/env node
import { chmod, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDirectory = join(__dirname, '..');

const entryPoints = [
	'src/index.js',
	'src/cli.js',
];

const outdir = 'dist';

/**
 * Ensure directory exists
 * @param {string} directory - Directory path
 */
const ensureDirectory = async directory => {
	try {
		await mkdir(directory, { recursive: true });
	} catch (error) {
		if (error.code !== 'EEXIST') throw error;
	}
};

/**
 * Make file executable
 * @param {string} filePath - Path to file
 */
const makeExecutable = async filePath => {
	try {
		await chmod(filePath, 0o755);
		console.log(`✅ Made ${filePath} executable`);
	} catch (error) {
		console.error(`❌ Failed to make ${filePath} executable:`, error);
	}
};

/**
 * Add shebang to a file
 * @param {string} filePath - Path to file
 */
const addShebang = async filePath => {
	try {
		const content = await readFile(filePath, 'utf8');
		// Only add shebang if it's not already there
		if (!content.startsWith('#!/usr/bin/env node')) {
			await writeFile(filePath, `#!/usr/bin/env node\n${content}`, 'utf8');
			console.log(`✅ Added shebang to ${filePath}`);
		}
	} catch (error) {
		console.error(`❌ Failed to add shebang to ${filePath}:`, error);
	}
};

const buildSelf = async () => {
	console.log('📦 Building @chronoverse-shared/builder...');

	try {
		await ensureDirectory(join(rootDirectory, outdir));

		const result = await esbuild.build({
			bundle: true,
			entryPoints: entryPoints.map(entry => join(rootDirectory, entry)),
			external: [
				'esbuild',
				'node:*',
			],
			format: 'esm',
			metafile: true,
			outdir: join(rootDirectory, outdir),
			platform: 'node',
			sourcemap: false,
			target: 'esnext',
		});

		console.log('✅ Build completed successfully!');

		// Handle CLI file
		const cliFilePath = join(rootDirectory, outdir, 'cli.js');
		await addShebang(cliFilePath);
		await makeExecutable(cliFilePath);

		const outputFiles = Object.keys(result.metafile.outputs);
		console.log(`📊 Generated ${outputFiles.length} files:`);
		console.log(outputFiles.map(file => `   - ${file}`).join('\n'));

		console.log('🎉 Build complete!');
	} catch (error) {
		console.error('❌ Build failed:', error);
		process.exit(1);
	}
};

/**
 * Main function to execute the build
 */
const main = async () => {
	try {
		await buildSelf();
	} catch (error) {
		console.error('❌ Unexpected error:', error);
		process.exit(1);
	}
};

// Run the build without using top-level await
await main();
