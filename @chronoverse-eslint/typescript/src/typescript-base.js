import { typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import safeTsPlugin from '@susisu/eslint-plugin-safe-typescript';
import tsRules from '@typescript-eslint/eslint-plugin';
import eslintTsdoc from 'eslint-plugin-tsdoc';
import typescriptEslint from 'typescript-eslint';

import { consistentRules } from './rules/consistent-rules.js';
import { disablesRules } from './rules/disables-rules.js';
import { extensionRules } from './rules/extension-rules.js';
import { tsSafeRules } from './rules/safe-rules.js';
import { tsdocRules } from './rules/tsdoc-rules.js';
import { typescriptRules } from './rules/typescript-rules.js';
import { typescriptTypeCheckRules } from './rules/typescript-type-check-rules.js';

/** @type {import('eslint').Linter.Config[]} */
const typescript = [
	{
		name: '@chronoverse-eslint/typescript/setup',
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				projectService: true,
				sourceType: 'module',
			},
		},
		plugins: {
			'@susisu/safe-typescript': safeTsPlugin,
			'@typescript-eslint': typescriptEslint.plugin,
			tsdoc: eslintTsdoc,
		},
	},
	{
		name: '@chronoverse-eslint/typescript/rules',
		files: typescriptFiles,
		rules: {
			...tsRules.configs.recommended.rules,
			...tsRules.configs['strict-type-checked'].rules,
			...tsRules.configs['stylistic-type-checked'].rules,
			...extensionRules,
			...consistentRules,
			...typescriptRules,
			...typescriptTypeCheckRules,
			...tsdocRules,
			...tsSafeRules,
			...disablesRules,
		},
	},
];

export { typescript };
