import { defineConfig } from 'eslint/config';
import { css, jsdocTs, tsx } from './src/index.js';

export default defineConfig([
	tsx,
	jsdocTs,
	css,
]);
