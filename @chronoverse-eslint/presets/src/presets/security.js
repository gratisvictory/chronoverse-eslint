import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import pluginSecurity from 'eslint-plugin-security';
import { defineConfig } from 'eslint/config';

/**
 * Security rules for ESLint.
 * Identifies potential security vulnerabilities in JavaScript code.
 * Helps prevent common security issues like insecure random values, unsafe regex, and eval-related risks.
 * @see https://github.com/eslint-community/eslint-plugin-security
 */
const security = defineConfig([
	{
		name: '@chronoverse/security/setup',
		plugins: {
			security: pluginSecurity,
		},
	},
	{
		name: '@chronoverse/security/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: pluginSecurity.configs.recommended.rules,
	},
]);

export { security };
