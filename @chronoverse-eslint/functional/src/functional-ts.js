import { FILE_PATTERNS, getTsLanguageOptions, interopDefault } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { typescript } from './rules/typescript.js';

const functionalTs = await (async () => {
	const tsOptions = await getTsLanguageOptions();
	const functionalTsPlugin = await interopDefault(import('eslint-plugin-functional'));
	return defineConfig([
		{
			name: '@chronoverse/functionalTs/rules',
			files: FILE_PATTERNS.typescript,
			languageOptions: {
				// @ts-expect-error Parser type from ESLint
				parser: tsOptions.parser,
				parserOptions: tsOptions.parserOptions,
			},
			plugins: {
				// @ts-expect-error Plugin type from Eslint
				functional: functionalTsPlugin,
			},
			rules: { ...typescript },
		},
	]);
})();

export { functionalTs };
