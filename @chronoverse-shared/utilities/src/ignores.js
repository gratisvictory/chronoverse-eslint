import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig, globalIgnores } from 'eslint/config';
import { EXCLUDE_PATTERNS } from './constants.js';

/**
 * ESLint ignores configuration.
 * Combines .gitignore-based ignores and custom EXCLUDE_PATTERNS.
 */
const eslintIgnores = defineConfig([
	/** Respect .gitignore files */
	gitignore({ name: '@chronoverse/gitignore' }),

	/** Custom project-level excludes (e.g., dist, .cache, etc.) */
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
]);

export { eslintIgnores };
