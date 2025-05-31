import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintStylisticPlus from '@stylistic/eslint-plugin-plus';
import { plus } from './rules/plus.js';

/** @type {import('eslint').Linter.Config} */
const stylisticPlus = [
	{
		name: '@chronoverse-eslint/stylistic-plus/setup',
		plugins: {
			'@stylistic/plus': eslintStylisticPlus,
		},
	},
	{
		name: '@chronoverse-eslint/stylistic-plus/rules',
		files: [...javascript, ...typescript],
		rules: { ...plus },
	},
];

export { stylisticPlus };
