import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
const prettierSetup = [
	{
		name: '@chronoverse-eslint/prettier/setup',
		plugins: {
			prettier: eslintPluginPrettier,
		},
	},
];

export { prettierSetup };
