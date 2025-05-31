import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintDepend from 'eslint-plugin-depend';

/**
 * Dependency rules for ESLint.
 * Enforces best practices for managing project dependencies.
 * Helps prevent common dependency-related issues like using banned packages or misusing imports.
 * Applies to all JavaScript, TypeScript, and type definition files.
 * @see https://github.com/es-tooling/eslint-plugin-depend
 */
/** @type {import('eslint').Linter.Config} */
const dependency = [
	{
		name: '@chronoverse-eslint/dependency/setup',
		plugins: {
			depend: eslintDepend,
		},
	},
	{
		name: '@chronoverse-eslint/dependency/rules',
		files: [...javascript, ...typescript],
		rules: {
			/**
			 * Bans a list of dependencies from being used
			 */
			'depend/ban-dependencies': 'error',
		},
	},
];

export { dependency };
