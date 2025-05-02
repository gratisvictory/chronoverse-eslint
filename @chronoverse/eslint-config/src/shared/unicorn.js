import { getRulesByConfigName } from '@chronoverse-eslint/shared';
/** @ts-expect-error eslint-config-eslint is not typed */
import eslintConfigUnicorn from 'eslint-config-eslint';
import eslintPluginUnicornX from 'eslint-plugin-unicorn-x';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
const unicorn = defineConfig([
	{
		name: '@chronoverse/unicorn-x/setup',
		languageOptions: {
			globals: globals.builtin,
		},
	},
	{
		name: '@chronoverse/unicorn-x/rules',
		plugins: {
			'unicorn-x': eslintPluginUnicornX,
		},
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
			'unicorn-x/no-instanceof-array': 'error',
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

export { unicorn };
