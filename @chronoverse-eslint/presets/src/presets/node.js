import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import { getRulesByConfigName } from '@chronoverse-shared/utilities';
import eslintConfigNode from 'eslint-config-eslint';
import nodePlugin from 'eslint-plugin-n';
import { defineConfig } from 'eslint/config';

/**
 * Node.js rules for ESLint.
 * Enforces best practices for Node.js development.
 * Includes rules for CommonJS and ES modules specific to Node.js environments.
 * Combines recommended rules from eslint-plugin-n and eslint-config-eslint.
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
const node = defineConfig([
	{
		name: '@chronoverse/node/setup',
		plugins: {
			n: nodePlugin,
		},
	},
	{
		name: '@chronoverse/node/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			...nodePlugin.configs['flat/recommended'].rules,
			...getRulesByConfigName('eslint-config-eslint/cjs', eslintConfigNode),
			...getRulesByConfigName('eslint-config-eslint/mjs', eslintConfigNode),
		},
	},
]);

export { node };
