import { functionalJs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { eslintReactJsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { stylisticJs, stylisticJsx, stylisticPlus } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { comments } from '../presets/comments.js';
import { css } from '../presets/css.js';
import { dependency } from '../presets/dependency.js';
import { jsdocJs } from '../presets/jsdoc.js';
import { json } from '../presets/json.js';
import { mutation } from '../presets/mutation.js';
import { node } from '../presets/node.js';
import { perfectionist } from '../presets/perfectionist.js';
import { promise } from '../presets/promise.js';
import { regexp } from '../presets/regexp.js';
import { security } from '../presets/security.js';
import { unicornX } from '../presets/unicorn-x.js';

const reactJsx = defineConfig([
	javascript,
	stylisticJs,
	stylisticPlus,
	perfectionist,
	functionalJs,
	stylisticJsx,
	react,
	eslintReactJsx,
	reactCompiler,
	reactHooks,
	jsxA11y,
	comments,
	dependency,
	jsdocJs,
	mutation,
	promise,
	regexp,
	security,
	unicornX,
	node,
	json,
	css,
]);

export { reactJsx };
