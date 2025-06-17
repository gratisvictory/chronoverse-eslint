import {
	json5 as json5Files,
	jsonc as jsoncFiles,
	json as jsonFiles,
	lockfiles,
} from '@chronoverse-shared/utilities/files';
import eslintJson from '@eslint/json';

/**
 * JSON rules for ESLint.
 * Provides linting capabilities for JSON, JSONC, and JSON5 files.
 * Applies appropriate parser options for each JSON variant (standard, with comments, JSON5).
 * Excludes package lock files from linting.
 * @see https://github.com/eslint/json
 */
/** @type {import('eslint').Linter.Config} */
const json = [
	{
		name: '@chronoverse-eslint/json/setup',
		plugins: {
			json: eslintJson,
		},
	},
	{
		name: '@chronoverse-eslint/json/rules',
		files: jsonFiles,
		ignores: lockfiles.slice(0, 1),
		language: 'json/json',
		rules: eslintJson.configs.recommended.rules,
	},
	{
		name: '@chronoverse-eslint/jsonc/rules',
		files: jsoncFiles,
		language: 'json/jsonc',
		languageOptions: {
			allowTrailingCommas: true,
		},
		rules: eslintJson.configs.recommended.rules,
	},
	{
		name: '@chronoverse-eslint/json5/rules',
		files: json5Files,
		language: 'json/json5',
		rules: eslintJson.configs.recommended.rules,
	},
];

export { json };
