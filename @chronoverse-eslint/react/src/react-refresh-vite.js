import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import reactRefresh from 'eslint-plugin-react-refresh';

const reactRefreshViteFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const reactRefreshVite = [
	{
		name: '@chronoverse-eslint/react-refresh-vite/setup',
		plugins: {
			'react-refresh': reactRefresh,
		},
	},
	{
		name: '@chronoverse-eslint/react-refresh-vite/rules',
		files: reactRefreshViteFiles,
		rules: reactRefresh.configs.vite.rules,
	},
];

export { reactRefreshVite };
