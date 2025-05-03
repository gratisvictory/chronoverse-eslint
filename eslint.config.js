import { defineConfig } from 'eslint/config';
import { js, functionalJS, jsdocForJs } from '@chronoverse-eslint/eslint-config';

export default defineConfig([
	js,
	functionalJS,
	jsdocForJs,
]);
