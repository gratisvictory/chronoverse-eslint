// @ts-expect-error @next/eslint-plugin-next is not typed
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

const next = defineConfig([
	{
		name: '@chronoverse/next/rules',
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
]);

export { next };
