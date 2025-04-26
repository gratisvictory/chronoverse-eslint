import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import { bestPractice } from './rules/best-practice.js';
import { errors } from './rules/errors.js';
import { es6 } from './rules/es6.js';
import { node } from './rules/node.js';
import { strict } from './rules/strict.js';
import { variables } from './rules/variables.js';
import { stylistic } from './rules/stylistic.js';
import { JAVASCRIPT_FILES } from '@chronoverse-eslint/shared';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const javascript = defineConfig([
	{
		name: '@chronoverse/javascript/setup',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
				console: 'readonly',
			},
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
			reportUnusedInlineConfigs: 'error',
		},
	},
	{
		name: '@chronoverse/javascript/rules',
		files: JAVASCRIPT_FILES,
		plugins: {
			js,
		},
		rules: {
			...js.configs.recommended.rules,
			...bestPractice,
			...errors,
			...es6,
			...strict,
			...variables,
			...stylistic,
			...node,
		},
	},
]);

export { javascript };
