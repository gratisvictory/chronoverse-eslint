import { getRulesByConfigName, javascript as jsFiles, sharedGlobals } from '@chronoverse-shared/utilities';
import js from '@eslint/js';
import eslintConfigBase from 'eslint-config-eslint';

import { bestPracticeRules } from './rules/best-practice-rules.js';
import { errorsRules } from './rules/errors-rules.js';
import { es6Rules } from './rules/es6-rules.js';
import { nodeRules } from './rules/node-rules.js';
import { strictRules } from './rules/strict-rules.js';
import { stylisticRules } from './rules/stylistic-rules.js';
import { variablesRules } from './rules/variables-rules.js';

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
			...bestPracticeRules,
			...errorsRules,
			...es6Rules,
			...strictRules,
			...variablesRules,
			...stylisticRules,
			...nodeRules,
		},
	},
];

export { javascript };
