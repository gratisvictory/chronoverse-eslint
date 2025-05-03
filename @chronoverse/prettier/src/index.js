import { reformattedRules } from '@chronoverse-eslint/shared';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

const prettier = defineConfig([
	{
		name: '@chronoverse/prettier/rules',
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	},
	{
		name: '@chronoverse/prettier/disables/rules',
		rules: {
			...reformattedRules(eslintConfigPrettier.rules),
		},
	},
]);

export { prettier };
