/**
 * Semis stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=semis
 * @type {import('eslint').Linter.Config['rules']}
 */
const semisRules = {
	/**
	 * Disallow unnecessary semicolons
	 */
	'@stylistic/no-extra-semi': 'error',

	/**
	 * Require or disallow semicolons instead of ASI
	 */
	'@stylistic/semi': ['error', 'always'],

	/**
	 * Enforce consistent spacing before and after semicolons
	 */
	'@stylistic/semi-spacing': ['error', { after: true, before: false }],

	/**
	 * Enforce location of semicolons
	 */
	'@stylistic/semi-style': ['error', 'last'],
};

export { semisRules };
