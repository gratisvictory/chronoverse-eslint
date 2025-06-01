import { typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintStylisticTs from '@stylistic/eslint-plugin-ts';
import typescriptEslint from 'typescript-eslint';
import { typescript } from './rules/typescript.js';

/** @type {import('eslint').Linter.Config} */
const stylisticTs = [
	{
		name: '@chronoverse-eslint/stylistic-ts/setup',
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				projectService: true,
				sourceType: 'module',
			},
		},
		plugins: {
			'@stylistic/ts': eslintStylisticTs,
		},
	},
	{
		name: '@chronoverse-eslint/stylistic-ts/rules',
		files: typescriptFiles,
		rules: { ...typescript },
	},
];

export { stylisticTs };
