import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/consistent.js',
		'./src/rules/extension.js',
		'./src/rules/safe.js',
		'./src/rules/tsdoc.js',
		'./src/config.js',
		'./src/index.js',
	],
});
