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

const rootDir = process.cwd();

const userPkgJsonPath = path.join(rootDir, 'package.json');

/**
 * @typedef {Object} PackageJson
 * @property {Record<string, string>} dependencies
 * @property {Record<string, string>} peerDependencies
 * @property {Record<string, string>} devDependencies
 */

/**
 * @type {PackageJson}
 */
const pkg = JSON.parse(await readFile(userPkgJsonPath, 'utf8'));

/**
 * Generates .d.ts files using TypeScript compiler.
 * @param {string} [tsconfigPath='./tsconfig.build.json'] - Path to TypeScript config.
 * @returns {Promise<void>}
 */
const buildTypes = async (tsconfigPath = './tsconfig.build.json') => {
	console.log('📦 Generating .d.ts from .js + JSDoc...');
	try {
		await execAsync(`tsc -p ${tsconfigPath}`);
		console.log('✅ Types generated');
	} catch (err) {
		/** @type {any} */
		const error = err;
		console.error('❌ Failed to generate types:', error.stderr || error);
		throw err;
	}
};

/**
 * Builds the bundle using esbuild.
 * @param {Object} [options={}] - Build options.
 * @param {string[]} [options.entryPoints=['src/index.js']] - Entry points for the build.
 * @param {string} [options.outdir='dist'] - Output directory.
 * @param {string} [options.tsconfig='./tsconfig.build.json'] - Path to the tsconfig file.
 * @param {boolean} [options.minify=true] - Whether to minify the build.
 * @returns {Promise<void>}
 */
const buildBundle = async (options = {}) => {
	const {
		entryPoints = ['src/index.js'],
		minify = true,
		outdir = 'dist',
		tsconfig = './tsconfig.build.json',
	} = options;

	try {
		await esbuild.build({
			bundle: true,
			entryPoints,
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				...Object.keys(pkg.devDependencies || {}),
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
 * @param {Object} [options={}] - Build options.
 * @param {string} [options.tsconfig='./tsconfig.build.json'] - Path to the tsconfig file.
 * @returns {Promise<void>}
 */
const build = async (options = {}) => {
	const { tsconfig } = options;
	try {
		await buildTypes(tsconfig);
		await buildBundle(options);
		console.log('🎉 Build complete!');
	} catch (error) {
		console.error('Build failed:', { cause: error });
		throw error;
	}
};

export { build };
