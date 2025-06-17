import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintConfigPrettier from 'eslint-config-prettier';

const prettierConfigFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const prettierConfig = [
	{
		name: '@chronoverse-eslint/prettier-config/rules',
		files: prettierConfigFiles,
		rules: eslintConfigPrettier.rules,
	},
];

export { prettierConfig };
