import { onlyTypescript } from '@chronoverse-shared/utilities/files';
import typescriptEslint from 'typescript-eslint';
import functional from 'eslint-plugin-functional';

/** @type {import('eslint').Linter.Config} */
const functionalTs = [
	{
		name: '@chronoverse-eslint/functional-ts/setup',
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				projectService: true,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			functional,
		},
	},
	{
		name: '@chronoverse-eslint/functional-ts/rules',
		files: onlyTypescript,
		rules: {
			...functional.configs.externalTypeScriptRecommended.rules,
			...functional.configs.recommended.rules,
			...functional.configs.stylistic.rules,
		},
	},
];

export { functionalTs };
