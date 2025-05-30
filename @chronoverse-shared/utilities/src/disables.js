import { javascript, typescript, types } from './files.js';

/** @type {import('eslint').Linter.Config} */
const disables = [
	{
		name: '@chronoverse-eslint/disables/rules',
		files: [
			...javascript,
			...typescript,
			...types,
		],
		rules: {
			'@stylistic/js/object-curly-newline': 'off',
			'@stylistic/js/max-len': 'off',
			'@stylistic/js/indent': 'off',
			'no-console': 'off',
		},
	},
];

export { disables };
