import { defineConfig } from 'eslint/config';
import { FILE_PATTERNS } from './files.js';

/**
 * ESLint disables configuration.
 */
const disables = defineConfig([
	{
		name: '@chronoverse/disables/js',
		files: FILE_PATTERNS.javascript,
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},
	{
		name: '@chronoverse/disables/nextjs',
		files: ['{src/app,app}/**/{page,layout,not-found,error,loading}.{jsx,tsx}'],
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},
	{
		name: '@chronoverse/disables/unicornX',
		files: FILE_PATTERNS.types,
		rules: {
			'unicorn-x/prevent-abbreviations': 'off',
		},
	},
]);

const CHRONOVERSE_DISABLES = {
	disables,
};

export { CHRONOVERSE_DISABLES };
