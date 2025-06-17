import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/a11y-rules.js',
		'./src/rules/react-rules.js',
		'./src/react-jsx.js',
		'./src/react-tsx.js',
		'./src/jsx-a11y.js',
		'./src/react-compiler.js',
		'./src/react-hooks.js',
		'./src/react-base.js',
		'./src/react-refresh-vite.js',
		'./src/react-refresh.js',
		'./src/index.js',
	],
});
