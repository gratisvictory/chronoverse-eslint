import { functionalTs } from '@chronoverse-eslint/functional';
import { reactTSX } from '@chronoverse-eslint/react';
import { stylisticJsx } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { defineConfig } from 'eslint/config';
import { next } from '../presets/next.js';
import { base } from './base.js';

const nextTsx = defineConfig([
	base,
	typescript,
	stylisticJsx,
	functionalTs,
	reactTSX,
	next,
]);

export { nextTsx };
