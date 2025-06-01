import { javascript, typescript } from '@chronoverse-shared/utilities/files';
import eslintReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config} */
const reactHooks = [
	{
		name: '@chronoverse-eslint/react-hooks/setup',
		plugins: {
			'react-hooks': eslintReactHooks,
		},
	},
	{
		name: '@chronoverse-eslint/react-hooks/rules',
		files: [...javascript, ...typescript],
		rules: {
			...eslintReactHooks.configs['recommended-latest'].rules,
		},
	},
];

export { reactHooks };
