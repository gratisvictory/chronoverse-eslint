import { getRulesByConfigName, JAVASCRIPT_FILES } from '@chronoverse-eslint/shared';
import js from '@eslint/js';
/** @ts-expect-error eslint-config-eslint is not typed */
import eslintConfigBase from 'eslint-config-eslint';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { bestPractice } from './rules/best-practice.js';
import { errors } from './rules/errors.js';
import { es6 } from './rules/es6.js';
import { node } from './rules/node.js';
import { strict } from './rules/strict.js';
import { stylistic } from './rules/stylistic.js';
import { variables } from './rules/variables.js';

/** @type {import('eslint').Linter.Config[]} */
const javascript = defineConfig([
	{
		name: '@chronoverse/javascript/setup',
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
				console: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
			},
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
			...getRulesByConfigName('eslint-config-eslint/js', eslintConfigBase),
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
