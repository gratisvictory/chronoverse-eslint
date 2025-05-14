import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintReactCompiler from 'eslint-plugin-react-compiler';
import { defineConfig } from 'eslint/config';

const reactCompiler = defineConfig([
	{
		name: '@chronoverse/react-compiler/setup',
		plugins: {
			'react-compiler': eslintReactCompiler,
		},
	},
	{
		name: '@chronoverse/react-compiler/rules',
		files: [
			...FILE_PATTERNS.javascript,
			...FILE_PATTERNS.typescript,
		],
		rules: {
			...eslintReactCompiler.configs.recommended.rules,
		},
	},
]);

export { reactCompiler };
