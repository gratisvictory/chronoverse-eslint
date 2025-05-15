import { functionalTs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { stylisticJs, stylisticJsx, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { defineConfig } from 'eslint/config';
import { comments } from '../presets/comments.js';
import { css } from '../presets/css.js';
import { dependency } from '../presets/dependency.js';
import { jsdocTs } from '../presets/jsdoc.js';
import { json } from '../presets/json.js';
import { mutation } from '../presets/mutation.js';
import { next } from '../presets/next.js';
import { node } from '../presets/node.js';
import { perfectionist } from '../presets/perfectionist.js';
import { promise } from '../presets/promise.js';
import { regexp } from '../presets/regexp.js';
import { security } from '../presets/security.js';
import { unicornX } from '../presets/unicorn-x.js';

const reactTsx = defineConfig([
	javascript,
	typescript,
	stylisticJs,
	stylisticPlus,
	perfectionist,
	functionalTs,
	stylisticTs,
	stylisticJsx,
	react,
	eslintReactTsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
	next,
	comments,
	dependency,
	jsdocTs,
	mutation,
	promise,
	regexp,
	security,
	unicornX,
	node,
	json,
	css,
]);

export { reactTsx };
