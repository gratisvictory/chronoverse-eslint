import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import pluginBetterMutation from 'eslint-plugin-better-mutation';

/**
 * Mutation control rules for ESLint.
 * Restricts mutations in JavaScript/TypeScript to encourage more functional programming patterns.
 * Prevents mutating functions, methods, and direct object mutations.
 * Helps create more predictable and maintainable code by reducing side effects.
 * @see https://github.com/sloops77/eslint-plugin-better-mutation
 */
/** @type {import('eslint').Linter.Config} */
const mutation = [
	{
		name: '@chronoverse-eslint/better-mutation/setup',
		plugins: {
			'better-mutation': pluginBetterMutation,
		},
	},
	{
		name: '@chronoverse-eslint/better-mutation/rules',
		files: [...javascript, ...typescript],
		rules: {
			/**
			 * better-mutation/no-mutating-functions
			 */
			'better-mutation/no-mutating-functions': 'error',

			/**
			 * better-mutation/no-mutating-methods
			 */
			'better-mutation/no-mutating-methods': 'error',

			/**
			 * Disallow mutating operators.
			 */
			'better-mutation/no-mutation': 'error',
		},
	},
];

export { mutation };
