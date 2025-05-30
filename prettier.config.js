import { json, json5, jsonc } from '@chronoverse-shared/utilities/files';

/** @type {import('prettier').Config} */
const prettierConfig = {
	plugins: [
		'prettier-plugin-packagejson',
		'prettier-plugin-sort-json',
		'prettier-plugin-multiline-arrays',
	],
	experimentalOperatorPosition: 'start',
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	experimentalTernaries: true,
	jsxSingleQuote: true,
	printWidth: 120,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	objectWrap: 'preserve',
	trailingComma: 'all',
	useTabs: true,
	multilineArraysWrapThreshold: 3,
	overrides: [
		{
			files: [...json, ...json5, ...jsonc],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

export default prettierConfig;
