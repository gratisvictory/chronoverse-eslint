import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintReactCompiler from 'eslint-plugin-react-compiler';

const reactCompilerFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const reactCompiler = [
	{
		name: '@chronoverse-eslint/react-compiler/setup',
		plugins: {
			'react-compiler': eslintReactCompiler,
		},
	},
	{
		name: '@chronoverse-eslint/react-compiler/rules',
		files: reactCompilerFiles,
		rules: eslintReactCompiler.configs.recommended.rules,
	},
];

export { reactCompiler };
