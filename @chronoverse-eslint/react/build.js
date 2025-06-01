import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/rules/a11y.js',
		'./src/rules/react.js',
		'./src/eslint-react-jsx.js',
		'./src/eslint-react-tsx.js',
		'./src/jsx-a11y.js',
		'./src/react-compiler.js',
		'./src/react-hooks.js',
		'./src/react.js',
		'./src/index.js',
	],
});
