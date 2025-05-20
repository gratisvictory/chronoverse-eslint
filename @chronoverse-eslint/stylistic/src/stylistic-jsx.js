import { FILE_PATTERNS } from '@chronoverse-shared/utilities';
import eslintStylisticJsx from '@stylistic/eslint-plugin-jsx';
import { defineConfig } from 'eslint/config';
import { jsx } from './rules/jsx.js';

const stylisticJsx = defineConfig([
	{
		name: '@chronoverse/stylisticJsx/setup',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		plugins: {
			'@stylistic/jsx': eslintStylisticJsx,
		},
	},
	{
		name: '@chronoverse/stylisticJsx/rules',
		files: [...FILE_PATTERNS.javascript, ...FILE_PATTERNS.typescript],
		rules: { ...jsx },
	},
]);

export { stylisticJsx };
