import { functionalTs } from '@chronoverse-eslint/functional';
import { stylisticTs } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { defineConfig } from 'eslint/config';
import { jsdocTs } from '../presets/jsdoc.js';
import { base } from './base.js';

const vanillaTs = defineConfig([
	base,
	typescript,
	functionalTs,
	stylisticTs,
	jsdocTs,
]);

export { vanillaTs };
