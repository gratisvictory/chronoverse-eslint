import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { CHRONOVERSE_PRESETS } from '@chronoverse-eslint/presets';
import { CHRONOVERSE_REACT } from '@chronoverse-eslint/react';
import { stylisticJs, stylisticJsx, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { CHRONOVERSE_TYPESCRIPT } from '@chronoverse-eslint/typescript';
import { CHRONOVERSE_DISABLES, eslintIgnores } from '@chronoverse-shared/utilities';
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
	CHRONOVERSE_PRESETS.jsdoc,
	functionalJs,
	stylisticJs,

	/**
	 * TypeScript Rules
	 *
	 * Type-aware linting rules for TypeScript that enforce
	 * strong typing, proper documentation, functional patterns,
	 * and consistent style.
	 */
	CHRONOVERSE_TYPESCRIPT.typescript,
	functionalTs,
	stylisticTs,
	/**
	 * React Rules
	 *
	 * Rules specific to React development including JSX/TSX syntax,
	 * hooks usage, accessibility, and Next.js best practices.
	 */
	CHRONOVERSE_REACT.react,
	stylisticJsx,
	CHRONOVERSE_REACT.eslintReactJsx,
	CHRONOVERSE_REACT.eslintReactTsx,
	CHRONOVERSE_REACT.reactHooks,
	CHRONOVERSE_REACT.reactCompiler,
	CHRONOVERSE_REACT.jsxA11y,
	CHRONOVERSE_PRESETS.next,

	/**
	 * Shared Rules
	 *
	 * General purpose rules that apply across different file types
	 * and frameworks to ensure code quality, security, and performance.
	 */
	stylisticPlus,
	CHRONOVERSE_PRESETS.comments,
	CHRONOVERSE_PRESETS.dependency,
	CHRONOVERSE_PRESETS.mutation,
	CHRONOVERSE_PRESETS.node,
	CHRONOVERSE_PRESETS.perfectionist,
	CHRONOVERSE_PRESETS.promise,
	CHRONOVERSE_PRESETS.regexp,
	CHRONOVERSE_PRESETS.security,
	CHRONOVERSE_PRESETS.unicorn,
	CHRONOVERSE_PRESETS.css,
	CHRONOVERSE_PRESETS.json,
	/**
	 * Disables and Prettier Rules on last position
	 */
	CHRONOVERSE_PRESETS.prettier,
	CHRONOVERSE_PRESETS.prettierConfig,
	CHRONOVERSE_DISABLES.disables,
]);

export default eslintConfig;
