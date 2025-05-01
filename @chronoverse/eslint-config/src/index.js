import { javascript } from '@chronoverse-eslint/javascript';
import { perfectionist } from '@chronoverse-eslint/perfectionist';
import { reactJsx, reactTsx } from '@chronoverse-eslint/react';
import { EXCLUDE_PATTERNS } from '@chronoverse-eslint/shared';
import { typescript } from '@chronoverse-eslint/typescript';
import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig, globalIgnores } from 'eslint/config';
import { comments } from './shared/comments.js';
import { css as cssConfig } from './shared/css.js';
import { dependency } from './shared/depend.js';
import { jsdocForJs, jsdocForTs } from './shared/jsdoc.js';
// import { json } from './shared/json.js';
import { node } from './shared/node.js';
import { promise } from './shared/promise.js';
import { regexp } from './shared/regexp.js';
// import { unicorn } from './shared/unicorn.js';

/** @type {import('eslint').Linter.Config[]} */
const js = defineConfig([
	gitignore({ name: '@chronoverse/gitignore' }),
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
	javascript,
	perfectionist,
	// unicorn,
	comments,
	node,
	promise,
	regexp,
	dependency,
	// json,
]);

/** @type {import('eslint').Linter.Config[]} */
const ts = defineConfig([
	...js,
	typescript,
]);

/** @type {import('eslint').Linter.Config[]} */
const jsx = defineConfig([
	...js,
	reactJsx,
]);

/** @type {import('eslint').Linter.Config[]} */
const tsx = defineConfig([
	...ts,
	reactTsx,
]);

/** @type {import('eslint').Linter.Config[]} */
const jsdocJs = defineConfig([
	jsdocForJs,
]);

/** @type {import('eslint').Linter.Config[]} */
const jsdocTs = defineConfig([
	jsdocForTs,
]);

/** @type {import('eslint').Linter.Config[]} */
const css = defineConfig([
	cssConfig,
]);

export { css, js, jsdocJs, jsdocTs, jsx, ts, tsx };
