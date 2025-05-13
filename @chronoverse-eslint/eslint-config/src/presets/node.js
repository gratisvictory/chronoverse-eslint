import { getRulesByConfigName } from '@chronoverse-shared/utilities';
// @ts-expect-error eslint-config-eslint is not typed
import eslintConfigNode from 'eslint-config-eslint';
import nodePlugin from 'eslint-plugin-n';
import { defineConfig } from 'eslint/config';

const node = defineConfig([
	{
		name: '@chronoverse/node/rules',
		plugins: {
			n: nodePlugin,
		},
		rules: {
			...getRulesByConfigName('eslint-config-eslint/cjs', eslintConfigNode),
			...getRulesByConfigName('eslint-config-eslint/esm', eslintConfigNode),
		},
	},
]);

export { node };
