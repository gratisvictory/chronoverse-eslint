import { css as cssFiles } from '@chronoverse-shared/utilities/files';
import eslintCss from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';

/**
 * CSS rules for ESLint.
 * Provides linting capabilities for CSS, SCSS, and other stylesheet files.
 * Configured with Tailwind syntax support for utility-first CSS workflows.
 * Enforces styling best practices and prevents common CSS errors.
 * @see https://github.com/eslint/css
 */
/** @type {import('eslint').Linter.Config} */
const css = [
	{
		name: '@chronoverse-eslint/css/setup',
		plugins: {
			css: eslintCss,
		},
	},
	{
		name: '@chronoverse-eslint/css/rules',
		files: cssFiles,
		language: 'css/css',
		languageOptions: {
			customSyntax: tailwindSyntax,
			tolerant: true,
		},
		rules: {
			...eslintCss.configs.recommended.rules,
		},
	},
];

export { css };
