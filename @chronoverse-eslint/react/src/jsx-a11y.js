import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintJsxA11y from 'eslint-plugin-jsx-a11y';
import { a11yRules } from './rules/a11y-rules.js';

const jsxA11yFiles = [...javascriptFiles, ...typescriptFiles];

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
		files: jsxA11yFiles,
		rules: {
			...eslintJsxA11y.flatConfigs.recommended.rules,
			...a11yRules,
		},
	},
];

export { jsxA11y };
