import { functionalTs } from '@chronoverse-eslint/functional';
import { eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
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
	react,
	eslintReactTsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
]);

export { reactTsx };
