import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/functional-js.js',
		'./src/functional-ts.js',
		'./src/index.js',
	],
});
