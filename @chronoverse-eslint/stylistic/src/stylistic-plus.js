import eslintStylisticPlus from '@stylistic/eslint-plugin-plus';
import { defineConfig } from 'eslint/config';
import { plus } from './rules/plus.js';

const stylisticPlus = defineConfig([
	{
		name: '@chronoverse/stylisticPlus/rules',
		plugins: {
			'@stylistic/plus': eslintStylisticPlus,
		},
		rules: { ...plus },
	},
]);

export { stylisticPlus };
