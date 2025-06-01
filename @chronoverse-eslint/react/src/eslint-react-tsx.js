import { typescript } from '@chronoverse-shared/utilities/files';
import eslintReactPlugin from '@eslint-react/eslint-plugin';
import typescriptEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
const eslintReactTsx = [
	{
		name: '@chronoverse-eslint/eslint-react-tsx/setup',
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				projectService: true,
				sourceType: 'module',
			},
		},
	},
	{
		name: '@chronoverse-eslint/eslint-react-tsx/rules',
		extends: [
			eslintReactPlugin.configs['recommended-typescript'],
			eslintReactPlugin.configs['recommended-type-checked'],
		],
		files: typescript,
	},
];

export { eslintReactTsx };
