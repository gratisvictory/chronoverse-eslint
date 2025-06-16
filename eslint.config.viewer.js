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
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';
import { eslintReactJsx } from '@chronoverse-eslint/react/eslint-react-jsx';
import { eslintReactTsx } from '@chronoverse-eslint/react/eslint-react-tsx';
import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
/** Stylistic */
import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';
/** Typescript */
import { typescript } from '@chronoverse-eslint/typescript/typescript-base';
/** Utilities */
import { eslintIgnores } from '@chronoverse-shared/utilities';

import { defineConfig } from 'eslint/config';

/**
 * ESLint Configuration for Chronoverse
 *
 * This configuration combines multiple specialized rule sets to ensure
 * consistent code quality across the entire project.
 */
const eslintConfig = defineConfig([
	/**
	 * File Ignores
	 *
	 * Patterns for files that should be excluded from linting.
	 * Imported from shared utilities to maintain consistency.
	 */
	eslintIgnores,

	/**
	 * JavaScript Rules
	 *
	 * Core JavaScript linting rules to enforce best practices,
	 * proper JSDoc documentation, functional programming paradigms,
	 * and consistent code style.
	 */
	javascript,
	jsdoc,
	functionalJs,
	stylistic,

	/**
	 * TypeScript Rules
	 *
	 * Type-aware linting rules for TypeScript that enforce
	 * strong typing, proper documentation, functional patterns,
	 * and consistent style.
	 */
	typescript,
	functionalTs,
	/**
	 * React Rules
	 *
	 * Rules specific to React development including JSX/TSX syntax,
	 * hooks usage, accessibility, and Next.js best practices.
	 */
	reactBase,
	eslintReactJsx,
	eslintReactTsx,
	reactHooks,
	reactCompiler,
	jsxA11y,
	next,

	/**
	 * Shared Rules
	 *
	 * General purpose rules that apply across different file types
	 * and frameworks to ensure code quality, security, and performance.
	 */
	comments,
	dependency,
	mutation,
	node,
	perfectionist,
	prettierPlugin,
	promise,
	regexp,
	security,
	unicorn,
	css,
	json,
	/**
	 * Disables and Prettier Rules on last position
	 */
	prettierConfig,
]);

export default eslintConfig;
