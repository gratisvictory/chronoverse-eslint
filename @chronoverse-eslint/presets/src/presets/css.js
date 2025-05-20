import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintCss from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';
import { defineConfig } from 'eslint/config';

/**
 * CSS rules for ESLint.
 * Provides linting capabilities for CSS, SCSS, and other stylesheet files.
 * Configured with Tailwind syntax support for utility-first CSS workflows.
 * Enforces styling best practices and prevents common CSS errors.
 * @see https://github.com/eslint/css
 */
const css = defineConfig([
	{
		name: '@chronoverse/css/setup',
		plugins: {
			css: eslintCss,
		},
	},
	{
		name: '@chronoverse/css/rules',
		files: FILE_PATTERNS.css,
		language: 'css/css',
		languageOptions: {
			customSyntax: tailwindSyntax,
		},
		rules: {
			/**
			 * Disallow empty blocks
			 */
			'css/no-empty-blocks': 'error',

			/**
			 * Disallow duplicate import rules
			 */
			'css/no-duplicate-imports': 'error',

			/**
			 * Disallow !important flags
			 */
			'css/no-important': 'error',

			/**
			 * Disallow invalid at-rules
			 */
			'css/no-invalid-at-rules': 'error',

			/**
			 * Disallow invalid properties
			 */
			'css/no-invalid-properties': 'error',

			/**
			 * Enforce the use of baseline features
			 */
			'css/use-baseline': ['error', { available: 'widely' }],
		},
	},
]);

export { css };
