import { FILE_PATTERNS, getTsLanguageOptions } from '@chronoverse-shared/utilities';
import eslintStylisticTs from '@stylistic/eslint-plugin-ts';
import { defineConfig } from 'eslint/config';
import { typescript } from './rules/typescript.js';

const stylisticTs = await (async () => {
	const tsOptions = await getTsLanguageOptions();
	return defineConfig([
		{
			name: '@chronoverse/stylisticTs/setup',
			languageOptions: {
				parser: tsOptions.parser,
				parserOptions: tsOptions.parserOptions,
			},
			plugins: {
				'@stylistic/ts': eslintStylisticTs,
			},
		},
		{
			name: '@chronoverse/stylisticTs/rules',
			files: [...FILE_PATTERNS.typescript, ...FILE_PATTERNS.types],
			rules: { ...typescript },
		},
	]);
})();

export { stylisticTs };
