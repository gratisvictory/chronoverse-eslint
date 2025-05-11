import depend from 'eslint-plugin-depend';
import { defineConfig } from 'eslint/config';

const dependency = defineConfig([
	{
		name: '@chronoverse/dependency/setup',
		extends: ['depend/flat/recommended'],
		plugins: {
			depend,
		},
	},
]);

export { dependency };
