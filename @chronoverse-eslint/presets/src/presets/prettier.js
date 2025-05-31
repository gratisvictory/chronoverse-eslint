import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
const prettier = [
	{
		name: '@chronoverse-eslint/prettier/setup',
		plugins: {
			prettier: eslintPluginPrettier,
		},
	},
	{
		name: '@chronoverse-eslint/prettier/rules',
		files: [...javascript, ...typescript],
		rules: {
			'prettier/prettier': 'error',
			...eslintConfigPrettier.rules,
		},
	},
];

export { prettier };
