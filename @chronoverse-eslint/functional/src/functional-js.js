import { onlyJavascript as onlyJavascriptFiles } from '@chronoverse-shared/utilities/files';
import functional from 'eslint-plugin-functional';

/** @type {import('eslint').Linter.Config} */
const functionalJs = [
	{
		name: '@chronoverse-eslint/functional-js/setup',
		plugins: {
			functional,
		},
	},
	{
		name: '@chronoverse-eslint/functional-js/rules',
		files: onlyJavascriptFiles,
		rules: {
			...functional.configs.externalVanillaRecommended.rules,
			...functional.configs.recommended.rules,
			...functional.configs.stylistic.rules,
			...functional.configs.disableTypeChecked.rules,
		},
	},
];

export { functionalJs };
