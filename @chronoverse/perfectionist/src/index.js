import eslintPerfectionistPlugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import { p11t } from './rules/p11t.js';

/** @type {import('eslint').Linter.Config[]} */
const perfectionist = defineConfig([
	{
		name: '@chronoverse/perfectionist/rules',
		plugins: {
			perfectionist: eslintPerfectionistPlugin,
		},
		rules: {
			...eslintPerfectionistPlugin.configs['recommended-natural'].rules,
			...p11t,
		},
	},
]);

export { perfectionist };
