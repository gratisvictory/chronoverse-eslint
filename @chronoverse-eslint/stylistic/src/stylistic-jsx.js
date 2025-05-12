import eslintStylisticJsx from '@stylistic/eslint-plugin-jsx';
import { defineConfig } from 'eslint/config';
import { jsx } from './rules/jsx.js';

const stylisticJsx = defineConfig([
	{
		name: '@chronoverse/stylisticJsx/rules',
		plugins: {
			'@stylistic/jsx': eslintStylisticJsx,
		},
		rules: {
			...jsx,
		},
	},
]);

export { stylisticJsx };
