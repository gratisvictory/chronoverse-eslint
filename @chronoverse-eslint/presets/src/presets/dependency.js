import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintDepend from 'eslint-plugin-depend';
import { defineConfig } from 'eslint/config';

/**
 * Dependency rules for ESLint.
 * Enforces best practices for managing project dependencies.
 * Helps prevent common dependency-related issues like using banned packages or misusing imports.
 * Applies to all JavaScript, TypeScript, and type definition files.
 * @see https://github.com/es-tooling/eslint-plugin-depend
 */
const dependency = defineConfig([
	{
		name: '@chronoverse/dependency/setup',
		plugins: {
			depend: eslintDepend,
		},
	},
	{
		name: '@chronoverse/dependency/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			/**
			 * Bans a list of dependencies from being used
			 */
			'depend/ban-dependencies': 'error',
		},
	},
]);

export { dependency };
