import { javascript as javascriptFiles, typescript as typescriptFiles } from '@chronoverse-shared/utilities/files';
import { prettierSetup } from './prettier-setup.js';

const prettierPluginFiles = [...javascriptFiles, ...typescriptFiles];

/** @type {import('eslint').Linter.Config} */
const prettierPlugin = [
	...prettierSetup,
	{
		name: '@chronoverse-eslint/prettier-plugin/rules',
		files: prettierPluginFiles,
		rules: {
			'prettier/prettier': 'error',
		},
	},
];

export { prettierPlugin };
