import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
// @ts-expect-error @eslint-community/eslint-plugin-eslint-comments is not typed
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import { defineConfig } from 'eslint/config';

/**
 * ESLint comments rules for ESLint.
 * Enforces best practices for ESLint directive comments like disable/enable.
 * Ensures that disable comments are properly paired with enable comments.
 * Prevents redundant or incorrect usage of ESLint directives in code comments.
 * @see https://github.com/eslint-community/eslint-plugin-eslint-comments
 */
const comments = defineConfig([
	{
		name: '@chronoverse/eslint-comments/setup',
		plugins: {
			'eslint-comments': eslintComments,
		},
	},
	{
		name: '@chronoverse/eslint-comments/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
			...FILE_PATTERNS.types,
		],
		rules: {
			/**
			 * Require a `eslint-enable` comment for every `eslint-disable` comment
			 */
			'eslint-comments/disable-enable-pair': 'error',

			/**
			 * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
			 */
			'eslint-comments/no-aggregating-enable': 'error',

			/**
			 * Disallow duplicate `eslint-disable` comments
			 */
			'eslint-comments/no-duplicate-disable': 'error',

			/**
			 * Disallow `eslint-disable` comments without rule names
			 */
			'eslint-comments/no-unlimited-disable': 'error',

			/**
			 * Disallow unused `eslint-enable` comments
			 */
			'eslint-comments/no-unused-enable': 'error',
		},
	},
]);

export { comments };
