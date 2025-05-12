import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
// import { stylisticJs } from '@chronoverse-eslint/stylistic';
import { stylisticJs, stylisticJsx, stylisticPlus } from './src/index.js';

export default defineConfig([
	/**
	 * ESLint ignores configuration.
	 * Combines .gitignore-based ignores and custom EXCLUDE_PATTERNS.
	 */
	eslintIgnores,
	stylisticJs,
	stylisticPlus,
	stylisticJsx,
]);
