import { build } from '@chronoverse-eslint/builder';
await build({
	entryPoints: ['src/index.js'],
	minify: true,
	outdir: 'dist',
	tsconfig: './tsconfig.json',
});
