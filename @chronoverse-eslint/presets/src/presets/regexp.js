import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import * as regexpPlugin from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

/**
 * Regular expression rules for ESLint.
 * Enforces best practices for writing and using regular expressions.
 * Helps prevent common regex pitfalls and performance issues.
 * @see https://github.com/ota-meshi/eslint-plugin-regexp
 */
const regexp = defineConfig([
	{
		name: '@chronoverse/regexp/setup',
		plugins: {
			regexp: regexpPlugin,
		},
	},
	{
		name: '@chronoverse/regexp/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: regexpPlugin.configs['flat/recommended'].rules,
	},
]);

export { regexp };
