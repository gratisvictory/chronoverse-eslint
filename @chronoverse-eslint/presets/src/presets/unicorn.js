import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import { getRulesByConfigName } from '@chronoverse-shared/utilities';
import eslintConfigUnicorn from 'eslint-config-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

/**
 * Unicorn-X rules for ESLint.
 * Provides a collection of high-quality rules to enforce better JavaScript/TypeScript practices.
 * Includes advanced rules for code consistency, preventing common errors, and encouraging modern patterns.
 * Custom configuration with many specific rule overrides for project requirements.
 * @see https://github.com/es-tooling/eslint-plugin-unicorn-x
 */
const unicorn = defineConfig([
	{
		name: '@chronoverse/unicorn/setup',
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
	},
	{
		name: '@chronoverse/unicorn/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			...eslintPluginUnicorn.configs.recommended.rules,
			...getRulesByConfigName('eslint-config-eslint/unicorn', eslintConfigUnicorn),
		},
	},
]);

export { unicorn };
