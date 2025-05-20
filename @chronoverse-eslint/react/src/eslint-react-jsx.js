import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintReactPlugin from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';

const eslintReactJsx = defineConfig([
	{
		name: '@chronoverse/@eslint-react-jsx/setup',
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse/@eslint-react-jsx/rules',
		extends: [eslintReactPlugin.configs.recommended],
		files: FILE_PATTERNS.javascript,
	},
]);

export { eslintReactJsx };
