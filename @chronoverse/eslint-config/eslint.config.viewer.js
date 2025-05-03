import { prettier } from '@chronoverse-eslint/prettier';
import { defineConfig } from 'eslint/config';
import { jsdocForTs, nextTSX, tailwindcss } from './src/index.js';

export default defineConfig([
	nextTSX,
	jsdocForTs,
	tailwindcss,
	/**
	 * prettier last position plugin
	 */
	prettier,
]);
