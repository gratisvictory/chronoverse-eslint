import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintJson from '@eslint/json';
import { defineConfig } from 'eslint/config';

const jsonRules = eslintJson.configs.recommended.rules;

/**
 * JSON rules for ESLint.
 * Provides linting capabilities for JSON, JSONC, and JSON5 files.
 * Applies appropriate parser options for each JSON variant (standard, with comments, JSON5).
 * Excludes package lock files from linting.
 * @see https://github.com/eslint/json
 */
const json = defineConfig([
	{
		name: '@chronoverse/json/setup',
		plugins: {
			json: eslintJson,
		},
	},
	{
		name: '@chronoverse/json/rules',
		files: FILE_PATTERNS.json,
		ignores: FILE_PATTERNS.lockfiles.slice(0, 1),
		language: 'json/json',
		rules: { ...jsonRules },
	},
	{
		name: '@chronoverse/jsonc/rules',
		files: FILE_PATTERNS.jsonc,
		language: 'json/jsonc',
		languageOptions: {
			allowTrailingCommas: true,
		},
		rules: { ...jsonRules },
	},
	{
		name: '@chronoverse/json5/rules',
		files: FILE_PATTERNS.json5,
		language: 'json/json5',
		rules: { ...jsonRules },
	},
]);

export { json };
