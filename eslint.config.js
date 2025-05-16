import { vanillaJs } from '@chronoverse-eslint/eslint-config';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		name: '@chronoverse/examples/ignores',
		ignores: [
			'examples/**',
		],
	},
	eslintIgnores,
	vanillaJs,
	{
		rules: {
			'n/no-process-exit': 'warn',
			// use prettier for object-curly-newline
			'@stylistic/js/object-curly-newline': 'off',
		},
	},
]);
