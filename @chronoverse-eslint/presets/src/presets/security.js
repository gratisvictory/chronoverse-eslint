import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import pluginSecurity from 'eslint-plugin-security';

const securityFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * Security rules for ESLint.
 * Identifies potential security vulnerabilities in JavaScript code.
 * Helps prevent common security issues like insecure random values, unsafe regex, and eval-related risks.
 * @see https://github.com/eslint-community/eslint-plugin-security
 */
/** @type {import('eslint').Linter.Config} */
const security = [
	{
		name: '@chronoverse-eslint/security/setup',
		plugins: {
			security: pluginSecurity,
		},
	},
	{
		name: '@chronoverse-eslint/security/rules',
		files: securityFiles,
		rules: {
			...pluginSecurity.configs.recommended.rules,
		},
	},
];

export { security };
