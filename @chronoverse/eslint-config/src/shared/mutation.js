/** @ts-expect-error eslint-plugin-better-mutation is not typed */
import pluginBetterMutation from 'eslint-plugin-better-mutation';
import { defineConfig } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
const mutation = defineConfig([
	{
		name: '@chronoverse/mutation/setup',
		extends: ['better-mutation/recommended'],
		plugins: {
			'better-mutation': pluginBetterMutation,
		},
	},
]);

export { mutation };
