import { javascript, types, typescript } from './files.js';

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
			'@stylistic/js/indent': 'off',
			'@stylistic/js/max-len': 'off',
			'@stylistic/js/object-curly-newline': 'off',
			'no-console': 'off',
		},
	},
];

export { disables };
