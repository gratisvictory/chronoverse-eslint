import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import * as regexpPlugin from 'eslint-plugin-regexp';

const regexpFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * Regular expression rules for ESLint.
 * Enforces best practices for writing and using regular expressions.
 * Helps prevent common regex pitfalls and performance issues.
 * @see https://github.com/ota-meshi/eslint-plugin-regexp
 */
/** @type {import('eslint').Linter.Config} */
const regexp = [
	{
		name: '@chronoverse-eslint/regexp/setup',
		plugins: {
			regexp: regexpPlugin,
		},
	},
	{
		name: '@chronoverse-eslint/regexp/rules',
		files: regexpFiles,
		rules: {
			...regexpPlugin.configs['flat/recommended'].rules,
		},
	},
];

export { regexp };
