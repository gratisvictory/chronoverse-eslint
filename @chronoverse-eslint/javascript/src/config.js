import { getRulesByConfigName, javascript as jsFiles, sharedGlobals } from '@chronoverse-shared/utilities';
import js from '@eslint/js';
import eslintConfigBase from 'eslint-config-eslint';

import { bestPractice } from './rules/best-practice.js';
import { errors } from './rules/errors.js';
import { es6 } from './rules/es6.js';
import { node } from './rules/node.js';
import { strict } from './rules/strict.js';
import { stylistic } from './rules/stylistic.js';
import { variables } from './rules/variables.js';

/**
 * Chronoverse base JavaScript ESLint config.
 * Combines multiple rule sets for best practices, modern JS, stylistic consistency, and safety.
 */
/** @type {import('eslint').Linter.Config} */
const javascript = [
	/** Base setup */
	{
		name: '@chronoverse-eslint/javascript/setup',
		languageOptions: {
			ecmaVersion: 'latest',
			globals: sharedGlobals,
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
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},
	},

	/** Rules for JavaScript files */
	{
		name: '@chronoverse-eslint/javascript/rules',
		files: jsFiles,
		plugins: {
			js,
		},
		rules: {
			/** Rules recommended */
			...js.configs.recommended.rules,
			/** Rules from eslint-config-eslint's base config */
			...getRulesByConfigName('eslint-config-eslint/js', eslintConfigBase),

			/** Custom rule sets */
			...bestPractice,
			...errors,
			...es6,
			...strict,
			...variables,
			...stylistic,
			...node,
		},
	},
];

export { javascript };
