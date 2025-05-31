import { typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import safeTsPlugin from '@susisu/eslint-plugin-safe-typescript';
import tsRules from '@typescript-eslint/eslint-plugin';
import eslintTsdoc from 'eslint-plugin-tsdoc';
import typescriptEslint from 'typescript-eslint';

import { consistent } from './rules/consistent.js';
import { extension } from './rules/extension.js';
import { tsSafe } from './rules/safe.js';
import { tsdoc } from './rules/tsdoc.js';

/** @type {import('eslint').Linter.Config} */
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
			...extension,
			...consistent,
			...tsdoc,
			...tsSafe,
		},
	},
];

export { typescript };
