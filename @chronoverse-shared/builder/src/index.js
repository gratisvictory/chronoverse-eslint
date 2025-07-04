import { exec } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';
import esbuild from 'esbuild';

/**
 * Promisified version of `exec`.
 * @type {Function}
 */
const execAsync = promisify(exec);

/**
 * @typedef {Object} BuildOptions
 * @property {string[]} [entryPoints] - Entry points for the build
 * @property {string} [outdir] - Output directory
 * @property {string} [tsconfig] - Path to the tsconfig file
 * @property {boolean} [minify] - Whether to minify the build
 * @property {'node'|'browser'|'neutral'} [platform] - Build platform target
 * @property {'esm'|'cjs'} [format] - Module format
 * @property {string} [target] - Build target (e.g. 'esnext')
 * @property {string[]} [external] - External dependencies to exclude from bundling
 * @property {boolean} [watch] - Whether to watch for changes
 */

/**
 * Detect if running in Bun environment
 * @returns {boolean} True if running in Bun
 */
export const isBun = () =>
	process !== undefined && process.versions !== undefined && process.versions.bun !== undefined;

/**
 * Get package.json content
 * @param {string} [rootDirectory] - Root directory containing package.json
 * @returns {Promise<{dependencies?: Record<string, string>, peerDependencies?: Record<string, string>, devDependencies?: Record<string, string>}>} Parsed package.json
 */
export const getPackageJson = async (rootDirectory = process.cwd()) => {
	const packageJsonPath = path.join(rootDirectory, 'package.json');
	try {
		const content = await readFile(packageJsonPath, 'utf8');
		return JSON.parse(content);
	} catch (error) {
		console.warn('⚠️ Could not read package.json:', error instanceof Error ? error.message : String(error));
		return {};
	}
};

/**
 * Generates .d.ts files using TypeScript compiler.
 * @param {string} [tsconfigPath] - Path to TypeScript config
 * @returns {Promise<void>}
 */
export const buildTypes = async (tsconfigPath = './tsconfig.json') => {
	console.log('📦 Generating .d.ts from .js + JSDoc...');
	try {
		// Use the appropriate command based on environment (Bun or Node.js)
		await execAsync(`${isBun() ? 'bun' : 'npx'} tsc -p ${tsconfigPath}`);
		console.log('✅ Types generated');
	} catch (error) {
		if (error instanceof Error) {
			console.error('❌ Failed to generate types:', error.message || error);
		} else {
			console.error('❌ Failed to generate types:', error);
		}
		throw error;
	}
};

/**
 * Builds the bundle using esbuild.
 * @param {BuildOptions} [options] - Build options
 * @returns {Promise<void>}
 */
export const buildBundle = async (options = {}) => {
	const {
		entryPoints = ['src/index.js'],
		format = 'esm',
		minify = true,
		outdir = 'dist',
		platform = 'node',
		target = 'esnext',
		tsconfig = './tsconfig.json',
		watch = false,
	} = options;

	try {
		const context =
			watch ?
				await esbuild.context({
					entryPoints,
					format,
					minify,
					outdir,
					platform,
					sourcemap: false,
					target,
					tsconfig: path.resolve(tsconfig),
				})
			:	undefined;

		if (watch && context) {
			// eslint-disable-next-line better-mutation/no-mutating-methods
			await context.watch();
			console.log('👀 Watching for changes...');
		} else {
			await esbuild.build({
				entryPoints,
				format,
				minify,
				outdir,
				platform,
				sourcemap: false,
				target,
				tsconfig: path.resolve(tsconfig),
			});
			console.log('🚀 Build completed successfully!');
		}
	} catch (error) {
		console.error('Build failed:', error instanceof Error ? error.message : error);
		throw error;
	}
};

/**
 * Main build function to generate types and build the bundle.
 * @param {BuildOptions} [options] - Build options
 * @returns {Promise<void>}
 */
export const build = async (options = {}) => {
	const {
		entryPoints = ['src/index.js'],
		minify = true,
		outdir = 'dist',
		tsconfig = './tsconfig.json',
		watch = false,
		...rest
	} = options;

	try {
		await buildBundle({
			entryPoints,
			minify,
			outdir,
			tsconfig,
			watch,
			...rest,
		});

		if (!watch) await buildTypes(tsconfig);

		console.log('🎉 Build complete!');
	} catch (error) {
		console.error('Build failed:', error instanceof Error ? error.message : error);
		throw error;
	}
};

export default build;
