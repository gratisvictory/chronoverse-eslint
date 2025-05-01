import eslintPluginUnicornX from 'eslint-plugin-unicorn-x';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const unicorn = defineConfig([
	{
		name: '@chronoverse/unicorn/setup',
		languageOptions: {
			globals: globals.builtin,
		},
	},
	{
		name: '@chronoverse/unicorn/rules',
		plugins: {
			'unicorn-x': eslintPluginUnicornX,
		},
		rules: {
			...eslintPluginUnicornX.configs.recommended.rules,
		},
	},
]);

export { unicorn };
