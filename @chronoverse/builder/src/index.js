// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import { exec } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';
import { promisify } from 'node:util';
import * as esbuild from 'esbuild';

/**
 * Promisified version of `exec`.
 * @type {Function}
 */
const execAsync = promisify(exec);

const rootDirection = process.cwd();

const userPackageJsonPath = path.join(rootDirection, 'package.json');

/**
 * @typedef {object} PackageJson
 * @property {Record<string, string>} dependencies - Package dependencies
 * @property {Record<string, string>} peerDependencies - Package peer dependencies
 * @property {Record<string, string>} devDependencies - Package development dependencies
 */

/**
 * @type {PackageJson}
 */
// eslint-disable-next-line security/detect-non-literal-fs-filename
const packageJson = JSON.parse(await readFile(userPackageJsonPath, 'utf8'));

/**
 * Generates .d.ts files using TypeScript compiler.
 * @param {string} tsconfigPath - Path to TypeScript config
 * @returns {Promise<void>}
 */
const buildTypes = async (tsconfigPath = './tsconfig.json') => {
	console.log('📦 Generating .d.ts from .js + JSDoc...');
	try {
		await execAsync(`tsc -p ${tsconfigPath}`);
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
 * @typedef {object} BuildOptions
 * @property {string[]} entryPoints - Entry points for the build
 * @property {string} outdir - Output directory
 * @property {string} tsconfig - Path to the tsconfig file
 * @property {boolean} minify - Whether to minify the build
 */

/**
 * Builds the bundle using esbuild.
 * @param {BuildOptions} options - Build options
 * @returns {Promise<void>}
 */
const buildBundle = async (
	options = {
		entryPoints: ['src/index.js'],
		minify: true,
		outdir: 'dist',
		tsconfig: './tsconfig.json',
	},
) => {
	const { entryPoints = ['src/index.js'], minify = true, outdir = 'dist', tsconfig = './tsconfig.json' } = options;

	try {
		await esbuild.build({
			bundle: true,
			entryPoints,
			external: [
				...Object.keys(packageJson.dependencies || {}),
				...Object.keys(packageJson.peerDependencies || {}),
			],
			format: 'esm',
			minify,
			outdir,
			platform: 'node',
			sourcemap: false,
			target: 'esnext',
			tsconfig: path.resolve(tsconfig),
		});

		console.log('🚀 Build completed successfully!');
	} catch (error) {
		console.error('Build failed:', { cause: error });
		throw error;
	}
};

/**
 * Main build function to generate types and build the bundle.
 * @param {BuildOptions} options - Build options
 * @returns {Promise<void>}
 */
const build = async (
	options = {
		entryPoints: ['src/index.js'],
		minify: true,
		outdir: 'dist',
		tsconfig: './tsconfig.json',
	},
) => {
	const { entryPoints = ['src/index.js'], minify = true, outdir = 'dist', tsconfig = './tsconfig.json' } = options;
	try {
		await buildTypes(tsconfig);
		await buildBundle({ entryPoints, minify, outdir, tsconfig });
		console.log('🎉 Build complete!');
	} catch (error) {
		console.error('Build failed:', { cause: error });
		throw error;
	}
};

export { build };
