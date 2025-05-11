import { prettier } from '@chronoverse-eslint/prettier';
import { defineConfig } from 'eslint/config';
import { css, jsdocForTs, nextTSX } from './src/index.js';

export default defineConfig([
	nextTSX,
	jsdocForTs,
	css,
	/**
	 * prettier last position plugin
	 */
	prettier,
]);
