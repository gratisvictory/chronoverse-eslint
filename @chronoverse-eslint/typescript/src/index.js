import { FILE_PATTERNS, getTsLanguageOptions, interopDefault } from '@chronoverse-shared/utilities';
import safeTsPlugin from '@susisu/eslint-plugin-safe-typescript';
import eslintTsdoc from 'eslint-plugin-tsdoc';
import { defineConfig } from 'eslint/config';
import { consistent } from './rules/consistent.js';
import { extension } from './rules/extension.js';
import { tsSafe } from './rules/safe.js';
import { tsdoc } from './rules/tsdoc.js';

const typescript = await (async () => {
	const tsOptions = await getTsLanguageOptions();
	const tsPlugin = await interopDefault(import('@typescript-eslint/eslint-plugin'));

	return defineConfig([
		{
			name: '@chronoverse/typescript/setup',
			languageOptions: {
				parser: tsOptions.parser,
				parserOptions: tsOptions.parserOptions,
			},
			plugins: {
				'@susisu/safe-typescript': safeTsPlugin,
				'@typescript-eslint': tsPlugin,
				tsdoc: eslintTsdoc,
			},
		},
		{
			name: '@chronoverse/typescript/rules',
			files: [
				...FILE_PATTERNS.typescript,
				...FILE_PATTERNS.types,
			],
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
