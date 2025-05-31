import { getRulesByConfigName, javascript, typescript } from '@chronoverse-shared/utilities';
import eslintConfigUnicorn from 'eslint-config-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/**
 * Unicorn-X rules for ESLint.
 * Provides a collection of high-quality rules to enforce better JavaScript/TypeScript practices.
 * Includes advanced rules for code consistency, preventing common errors, and encouraging modern patterns.
 * Custom configuration with many specific rule overrides for project requirements.
 * @see https://github.com/es-tooling/eslint-plugin-unicorn-x
 */
/** @type {import('eslint').Linter.Config} */
const unicorn = [
	{
		name: '@chronoverse-eslint/unicorn/setup',
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
	},
	{
		name: '@chronoverse-eslint/unicorn/rules',
		files: [...javascript, ...typescript],
		rules: {
			...eslintPluginUnicorn.configs.recommended.rules,
			...getRulesByConfigName('eslint-config-eslint/unicorn', eslintConfigUnicorn),
		},
	},
];

export { unicorn };
