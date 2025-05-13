import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintStylisticJs from '@stylistic/eslint-plugin-js';
import { defineConfig } from 'eslint/config';
import { javascript } from './rules/javascript.js';

const stylisticJs = defineConfig([
	{
		name: '@chronoverse/stylisticJs/rules',
		files: FILE_PATTERNS.javascript,
		plugins: {
			'@stylistic/js': eslintStylisticJs,
		},
		rules: { ...javascript },
	},
]);

export { stylisticJs };
