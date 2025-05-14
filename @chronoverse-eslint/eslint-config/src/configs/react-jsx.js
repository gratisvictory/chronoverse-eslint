import { functionalJs } from '@chronoverse-eslint/functional';
import { eslintReactJsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { stylisticJsx } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { base } from './base.js';

const reactJsx = defineConfig([
	base,
	stylisticJsx,
	functionalJs,
	react,
	eslintReactJsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
]);

export { reactJsx };
