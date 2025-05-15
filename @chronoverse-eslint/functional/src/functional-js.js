import { FILE_PATTERNS, interopDefault } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { javascript } from './rules/javascript.js';

const functionalJs = await (async () => {
	const functionalJsPlugin = await interopDefault(import('eslint-plugin-functional'));

	return defineConfig([
		{
			name: '@chronoverse/functionalJs/setup',
			plugins: {
				functional: functionalJsPlugin,
			},
		},
		{
			name: '@chronoverse/functionalJs/rules',
			files: FILE_PATTERNS.javascript,
			rules: { ...javascript },
		},
	]);
})();

export { functionalJs };
