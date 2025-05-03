import { CSS_FILES } from '@chronoverse-eslint/shared';
import eslintCss from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';
import { defineConfig } from 'eslint/config';

const css = defineConfig([
	{
		name: '@chronoverse/css/setup',
		files: CSS_FILES,
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
