import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/constants.js',
		'./src/files.js',
		'./src/globals.js',
		'./src/ignores.js',
		'./src/disables.js',
		'./src/index.js',
		'./src/rule-options.js',
		'./src/rules.js',
	],
});
