import { defineConfig } from 'eslint/config';
import { css, jsdocTs, prettier, tsx } from './src/index.js';

export default defineConfig([
	tsx,
	jsdocTs,
	css,
	prettier,
]);
