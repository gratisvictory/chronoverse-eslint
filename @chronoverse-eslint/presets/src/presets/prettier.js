import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

const prettier = defineConfig([
	{
		name: '@chronoverse/prettier/setup',
		plugins: {
			prettier: eslintPluginPrettier,
		},
	},
	{
		name: '@chronoverse/prettier/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
			...FILE_PATTERNS.types,
		],
		rules: {
			'prettier/prettier': 'error',
		},
	},
]);

const prettierConfig = defineConfig([
	{
		name: '@chronoverse/prettier-config/disables/rules',
		rules: eslintConfigPrettier.rules,
	},
]);

export { prettier, prettierConfig };
