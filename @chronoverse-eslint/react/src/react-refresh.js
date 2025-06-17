import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import eslintReactRefresh from 'eslint-plugin-react-refresh';

const reactRefreshFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const reactRefresh = [
	{
		name: '@chronoverse-eslint/react-refresh/setup',
		plugins: {
			'react-refresh': eslintReactRefresh,
		},
	},
	{
		name: '@chronoverse-eslint/react-refresh/rules',
		files: reactRefreshFiles,
		rules: eslintReactRefresh.configs.recommended.rules,
	},
];

export { reactRefresh };
