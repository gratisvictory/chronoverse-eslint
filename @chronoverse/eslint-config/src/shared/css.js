import { CSS_FILES } from '@chronoverse-eslint/shared';
import eslintCss from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';
import { defineConfig } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
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
		files: CSS_FILES,
		...eslintCss.configs.recommended,
	},
]);

export { css };
