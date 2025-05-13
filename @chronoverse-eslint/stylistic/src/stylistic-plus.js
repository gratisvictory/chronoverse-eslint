import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintStylisticPlus from '@stylistic/eslint-plugin-plus';
import { defineConfig } from 'eslint/config';
import { plus } from './rules/plus.js';

const stylisticPlus = defineConfig([
	{
		name: '@chronoverse/stylisticPlus/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
		],
		plugins: {
			'@stylistic/plus': eslintStylisticPlus,
		},
		rules: { ...plus },
	},
]);

export { stylisticPlus };
