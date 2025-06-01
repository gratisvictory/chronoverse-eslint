import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/consistent.js',
		'./src/rules/extension.js',
		'./src/rules/safe.js',
		'./src/rules/tsdoc.js',
		'./src/typescript-base.js',
		'./src/index.js',
	],
});
