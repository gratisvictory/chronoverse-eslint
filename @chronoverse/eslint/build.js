import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import * as esbuild from 'esbuild';
import * as path from 'node:path';

const execAsync = promisify(exec);

const buildTypes = async () => {
	console.log('📦 Generating .d.ts from .js + JSDoc...');
	try {
		await execAsync('tsc -p tsconfig.build.json');
		console.log('✅ Types generated');
	} catch (err) {
		console.error('❌ Failed to generate types:', err.stderr || err);
		throw err;
	}
};

const buildBundle = async () => {
	const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url), 'utf-8'));
	try {
		await esbuild.build({
			entryPoints: ['src/index.js'],
			outdir: 'dist',
			bundle: true,
			format: 'esm',
			platform: 'node',
			target: 'esnext',
			minify: true,
			sourcemap: false,
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				...Object.keys(pkg.devDependencies || {}),
			],
			tsconfig: path.resolve('./tsconfig.build.json'),
		});

		console.log('🚀 Build completed successfully!');
	} catch (error) {
		console.error('Build failed:', {
			cause: error,
		});
	}
};

const build = async () => {
	await buildTypes();
	await buildBundle();
	console.log('🎉 Build complete!');
};

await build();
