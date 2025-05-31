import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/javascript.js',
		'./src/rules/jsx.js',
		'./src/rules/plus.js',
		'./src/rules/typescript.js',
		'./src/stylistic-js.js',
		'./src/stylistic-jsx.js',
		'./src/stylistic-plus.js',
		'./src/stylistic-ts.js',
		'./src/index.js',
	],
});
