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
			'n/no-unsupported-features/node-builtins': 'off',
			'@stylistic/js/object-curly-newline': 'off',
		},
	},
]);
