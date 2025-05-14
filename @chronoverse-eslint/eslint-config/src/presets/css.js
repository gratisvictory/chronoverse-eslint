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
		languageOptions: {
			customSyntax: tailwindSyntax,
		},
		plugins: {
			css: eslintCss,
		},
	},
	{
		name: '@chronoverse/css/rules',
		files: FILE_PATTERNS.css,
		rules: {
			...eslintCss.configs.recommended.rules,
		},
	},
]);

export { css };
