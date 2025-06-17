// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable perfectionist/sort-imports */
/** Functional */
import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
import { functionalTs } from '@chronoverse-eslint/functional/functional-ts';
/** Javascript */
import { javascript } from '@chronoverse-eslint/javascript/javascript-base';
/** Presets */
import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { next } from '@chronoverse-eslint/presets/next';
import { node } from '@chronoverse-eslint/presets/node';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettierPlugin } from '@chronoverse-eslint/presets/prettier-plugin';
import { prettierConfig } from '@chronoverse-eslint/presets/prettier-config';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { security } from '@chronoverse-eslint/presets/security';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
/** React */
import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';
import { reactJsx } from '@chronoverse-eslint/react/react-jsx';
import { reactRefresh } from '@chronoverse-eslint/react/react-refresh';
import { reactRefreshVite } from '@chronoverse-eslint/react/react-refresh-vite';
import { reactTsx } from '@chronoverse-eslint/react/react-tsx';
/** Stylistic */
import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';
/** Typescript */
import { typescript } from '@chronoverse-eslint/typescript/typescript-base';
/** Utilities */
import { eslintIgnores } from '@chronoverse-shared/utilities';

import { defineConfig } from 'eslint/config';

const js = [...javascript];

const react = [
	...reactBase,
	...reactCompiler,
	...reactHooks,
	...reactJsx,
	...reactRefresh,
	...reactRefreshVite,
	...reactTsx,
	...jsxA11y,
];

const ts = [...typescript];

const presets = [
	...comments,
	...css,
	...dependency,
	...jsdoc,
	...json,
	...mutation,
	...next,
	...node,
	...perfectionist,
	...prettierPlugin,
	...promise,
	...regexp,
	...security,
	...unicorn,
	...prettierConfig,
];

const functional = [
	...functionalJs,
	...functionalTs,
];

const style = [...stylistic];

/**
 * ESLint Configuration for Chronoverse
 *
 * This configuration combines multiple specialized rule sets to ensure
 * consistent code quality across the entire project.
 */
const eslintConfig = defineConfig([
	eslintIgnores,
	js,
	style,
	ts,
	functional,
	react,
	presets,
]);

export default eslintConfig;
