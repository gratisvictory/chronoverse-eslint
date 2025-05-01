import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '@chronoverse-eslint/shared';
import eslintReact from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const reactJsx = defineConfig([
	{
		name: '@chronoverse/react/setup',
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse/react/rules',
		// @ts-ignore
		extends: [eslintReact.configs.recommended],
		files: JAVASCRIPT_FILES,
	},
]);

/** @type {import('eslint').Linter.Config[]} */
const reactTsx = defineConfig([
	{
		name: '@chronoverse/react/setup',
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse/react/rules',
		// @ts-ignore
		extends: [eslintReact.configs['recommended-typescript']],
		files: TYPESCRIPT_FILES,
	},
]);

export { reactJsx, reactTsx };
