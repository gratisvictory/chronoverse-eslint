import { functionalJs } from '@chronoverse-eslint/functional';
import { eslintReactJsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { stylisticJsx } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { next } from '../presets/next.js';
import { base } from './base.js';

const nextJsx = defineConfig([
	base,
	stylisticJsx,
	functionalJs,
	react,
	eslintReactJsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
	next,
]);

export { nextJsx };
