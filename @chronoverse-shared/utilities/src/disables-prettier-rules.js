import { javascript as javascriptFiles, typescript as typescriptFiles } from './files.js';

const disablesFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const disablesPrettierRules = [
	{
		name: '@chronoverse-eslint/disables/rules',
		files: disablesFiles,
		rules: {
			'@stylistic/indent': 'off',
			'@stylistic/max-len': 'off',
			'@stylistic/member-delimiter-style': 'off',
			'@stylistic/no-extra-parens': 'off',
			'@stylistic/object-curly-newline': 'off',
			'@stylistic/quotes': 'off',
		},
	},
];

export { disablesPrettierRules };
