import eslintStylisticJs from '@stylistic/eslint-plugin-js';
import { defineConfig } from 'eslint/config';
import { base } from './rules/base.js';

const stylisticJs = defineConfig([
	{
		name: '@chronoverse/stylisticJs/rules',
		plugins: {
			'@stylistic/js': eslintStylisticJs,
		},
		rules: {
			...base,
		},
	},
]);

export { stylisticJs };
