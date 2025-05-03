import { prettier } from '@chronoverse-eslint/prettier';
import { defineConfig } from 'eslint/config';
import { css, jsdocForTs, nextTSX, tailwindcss } from './src/index.js';

export default defineConfig([
	nextTSX,
	jsdocForTs,
	tailwindcss,
	css,
	/**
	 * prettier last position plugin
	 */
	prettier,
]);
