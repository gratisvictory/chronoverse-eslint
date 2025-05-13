import eslintStylisticTs from '@stylistic/eslint-plugin-ts';
import { defineConfig } from 'eslint/config';
import { typescript } from './rules/typescript.js';

const stylisticTs = defineConfig([
	{
		name: '@chronoverse/stylisticTs/rules',
		plugins: {
			'@stylistic/ts': eslintStylisticTs,
		},
		rules: { ...typescript },
	},
]);

export { stylisticTs };
