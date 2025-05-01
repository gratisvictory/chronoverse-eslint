import { interopDefault, TYPESCRIPT_FILES } from '@chronoverse-eslint/shared';
import safeTsPlugin from '@susisu/eslint-plugin-safe-typescript';
import eslintTsdoc from 'eslint-plugin-tsdoc';
import { defineConfig } from 'eslint/config';
import { consistent } from './rules/consistent.js';
import { extension } from './rules/extension.js';
import { tsSafe } from './rules/safe.js';
import { tsdoc } from './rules/tsdoc.js';

/** @type {import('eslint').Linter.Config[]} */
const typescript = await (async () => {
	const [
		tsParser,
		tsPlugin,
	] = await Promise.all([
		interopDefault(import('@typescript-eslint/parser')),
		interopDefault(import('@typescript-eslint/eslint-plugin')),
	]);

	return defineConfig([
		{
			name: '@chronoverse/typescript/setup',
			languageOptions: {
				parser: tsParser,
				parserOptions: {
					projectService: true,
					sourceType: 'module',
				},
			},
		},
		{
			name: '@chronoverse/typescript/rules',
			files: TYPESCRIPT_FILES,
			plugins: {
				'@susisu/safe-typescript': safeTsPlugin,
				'@typescript-eslint': tsPlugin,
				tsdoc: eslintTsdoc,
			},
			rules: {
				...tsPlugin.configs.recommended.rules,
				...tsPlugin.configs['strict-type-checked'].rules,
				...tsPlugin.configs['stylistic-type-checked'].rules,
				...extension,
				...consistent,
				...tsdoc,
				...tsSafe,
			},
		},
	]);
})();

export { typescript };
