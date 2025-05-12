import { javascript } from '@chronoverse-eslint/javascript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	/**
	 * ESLint ignores configuration.
	 * Combines .gitignore-based ignores and custom EXCLUDE_PATTERNS.
	 */
	eslintIgnores,
	javascript,
]);
