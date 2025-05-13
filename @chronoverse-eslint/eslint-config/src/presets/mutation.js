// @ts-expect-error eslint-plugin-better-mutation is not typed
import pluginBetterMutation from 'eslint-plugin-better-mutation';
import { defineConfig } from 'eslint/config';

const mutation = defineConfig([
	{
		name: '@chronoverse/mutation/setup',
		plugins: {
			'better-mutation': pluginBetterMutation,
		},
		rules: {
			'better-mutation/no-mutating-functions': 'error',
			'better-mutation/no-mutating-methods': 'error',
			'better-mutation/no-mutation': 'error',
		},
	},
]);

export { mutation };
