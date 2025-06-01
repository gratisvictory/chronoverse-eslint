import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/best-practice.js',
		'./src/rules/errors.js',
		'./src/rules/es6.js',
		'./src/rules/node.js',
		'./src/rules/strict.js',
		'./src/rules/stylistic.js',
		'./src/rules/variables.js',
		'./src/javascript-base.js',
		'./src/index.js',
	],
});
