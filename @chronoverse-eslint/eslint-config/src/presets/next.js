import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

/**
 * Next.js rules for ESLint.
 * Provides recommended rules and best practices for Next.js applications.
 * Includes core web vitals rules to help ensure good performance.
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint
 */
const next = defineConfig([
	{
		name: '@chronoverse/next/setup',
		plugins: {
			'@next/next': nextPlugin,
		},
	},
	{
		name: '@chronoverse/next/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
		],
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
]);

export { next };
