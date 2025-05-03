import { javascript } from '@chronoverse-eslint/javascript';
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';
import { EXCLUDE_PATTERNS } from '@chronoverse-eslint/shared';
import { typescript } from '@chronoverse-eslint/typescript';
import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig, globalIgnores } from 'eslint/config';
import { comments } from './shared/comments.js';
import { dependency } from './shared/dependency.js';
import { mutation } from './shared/mutation.js';
import { next } from './shared/next.js';
import { node } from './shared/node.js';
import { perfectionist } from './shared/perfectionist.js';
import { promise } from './shared/promise.js';
import { regexp } from './shared/regexp.js';
import { security } from './shared/security.js';
import { unicorn } from './shared/unicorn.js';

const ignores = defineConfig([
	gitignore({ name: '@chronoverse/gitignore' }),
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
]);

const js = defineConfig([
	ignores,
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
export { js, jsx, nextJSX, nextTSX, ts, tsx };
/** Presets */
export { css } from './shared/css.js';
export { functionalJS } from './shared/functional.js';
export { jsdocForJs, jsdocForTs } from './shared/jsdoc.js';
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
export { ignores };
