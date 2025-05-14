import { functionalJs } from '@chronoverse-eslint/functional';
import { defineConfig } from 'eslint/config';
import { jsdocJs } from '../presets/jsdoc.js';
import { base } from './base.js';

const vanillaJs = defineConfig([
	base,
	functionalJs,
	jsdocJs,
]);

export { vanillaJs };
