import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/consistent-rules.js',
		'./src/rules/extension-rules.js',
		'./src/rules/safe-rules.js',
		'./src/rules/tsdoc-rules.js',
		'./src/rules/typescript-rules.js',
		'./src/rules/typescript-type-check-rules.js',
		'./src/rules/disables-rules.js',
		'./src/typescript-base.js',
		'./src/index.js',
	],
});
