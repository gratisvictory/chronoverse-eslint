import { interopDefault } from './modules.js';

/**
 * Returns typescript language options for ESLint configuration.
 * @returns {Promise<{parser: unknown, parserOptions: object}>} TypeScript parser configuration
 */
const getTsLanguageOptions = async () => {
	const tsParser = await interopDefault(import('@typescript-eslint/parser'));

	return {
		parser: tsParser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			ecmaVersion: 'latest',
			projectService: true,
			sourceType: 'module',
		},
	};
};

/**
 * Returns typescript language options for ESLint configuration (sync version).
 * @returns {{parser: string, parserOptions: object}} TypeScript parser configuration
 */
const getTsLanguageOptionsSync = () => ({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		projectService: true,
		sourceType: 'module',
	},
});

export { getTsLanguageOptions, getTsLanguageOptionsSync };
