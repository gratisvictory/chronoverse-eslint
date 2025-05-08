import { build } from './src/index.js';
await build({
	entryPoints: ['src/index.js'],
	minify: true,
	outdir: 'dist',
	tsconfig: './tsconfig.json',
});
