import { functionalJs } from '@chronoverse-eslint/functional';
import { reactJSX } from '@chronoverse-eslint/react';
import { stylisticJsx } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { base } from './base.js';

const reactJsx = defineConfig([
	base,
	stylisticJsx,
	functionalJs,
	reactJSX,
]);

export { reactJsx };
