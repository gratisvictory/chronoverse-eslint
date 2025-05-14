import { functionalJs } from '@chronoverse-eslint/functional';
import { reactJSX } from '@chronoverse-eslint/react';
import { stylisticJsx } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { next } from '../presets/next.js';
import { base } from './base.js';

const nextJsx = defineConfig([
	base,
	stylisticJsx,
	functionalJs,
	reactJSX,
	next,
]);

export { nextJsx };
