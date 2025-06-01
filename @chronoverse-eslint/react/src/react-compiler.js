import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintReactCompiler from 'eslint-plugin-react-compiler';

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
		files: [...javascript, ...typescript],
		rules: {
			...eslintReactCompiler.configs.recommended.rules,
		},
	},
];

export { reactCompiler };
