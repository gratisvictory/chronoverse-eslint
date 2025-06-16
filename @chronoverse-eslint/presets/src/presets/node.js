import {
	getRulesByConfigName,
	javascript as javascriptFiles,
	typescript as typescriptFiles,
} from '@chronoverse-shared/utilities';
import eslintConfigNode from 'eslint-config-eslint';
import nodePlugin from 'eslint-plugin-n';

const nodeFiles = [...javascriptFiles, ...typescriptFiles];

/**
 * Node.js rules for ESLint.
 * Enforces best practices for Node.js development.
 * Includes rules for CommonJS and ES modules specific to Node.js environments.
 * Combines recommended rules from eslint-plugin-n and eslint-config-eslint.
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
/** @type {import('eslint').Linter.Config} */
const node = [
	{
		name: '@chronoverse-eslint/node/setup',
		plugins: {
			n: nodePlugin,
		},
	},
	{
		name: '@chronoverse-eslint/node/rules',
		files: nodeFiles,
		rules: {
			...nodePlugin.configs['flat/recommended'].rules,
			...getRulesByConfigName('eslint-config-eslint/cjs', eslintConfigNode),
			...getRulesByConfigName('eslint-config-eslint/mjs', eslintConfigNode),
		},
	},
];

export { node };
