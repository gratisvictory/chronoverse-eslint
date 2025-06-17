import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import pluginPromise from 'eslint-plugin-promise';

const promiseFiles = [...javascriptFiles, ...typescriptFiles];

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
		files: promiseFiles,
		rules: pluginPromise.configs['flat/recommended'].rules,
	},
];

export { promise };
