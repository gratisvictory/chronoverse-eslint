import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import { getRulesByConfigName } from '@chronoverse-shared/utilities';
import eslintConfigUnicorn from 'eslint-config-eslint';
import eslintPluginUnicornX from 'eslint-plugin-unicorn-x';
import { defineConfig } from 'eslint/config';

/**
 * Unicorn-X rules for ESLint.
 * Provides a collection of high-quality rules to enforce better JavaScript/TypeScript practices.
 * Includes advanced rules for code consistency, preventing common errors, and encouraging modern patterns.
 * Custom configuration with many specific rule overrides for project requirements.
 * @see https://github.com/es-tooling/eslint-plugin-unicorn-x
 */
const unicornX = defineConfig([
	{
		name: '@chronoverse/unicorn-x/setup',
		plugins: {
			'unicorn-x': eslintPluginUnicornX,
		},
	},
	{
		name: '@chronoverse/unicorn-x/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
			...FILE_PATTERNS.types,
		],
		rules: {
			...eslintPluginUnicornX.configs.recommended.rules,
			...Object.fromEntries(
				Object.entries(getRulesByConfigName('eslint-config-eslint/unicorn', eslintConfigUnicorn) ?? {}).map(
					([
						key,
						value,
					]) => [
						`unicorn-x/${key.replace('unicorn/', '')}`,
						value,
					],
				),
			),
			'unicorn-x/consistent-destructuring': 'off',
			'unicorn-x/consistent-empty-array-spread': 'error',
			'unicorn-x/consistent-function-scoping': 'warn',
			'unicorn-x/error-message': 'error',
			'unicorn-x/escape-case': 'error',
			'unicorn-x/expiring-todo-comments': 'warn',
			'unicorn-x/explicit-length-check': [
				'error',
				{ 'non-zero': 'not-equal' },
			],
			'unicorn-x/import-index': 'off',
			'unicorn-x/import-style': [
				'error',
				{
					styles: {
						'node:path': {
							named: true,
							namespace: true,
						},
						path: {
							named: true,
							namespace: true,
						},
					},
				},
			],
			'unicorn-x/new-for-builtins': 'error',
			'unicorn-x/no-array-callback-reference': 'warn',
			'unicorn-x/no-array-reduce': 'off',
			'unicorn-x/no-for-loop': 'warn',
			'unicorn-x/no-new-array': 'error',
			'unicorn-x/no-new-buffer': 'error',
			'unicorn-x/no-null': 'off',
			'unicorn-x/no-object-as-default-parameter': 'off',
			'unicorn-x/no-process-exit': 'warn',
			'unicorn-x/no-unnecessary-polyfills': 'off',
			'unicorn-x/number-literal-case': 'error',
			'unicorn-x/prefer-add-event-listener': 'off',
			'unicorn-x/prefer-default-parameters': 'off',
			'unicorn-x/prefer-dom-node-append': 'off',
			'unicorn-x/prefer-dom-node-dataset': 'off',
			'unicorn-x/prefer-dom-node-remove': 'off',
			'unicorn-x/prefer-dom-node-text-content': 'error',
			'unicorn-x/prefer-export-from': [
				'error',
				{ ignoreUsedVariables: true },
			],
			'unicorn-x/prefer-includes': 'error',
			'unicorn-x/prefer-json-parse-buffer': 'error',
			'unicorn-x/prefer-modern-dom-apis': 'off',
			'unicorn-x/prefer-module': 'off',
			'unicorn-x/prefer-node-protocol': 'error',
			'unicorn-x/prefer-number-properties': 'error',
			'unicorn-x/prefer-query-selector': 'off',
			'unicorn-x/prefer-string-raw': 'off',
			'unicorn-x/prefer-string-starts-ends-with': 'error',
			'unicorn-x/prefer-ternary': 'off',
			'unicorn-x/prefer-type-error': 'error',
			'unicorn-x/prevent-abbreviations': [
				'error',
				{
					checkDefaultAndNamespaceImports: true,
					checkShorthandImports: true,
					checkShorthandProperties: true,
				},
			],
			'unicorn-x/relative-url-style': [
				'error',
				'always',
			],
			'unicorn-x/switch-case-braces': [
				'error',
				'avoid',
			],
			'unicorn-x/throw-new-error': 'error',
		},
	},
]);

export { unicornX };
