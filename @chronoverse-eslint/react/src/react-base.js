import { javascript, typescript } from '@chronoverse-shared/utilities';
// eslint-disable-next-line depend/ban-dependencies
import reactPlugin from 'eslint-plugin-react';
import { reactRules } from './rules/react.js';

/** @type {import('eslint').Linter.Config} */
const reactBase = [
	{
		name: '@chronoverse-eslint/react-base/setup',
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: reactPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		name: '@chronoverse-eslint/react-base/rules',
		files: [...javascript, ...typescript],
		rules: {
			...reactPlugin.configs.flat.recommended.rules,
			...reactRules,
		},
	},
];

export { reactBase };
