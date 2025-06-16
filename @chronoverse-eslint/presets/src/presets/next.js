import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import nextPlugin from '@next/eslint-plugin-next';

const nextFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * Next.js rules for ESLint.
 * Provides recommended rules and best practices for Next.js applications.
 * Includes core web vitals rules to help ensure good performance.
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint
 */
/** @type {import('eslint').Linter.Config} */
const next = [
	{
		name: '@chronoverse-eslint/next/setup',
		plugins: {
			'@next/next': nextPlugin,
		},
	},
	{
		name: '@chronoverse-eslint/next/rules',
		files: nextFiles,
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
];

export { next };
