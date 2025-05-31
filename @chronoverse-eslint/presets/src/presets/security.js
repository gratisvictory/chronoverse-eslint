import { javascript, typescript } from '@chronoverse-shared/utilities';
import pluginSecurity from 'eslint-plugin-security';

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
		files: [...javascript, ...typescript],
		rules: pluginSecurity.configs.recommended.rules,
	},
];

export { security };
