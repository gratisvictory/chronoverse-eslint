import { getRulesByConfigName } from '@chronoverse-eslint/shared';
// @ts-expect-error eslint-config-eslint is not typed
import eslintConfigJsdoc from 'eslint-config-eslint';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

const jsdocForJs = defineConfig([
	{
		name: '@chronoverse/jsdoc/rules',
		plugins: {
			jsdoc: eslintPluginJsdoc,
		},
		rules: {
			...eslintPluginJsdoc.configs['flat/recommended-error'].rules,
		},
	},
]);

const jsdocForTs = defineConfig([
	{
		name: '@chronoverse/jsdoc/rules',
		plugins: {
			jsdoc: eslintPluginJsdoc,
		},
		rules: {
			...eslintPluginJsdoc.configs['flat/recommended-typescript-error'].rules,
			...getRulesByConfigName('eslint-config-eslint/jsdoc', eslintConfigJsdoc),
		},
	},
]);

export { jsdocForJs, jsdocForTs };
