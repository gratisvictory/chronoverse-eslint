import { FILE_PATTERNS, interopDefault } from '@chronoverse-shared/utilities';
import safeTsPlugin from '@susisu/eslint-plugin-safe-typescript';
import functional from 'eslint-plugin-functional';
import eslintTsdoc from 'eslint-plugin-tsdoc';
import { defineConfig } from 'eslint/config';
import { consistent } from './rules/consistent.js';
import { extension } from './rules/extension.js';
import { tsSafe } from './rules/safe.js';
import { tsdoc } from './rules/tsdoc.js';

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
				// @ts-expect-error
				parser: tsParser,
				parserOptions: {
					projectService: true,
					sourceType: 'module',
				},
			},
		},
		{
			name: '@chronoverse/typescript/rules',
			extends: [
				// @ts-expect-error
				functional.configs.externalTypeScriptRecommended,
				// @ts-expect-error
				functional.configs.recommended,
				// @ts-expect-error
				functional.configs.stylistic,
			],
			files: FILE_PATTERNS.typescript,
			plugins: {
				'@susisu/safe-typescript': safeTsPlugin,
				// @ts-expect-error
				'@typescript-eslint': tsPlugin,
				tsdoc: eslintTsdoc,
			},
			rules: {
				// @ts-expect-error
				...tsPlugin.configs.recommended.rules,
				// @ts-expect-error
				...tsPlugin.configs['strict-type-checked'].rules,
				// @ts-expect-error
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
