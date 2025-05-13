import { defineConfig } from 'eslint/config';
import { js, functionalJS, jsdocForJs, stylisticJs, stylisticPlus, json } from '@chronoverse-eslint/eslint-config';

export default defineConfig([
	{
		name: '@chronoverse/examples/ignores',
		ignores: [
			'examples/**',
		],
	},
	js,
	jsdocForJs,
	functionalJS,
	stylisticJs,
	stylisticPlus,
	// json,
]);
