import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintCss from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';
import { defineConfig } from 'eslint/config';

const css = defineConfig([
	{
		name: '@chronoverse/css/setup',
		files: FILE_PATTERNS.css,
		languageOptions: {
			customSyntax: tailwindSyntax,
		},
		plugins: {
			css: eslintCss,
		},
	},
	{
		name: '@chronoverse/css/rules',
		...eslintCss.configs.recommended,
	},
]);

export { css };
