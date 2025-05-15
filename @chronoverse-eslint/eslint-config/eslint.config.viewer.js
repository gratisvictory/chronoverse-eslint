import {
	comments,
	css,
	dependency,
	jsdocJs,
	jsdocTs,
	json,
	mutation,
	next,
	node,
	perfectionist,
	promise,
	regexp,
	security,
	unicornX,
} from '@chronoverse-eslint/eslint-config';
import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { prettier } from '@chronoverse-eslint/prettier';
import { eslintReactJsx, eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { stylisticJs, stylisticJsx, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { disables, eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

/**
 * ESLint Configuration for Chronoverse
 *
 * This configuration combines multiple specialized rule sets to ensure
 * consistent code quality across the entire project.
 */
export default defineConfig([
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
	jsdocJs,
	functionalJs,
	stylisticJs,

	/**
	 * TypeScript Rules
	 *
	 * Type-aware linting rules for TypeScript that enforce
	 * strong typing, proper documentation, functional patterns,
	 * and consistent style.
	 */
	typescript,
	jsdocTs,
	functionalTs,
	stylisticTs,
	/**
	 * React Rules
	 *
	 * Rules specific to React development including JSX/TSX syntax,
	 * hooks usage, accessibility, and Next.js best practices.
	 */
	react,
	stylisticJsx,
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
	stylisticPlus,
	comments,
	dependency,
	mutation,
	node,
	perfectionist,
	promise,
	regexp,
	security,
	unicornX,
	css,
	json,
	/**
	 * Disables and Prettier Rules on last position
	 */
	prettier,
	disables,
]);
