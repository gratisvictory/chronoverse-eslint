import { FILE_PATTERNS, getTsLanguageOptions, interopDefault } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { typescript } from './rules/typescript.js';

const functionalTs = await (async () => {
	const tsOptions = await getTsLanguageOptions();
	const functionalTsPlugin = await interopDefault(import('eslint-plugin-functional'));
	return defineConfig([
		{
			name: '@chronoverse/functionalTs/setup',
			languageOptions: {
				// @ts-ignore
				parser: tsOptions.parser,
				parserOptions: tsOptions.parserOptions,
			},
			plugins: {
				// @ts-ignore
				functional: functionalTsPlugin,
			},
		},
		{
			name: '@chronoverse/functionalTs/rules',
			files: FILE_PATTERNS.typescript,
			rules: { ...typescript },
		},
	]);
})();

export { functionalTs };
