import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import pluginBetterMutation from 'eslint-plugin-better-mutation';
import { defineConfig } from 'eslint/config';

/**
 * Mutation control rules for ESLint.
 * Restricts mutations in JavaScript/TypeScript to encourage more functional programming patterns.
 * Prevents mutating functions, methods, and direct object mutations.
 * Helps create more predictable and maintainable code by reducing side effects.
 * @see https://github.com/sloops77/eslint-plugin-better-mutation
 */
const mutation = defineConfig([
	{
		name: '@chronoverse/better-mutation/setup',
		plugins: {
			'better-mutation': pluginBetterMutation,
		},
	},
	{
		name: '@chronoverse/better-mutation/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
		],
		rules: {
			'better-mutation/no-mutating-functions': 'error',
			'better-mutation/no-mutating-methods': 'error',
			'better-mutation/no-mutation': 'error',
		},
	},
]);

export { mutation };
