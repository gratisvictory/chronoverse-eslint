import { javascript as javascriptFiles } from '@chronoverse-shared/utilities/files';
import eslintReactPlugin from '@eslint-react/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
const reactJsx = [
	{
		name: '@chronoverse-eslint/react-jsx/setup',
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse-eslint/react-jsx/rules',
		extends: [eslintReactPlugin.configs.recommended],
		files: javascriptFiles,
	},
];

export { reactJsx };
