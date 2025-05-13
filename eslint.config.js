import { defineConfig } from 'eslint/config';
import { js, jsdocForJs, stylisticJs, stylisticPlus, json } from '@chronoverse-eslint/eslint-config';
import { functionalJs } from '@chronoverse-eslint/functional';

export default defineConfig([
	{
		name: '@chronoverse/examples/ignores',
		ignores: [
			'examples/**',
		],
	},
	js,
	jsdocForJs,
	functionalJs,
	stylisticJs,
	stylisticPlus,
	{
		rules: {
			// use prettier
			'@stylistic/js/object-curly-newline': 'off',
		},
	},
	// json,
]);
