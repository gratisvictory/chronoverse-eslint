// @ts-expect-error eslint-plugin-promise is not typed
import pluginPromise from 'eslint-plugin-promise';
import { defineConfig } from 'eslint/config';

const promise = defineConfig([
	{
		name: '@chronoverse/promise/rules',
		plugins: {
			promise: pluginPromise,
		},
		rules: {
			...pluginPromise.configs['flat/recommended'].rules,
			'promise/always-return': 'off',
			'promise/catch-or-return': 'off',
			'promise/no-native': 'off',
			'promise/no-return-wrap': [
				'error',
				{ allowReject: true },
			],
		},
	},
]);

export { promise };
