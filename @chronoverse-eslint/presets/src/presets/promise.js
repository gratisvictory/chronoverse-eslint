import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import pluginPromise from 'eslint-plugin-promise';

/**
 * Promise rules for ESLint.
 * Enforces best practices for JavaScript promises.
 * Helps with common promise-related issues like proper error handling and promise chain structure.
 * @see https://github.com/eslint-community/eslint-plugin-promise
 */
/** @type {import('eslint').Linter.Config} */
const promise = [
	{
		name: '@chronoverse-eslint/promise/setup',
		plugins: {
			promise: pluginPromise,
		},
	},
	{
		name: '@chronoverse-eslint/promise/rules',
		files: [...javascript, ...typescript],
		rules: pluginPromise.configs['flat/recommended'].rules,
	},
];

export { promise };
