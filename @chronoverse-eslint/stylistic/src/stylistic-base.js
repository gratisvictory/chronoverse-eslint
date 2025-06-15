import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintStylisticPlugin from '@stylistic/eslint-plugin';
import { allRules } from './rules/all-rules.js';

const stylisticFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const stylistic = [
	{
		name: '@chronoverse-eslint/stylistic/setup',
		plugins: {
			'@stylistic': eslintStylisticPlugin,
		},
	},
	{
		name: '@chronoverse-eslint/stylistic/rules',
		files: stylisticFiles,
		rules: { ...allRules },
	},
];

export { stylistic };
