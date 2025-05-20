import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

const reactHooks = defineConfig([
	{
		name: '@chronoverse/react-hooks/setup',
		plugins: {
			'react-hooks': eslintReactHooks,
		},
	},
	{
		name: '@chronoverse/react-hooks/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: {
			...eslintReactHooks.configs['recommended-latest'].rules,
		},
	},
]);

export { reactHooks };
