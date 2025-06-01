import { javascript } from '@chronoverse-shared/utilities/files';
import eslintReactPlugin from '@eslint-react/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
const eslintReactJsx = [
	{
		name: '@chronoverse-eslint/eslint-react-jsx/setup',
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse-eslint/eslint-react-jsx/rules',
		extends: [eslintReactPlugin.configs.recommended],
		files: javascript,
	},
];

export { eslintReactJsx };
