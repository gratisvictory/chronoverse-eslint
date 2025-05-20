import { FILE_PATTERNS, getRulesByConfigName } from '@chronoverse-shared/utilities';
import eslintConfigJsdoc from 'eslint-config-eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

const eslintConfigJsdocOverride = getRulesByConfigName('eslint-config-eslint/jsdoc', eslintConfigJsdoc);

const jsdocSettings = {
	jsdoc: {
		mode: 'typescript',
		preferredTypes: {
			'*': {
				message: 'Use a more precise type or if necessary use `any` or `ArbitraryCallbackResult`',
				replacement: 'any',
			},
			'.<>': {
				message: 'Prefer type form without dot',
				replacement: '<>',
			},
			Any: {
				message: 'Use a more precise type or if necessary use `any` or `ArbitraryCallbackResult`',
				replacement: 'any',
			},
			array: 'Array',
			function: {
				message: 'Point to a `@callback` namepath or `Function` if truly arbitrary in form',
				replacement: 'Function',
			},
			object: {
				message: 'Use the specific object type or `Object` if truly arbitrary',
				replacement: 'Object',
			},
			Promise: {
				message: 'Specify the specific Promise type, including, if necessary, the type `any`',
			},
		},
		tagNamePreference: {
			augments: 'extends',
			class: 'constructor',
			file: 'fileoverview',
		},
	},
};

const jsdoc = defineConfig([
	{
		name: '@chronoverse/jsdoc/setup',
		plugins: {
			jsdoc: jsdocPlugin,
		},
		settings: jsdocSettings,
	},

	/** JavaScript */
	{
		name: '@chronoverse/jsdoc/js-rules',
		files: FILE_PATTERNS.javascript,
		rules: jsdocPlugin.configs['flat/recommended-error'].rules,
	},

	/** TypeScript */
	{
		name: '@chronoverse/jsdoc/ts-rules',
		files: FILE_PATTERNS.typescript,
		rules: {
			...jsdocPlugin.configs['flat/recommended-typescript'].rules,
			...eslintConfigJsdocOverride,
		},
	},
]);

export { jsdoc };
