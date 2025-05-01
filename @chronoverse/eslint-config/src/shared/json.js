import { JSON_FILES } from '@chronoverse-eslint/shared';
import eslintJson from '@eslint/json';
import { defineConfig } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
const json = defineConfig([
	{
		name: '@chronoverse/json/setup',
		plugins: {
			json: eslintJson,
		},
	},
	{
		name: '@chronoverse/json/rules',
		files: JSON_FILES,
		...eslintJson.configs.recommended,
	},
]);

export { json };
