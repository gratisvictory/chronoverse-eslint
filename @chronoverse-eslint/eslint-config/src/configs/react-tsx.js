import { functionalTs } from '@chronoverse-eslint/functional';
import { reactTSX } from '@chronoverse-eslint/react';
import { stylisticJsx, stylisticTs } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { defineConfig } from 'eslint/config';
import { base } from './base.js';

const reactTsx = defineConfig([
	base,
	typescript,
	stylisticTs,
	stylisticJsx,
	functionalTs,
	reactTSX,
]);

export { reactTsx };
