import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/best-practice-rules.js',
		'./src/rules/errors-rules.js',
		'./src/rules/es6-rules.js',
		'./src/rules/node-rules.js',
		'./src/rules/strict-rules.js',
		'./src/rules/stylistic-rules.js',
		'./src/rules/variables-rules.js',
		'./src/javascript-base.js',
		'./src/index.js',
	],
});
