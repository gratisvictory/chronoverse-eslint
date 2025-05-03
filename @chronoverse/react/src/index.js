import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '@chronoverse-eslint/shared';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// eslint-disable-next-line depend/ban-dependencies
import reactPlugin from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

const reactJSX = defineConfig([
	{
		name: '@chronoverse/react/setup',
		files: JAVASCRIPT_FILES,
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.serviceworker,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse/react/rules',
		extends: [
			// @ts-expect-error
			eslintReact.configs.recommended,
			// @ts-expect-error
			reactPlugin.configs.flat.recommended,
			jsxA11y.flatConfigs.recommended,
			reactCompiler.configs.recommended,
			reactHooks.configs['recommended-latest'],
		],
	},
]);

const reactTSX = defineConfig([
	{
		name: '@chronoverse/react/setup',
		files: TYPESCRIPT_FILES,
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.serviceworker,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		name: '@chronoverse/react/rules',
		extends: [
			// @ts-expect-error
			eslintReact.configs['recommended-typescript'],
			// @ts-expect-error
			reactPlugin.configs.flat.recommended,
			jsxA11y.flatConfigs.recommended,
			reactCompiler.configs.recommended,
			reactHooks.configs['recommended-latest'],
		],
	},
]);

export { reactJSX, reactTSX };
