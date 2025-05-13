import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintStylisticJsx from '@stylistic/eslint-plugin-jsx';
import { defineConfig } from 'eslint/config';
import { jsx } from './rules/jsx.js';

const stylisticJsx = defineConfig([
	{
		name: '@chronoverse/stylisticJsx/rules',
		files: FILE_PATTERNS.react,
		plugins: {
			'@stylistic/jsx': eslintStylisticJsx,
		},
		rules: { ...jsx },
	},
]);

export { stylisticJsx };
