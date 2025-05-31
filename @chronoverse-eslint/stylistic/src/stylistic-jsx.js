import { react } from '@chronoverse-shared/utilities/files';
import eslintStylisticJsx from '@stylistic/eslint-plugin-jsx';
import { jsx } from './rules/jsx.js';

/** @type {import('eslint').Linter.Config} */
const stylisticJsx = [
	{
		name: '@chronoverse-eslint/stylistic-jsx/setup',
		plugins: {
			'@stylistic/jsx': eslintStylisticJsx,
		},
	},
	{
		name: '@chronoverse-eslint/stylistic-jsx/rules',
		files: react,
		rules: { ...jsx },
	},
];

export { stylisticJsx };
