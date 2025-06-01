import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintJsxA11y from 'eslint-plugin-jsx-a11y';
import { a11y } from './rules/a11y.js';

/** @type {import('eslint').Linter.Config} */
const jsxA11y = [
	{
		name: '@chronoverse-eslint/jsx-a11y/setup',
		plugins: {
			'jsx-a11y': eslintJsxA11y,
		},
	},
	{
		name: '@chronoverse-eslint/jsx-a11y/rules',
		files: [...javascript, ...typescript],
		rules: {
			...eslintJsxA11y.flatConfigs.recommended.rules,
			...a11y,
		},
	},
];

export { jsxA11y };
