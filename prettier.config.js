import { json } from '@chronoverse-shared/utilities/files';

/** @type {import('prettier').Config} */
export default {
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
			files: [...json],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
