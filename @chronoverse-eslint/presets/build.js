import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/presets/comments.js',
		'./src/presets/css.js',
		'./src/presets/dependency.js',
		'./src/presets/jsdoc.js',
		'./src/presets/json.js',
		'./src/presets/mutation.js',
		'./src/presets/next.js',
		'./src/presets/node.js',
		'./src/presets/perfectionist.js',
		'./src/presets/prettier.js',
		'./src/presets/promise.js',
		'./src/presets/regexp.js',
		'./src/presets/security.js',
		'./src/presets/unicorn.js',
		'./src/index.js',
	],
});
