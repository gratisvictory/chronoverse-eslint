import { onlyTypescript as onlyTypescriptFiles } from '@chronoverse-shared/utilities/files';
import functional from 'eslint-plugin-functional';
import typescriptEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
const functionalTs = [
	{
		name: '@chronoverse-eslint/functional-ts/setup',
		languageOptions: {
			parser: typescriptEslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				projectService: true,
				sourceType: 'module',
			},
		},
		plugins: {
			functional,
		},
	},
	{
		name: '@chronoverse-eslint/functional-ts/rules',
		files: onlyTypescriptFiles,
		rules: {
			...functional.configs.externalTypeScriptRecommended.rules,
			...functional.configs.recommended.rules,
			...functional.configs.stylistic.rules,
		},
	},
];

export { functionalTs };
