import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import pluginPromise from 'eslint-plugin-promise';
import { defineConfig } from 'eslint/config';

/**
 * Promise rules for ESLint.
 * Enforces best practices for JavaScript promises.
 * Helps with common promise-related issues like proper error handling and promise chain structure.
 * @see https://github.com/eslint-community/eslint-plugin-promise
 */
const promise = defineConfig([
	{
		name: '@chronoverse/promise/setup',
		plugins: {
			promise: pluginPromise,
		},
	},
	{
		name: '@chronoverse/promise/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
		],
		plugins: {
			promise: pluginPromise,
		},
		rules: {
			...pluginPromise.configs['flat/recommended'].rules,
			'promise/always-return': 'off',
			'promise/catch-or-return': 'off',
			'promise/no-native': 'off',
			'promise/no-return-wrap': [
				'error',
				{ allowReject: true },
			],
		},
	},
]);

export { promise };
