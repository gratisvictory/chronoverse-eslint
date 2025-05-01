import * as regexpPlugin from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
const regexp = defineConfig([
	{
		name: '@chronoverse/regexp/rules',
		plugins: {
			regexp: regexpPlugin,
		},
		rules: {
			...regexpPlugin.configs['flat/recommended'].rules,
		},
	},
]);

export { regexp };
