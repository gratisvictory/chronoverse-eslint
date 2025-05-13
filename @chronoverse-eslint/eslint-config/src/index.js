import { javascript } from '@chronoverse-eslint/javascript';
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';
import { typescript } from '@chronoverse-eslint/typescript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { comments } from './presets/comments.js';
import { dependency } from './presets/dependency.js';
import { mutation } from './presets/mutation.js';
import { next } from './presets/next.js';
import { node } from './presets/node.js';
import { perfectionist } from './presets/perfectionist.js';
import { promise } from './presets/promise.js';
import { regexp } from './presets/regexp.js';
import { security } from './presets/security.js';
import { unicorn } from './presets/unicorn.js';

const js = defineConfig([
	eslintIgnores,
	javascript,
	perfectionist,
	comments,
	node,
	promise,
	regexp,
	dependency,
	mutation,
	unicorn,
	security,
]);

const ts = defineConfig([
	...js,
	typescript,
]);

const jsx = defineConfig([
	...js,
	reactJSX,
]);

const tsx = defineConfig([
	...ts,
	reactTSX,
]);

const nextJSX = defineConfig([
	...js,
	reactJSX,
	next,
]);

const nextTSX = defineConfig([
	...ts,
	reactTSX,
	next,
]);

/** Main */
export {
	js, jsx, nextJSX, nextTSX, ts, tsx,
};
/** Presets */
export { css } from './presets/css.js';
export { functionalJS } from './presets/functional.js';
export { jsdocForJs, jsdocForTs } from './presets/jsdoc.js';
export { json } from './presets/json.js';
export {
	stylisticJs, stylisticJsx, stylisticPlus, stylisticTs,
} from '@chronoverse-eslint/stylistic';
export { comments };
export { dependency };
export { mutation };
export { node };
export { perfectionist };
export { promise };
export { regexp };
export { unicorn };
export { security };
export { next };
export {};
