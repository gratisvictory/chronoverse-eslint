import {
	getRulesByConfigName,
	javascript as javascriptFiles,
	typescript as typescriptFiles,
} from '@chronoverse-shared/utilities';
import eslintConfigUnicorn from 'eslint-config-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const unicornFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * Unicorn rules for ESLint.
 * Provides a collection of high-quality rules to enforce better JavaScript/TypeScript practices.
 * Includes advanced rules for code consistency, preventing common errors, and encouraging modern patterns.
 * Custom configuration with many specific rule overrides for project requirements.
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
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
		files: unicornFiles,
		rules: {
			...eslintPluginUnicorn.configs.recommended.rules,
			...getRulesByConfigName('eslint-config-eslint/unicorn', eslintConfigUnicorn),
			/**
			 * Disallow calling `process.exit()`
			 */
			'unicorn/no-process-exit': 'warn',

			/**
			 * Disallow `for` loops in favor of `for-of`, `Array#forEach`, etc.
			 */
			'unicorn/no-for-loop': 'warn',

			/**
			 * Prefer `addEventListener()` over `on<event>` properties
			 */
			'unicorn/prefer-add-event-listener': 'off',

			/**
			 * Prefer `node.append()` over `appendChild()`
			 */
			'unicorn/prefer-dom-node-append': 'off',

			/**
			 * Prefer `node.remove()` over `removeChild()`
			 */
			'unicorn/prefer-dom-node-remove': 'off',

			/**
			 * Prefer `querySelector()` over `getElementById`/`getElementsByClassName`, etc.
			 */
			'unicorn/prefer-query-selector': 'off',

			/**
			 * Prevent abbreviations (e.g., `opts` → `options`, `val` → `value`)
			 */
			'unicorn/prevent-abbreviations': [
				'error',
				{
					checkDefaultAndNamespaceImports: true,
					checkShorthandImports: true,
					checkShorthandProperties: true,
				},
			],

			/**
			 * Warn on TODO comments with expiration dates
			 */
			'unicorn/expiring-todo-comments': 'warn',

			/**
			 * Prefer modern DOM APIs like `toggleAttribute()` and `replaceChildren()`
			 */
			'unicorn/prefer-modern-dom-apis': 'off',

			/**
			 * Prefer `textContent` over `innerText`
			 */
			'unicorn/prefer-dom-node-text-content': 'off',

			/**
			 * Prefer `dataset` over `getAttribute()`
			 */
			'unicorn/prefer-dom-node-dataset': 'off',

			/**
			 * Enforce consistent function scoping (may be buggy)
			 */
			'unicorn/consistent-function-scoping': 'warn',

			/**
			 * Warn if array methods like `map`/`filter` use the callback function reference directly
			 */
			'unicorn/no-array-callback-reference': 'warn',

			/**
			 * Allow usage of `null` (sometimes preferred)
			 */
			'unicorn/no-null': 'off',

			/**
			 * Allow using `reduce()` (useful for summing or aggregating)
			 */
			'unicorn/no-array-reduce': 'off',

			/**
			 * Enforce explicit length checks (`array.length !== 0` instead of just `array.length`)
			 */
			'unicorn/explicit-length-check': ['error', { 'non-zero': 'not-equal' }],

			/**
			 * Allow `if-else` over ternaries if more readable
			 */
			'unicorn/prefer-ternary': 'off',

			/**
			 * Allow using default parameters (may be unsafe in some cases)
			 */
			'unicorn/prefer-default-parameters': 'off',

			/**
			 * Allow destructuring inconsistency
			 */
			'unicorn/consistent-destructuring': 'off',

			/**
			 * Allow using objects as default function parameters
			 */
			'unicorn/no-object-as-default-parameter': 'off',

			/**
			 * Disable import of `index.js` by default (not suitable for ESModules)
			 */
			'unicorn/import-index': 'off',

			/**
			 * Prefer ES Modules (enable later)
			 */
			'unicorn/prefer-module': 'off',

			/**
			 * Prefer `export ... from` syntax
			 */
			'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],

			/**
			 * Enforce using relative URLs in `fetch()` and similar APIs
			 */
			'unicorn/relative-url-style': ['error', 'always'],

			/**
			 * Prefer `JSON.parse(buffer.toString())` over `JSON.parse(String(buffer))`
			 */
			'unicorn/prefer-json-parse-buffer': 'error',

			/**
			 * Enforce consistent use of braces in switch-case (e.g., avoid unnecessary braces)
			 */
			'unicorn/switch-case-braces': ['error', 'avoid'],

			/**
			 * Allow usage of polyfills (e.g., for legacy support)
			 */
			'unicorn/no-unnecessary-polyfills': 'off',

			/**
			 * Enforce consistent import style for Node.js built-in modules
			 */
			'unicorn/import-style': [
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
		},
	},
];

export { unicorn };
