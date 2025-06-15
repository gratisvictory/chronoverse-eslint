import { javascript, typescript } from './files.js';

/** @type {import('eslint').Linter.Config} */
const disables = [
	{
		name: '@chronoverse-eslint/disables/rules',
		files: [
			...javascript,
			...typescript,
		],
		rules: {
			'@stylistic/indent': 'off',
			'@stylistic/max-len': 'off',
			'@stylistic/object-curly-newline': 'off',
			'no-console': 'off',
		},
	},
];

export { disables };
