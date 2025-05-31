import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
// eslint-disable-next-line depend/ban-dependencies
import reactPlugin from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import { react as reactRules } from './rules/react.js';

const react = defineConfig([
	{
		name: '@chronoverse/react/setup',
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: reactPlugin,
		},
	},
	{
		name: '@chronoverse/react/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			...reactPlugin.configs.flat.recommended.rules,
			...reactRules,
		},
	},
]);

export { react };
