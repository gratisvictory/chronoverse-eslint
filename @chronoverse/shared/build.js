import { build } from '@chronoverse-eslint/builder';
await build({
	entryPoints: ['src/index.js'],
	minify: false,
	outdir: 'dist',
	tsconfig: './tsconfig.json',
});
