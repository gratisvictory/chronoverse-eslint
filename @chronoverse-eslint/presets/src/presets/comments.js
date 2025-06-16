import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';

const commentsFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * ESLint comments rules for ESLint.
 * Enforces best practices for ESLint directive comments like disable/enable.
 * Ensures that disable comments are properly paired with enable comments.
 * Prevents redundant or incorrect usage of ESLint directives in code comments.
 * @see https://github.com/eslint-community/eslint-plugin-eslint-comments
 */
/** @type {import('eslint').Linter.Config} */
const comments = [
	{
		name: '@chronoverse-eslint/eslint-comments/setup',
		plugins: {
			'eslint-comments': eslintComments,
		},
	},
	{
		name: '@chronoverse-eslint/eslint-comments/rules',
		files: commentsFiles,
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
];

export { comments };
