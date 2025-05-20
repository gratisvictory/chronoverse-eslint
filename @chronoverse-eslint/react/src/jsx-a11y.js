import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintJsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';
import { a11y } from './rules/a11y.js';

const jsxA11y = defineConfig([
	{
		name: '@chronoverse/jsx-a11y/setup',
		plugins: {
			'jsx-a11y': eslintJsxA11y,
		},
	},
	{
		name: '@chronoverse/jsx-a11y/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			...eslintJsxA11y.flatConfigs.recommended.rules,
			...a11y,
		},
	},
]);

export { jsxA11y };
