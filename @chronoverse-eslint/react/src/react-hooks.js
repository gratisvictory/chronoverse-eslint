import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintReactHooks from 'eslint-plugin-react-hooks';

const reactHooksFiles = [...javascriptFiles, ...typescriptFiles];

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
		files: reactHooksFiles,
		rules: eslintReactHooks.configs['recommended-latest'].rules,
	},
];

export { reactHooks };
