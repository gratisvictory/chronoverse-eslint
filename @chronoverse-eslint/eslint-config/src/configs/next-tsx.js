import { functionalTs } from '@chronoverse-eslint/functional';
import { eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
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
	react,
	eslintReactTsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
	next,
]);

export { nextTsx };
