import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import { bestPractice } from './rules/best-practice.js';
import { errors } from './rules/errors.js';
import { es6 } from './rules/es6.js';
import { node } from './rules/node.js';
import { strict } from './rules/strict.js';
import { variables } from './rules/variables.js';
import { stylistic } from './rules/stylistic.js';
import globals from 'globals';
import gitignore from 'eslint-config-flat-gitignore';

const JAVASCRIPT_FILES = ['**/*.?([cm])js?(x)'];
const EXCLUDE_PATTERNS = [
	'**/node_modules/**',
	'**/dist',
	'**/build/**',
	'**/.next',
	'**/.nuxt',
	'**/.vercel',
	'**/.output',
	'**/.cache',
	'**/.temp',
	'**/.tmp',
	'**/temp',
	'**/tmp',
	'**/.turbo',
	'**/.docusaurus/**',
	'**/storybook-static',
	'**/.vite',
	'**/.vite-inspect',
	'**/.vitepress/cache',

	'**/__tests__/**',
	'**/__snapshots__',
	'**/__mocks__/**',
	'**/fixtures/**',
	'**/coverage',
	'**/test-results/**',
	'**/.nyc_output',
	'**/cypress/screenshots/**',
	'**/cypress/videos/**',
	'benchmark/fixtures/**',
	'benchmark/tmp/**',
	'test/.tmp.*/**',

	'**/package-lock.json',
	'**/yarn.lock',
	'**/pnpm-lock.yaml',
	'**/bun.lockb',
	'**/*.config.{js,cjs,mjs}',
	'**/jest.config.js',

	'**/auto-import?(s).d.ts',
	'**/components.d.ts',
	'**/exports-unused.ts',
	'**/*.min.*',
	'**/LICENSE*',
	'**/CHANGELOG*.md',

	'**/.DS_Store',
	'**/Thumbs.db',
	'**/.idea',
	'**/.vscode',
	'**/.log',
	'**/.node_repl_history',

	'.nx/',
	'.storybook/*',
];

/** @type {import('eslint').Linter.Config[]} */
const javascript = defineConfig([
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
	gitignore({
		name: '@chronoverse/gitignore',
	}),
	{
		name: '@chronoverse/javascript/setup',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
				document: 'readonly',
				navigator: 'readonly',
				window: 'readonly',
				console: 'readonly',
			},
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
			reportUnusedInlineConfigs: 'error',
		},
	},
	{
		name: '@chronoverse/javascript/rules',
		files: JAVASCRIPT_FILES,
		plugins: {
			js,
		},
		rules: {
			...bestPractice,
			...errors,
			...es6,
			...strict,
			...variables,
			...stylistic,
			...node,
		},
	},
]);

export { javascript };
