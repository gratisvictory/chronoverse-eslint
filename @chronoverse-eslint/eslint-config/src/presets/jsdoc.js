import { FILE_PATTERNS, getRulesByConfigName } from '@chronoverse-shared/utilities';
// @ts-expect-error eslint-config-eslint is not typed
import eslintConfigJsdoc from 'eslint-config-eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

const settings = {
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

/**
 * JSDoc rules for JavaScript files.
 * Enforces consistent documentation standards for JavaScript code.
 * Uses the recommended configuration for standard JavaScript.
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */
const jsdocJs = defineConfig([
	{
		name: '@chronoverse/jsdocJs/setup',
		plugins: {
			jsdoc: jsdocPlugin,
		},
	},
	{
		name: '@chronoverse/jsdocJs/rules',
		files: FILE_PATTERNS.javascript,
		rules: {
			...jsdocPlugin.configs?.['flat/recommended']?.rules,
		},
	},
]);

/**
 * JSDoc rules for TypeScript files.
 * Enforces TypeScript-specific documentation standards.
 * Combines TypeScript-specific JSDoc rules with base eslint-config-eslint JSDoc rules.
 * Provides enhanced documentation validation for TypeScript projects.
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */
const jsdocTs = defineConfig([
	{
		name: '@chronoverse/jsdocTs/setup',
		plugins: {
			jsdoc: jsdocPlugin,
		},
		settings,
	},
	{
		name: '@chronoverse/jsdocTs/rules',
		files: FILE_PATTERNS.typescript,
		rules: {
			...jsdocPlugin.configs?.['flat/recommended-typescript'].rules,
			...getRulesByConfigName('eslint-config-eslint/jsdoc', eslintConfigJsdoc),
		},
	},
]);

export { jsdocJs, jsdocTs };
