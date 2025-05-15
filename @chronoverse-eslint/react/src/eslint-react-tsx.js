import { FILE_PATTERNS, getTsLanguageOptions } from '@chronoverse-shared/utilities';
import eslintReactPlugin from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';

const eslintReactTsx = await (async () => {
	const tsOptions = await getTsLanguageOptions();

	return defineConfig([
		{
			name: '@chronoverse/@eslint-react-tsx/setup',
			languageOptions: {
				parser: tsOptions.parser,
				parserOptions: tsOptions.parserOptions,
			},
		},
		{
			name: '@chronoverse/@eslint-react-tsx/rules',
			extends: [
				eslintReactPlugin.configs['recommended-typescript'],
			],
			files: FILE_PATTERNS.typescript,
		},
	]);
})();

export { eslintReactTsx };
