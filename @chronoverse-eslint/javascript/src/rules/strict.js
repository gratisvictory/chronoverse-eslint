/**
 * ESLint rules for enforcing or disabling strict mode.
 * In ESM and modern setups, strict mode is enabled by default, so it's best to disallow explicit use.
 * @see https://eslint.org/docs/latest/rules/strict
 * @type {import('eslint').Linter.Config['rules']}
 */
const strict = {
	/**
	 * Enforce or disallow strict mode.
	 */
	strict: ['error', 'never'],
};

export { strict };
