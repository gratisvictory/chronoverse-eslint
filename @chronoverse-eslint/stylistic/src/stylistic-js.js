import { javascript as javascriptFiles } from '@chronoverse-shared/utilities/files';
import eslintStylisticJs from '@stylistic/eslint-plugin-js';
import { javascript } from './rules/javascript.js';

/** @type {import('eslint').Linter.Config} */
const stylisticJs = [
	{
		name: '@chronoverse-eslint/stylistic-js/setup',
		plugins: {
			'@stylistic/js': eslintStylisticJs,
		},
	},
	{
		name: '@chronoverse-eslint/stylistic-js/rules',
		files: javascriptFiles,
		rules: { ...javascript },
	},
];

export { stylisticJs };
