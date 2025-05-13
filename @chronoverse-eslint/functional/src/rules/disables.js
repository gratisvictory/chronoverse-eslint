/**
 * Disables functional rules for JavaScript ESLint.
 * @see https://github.com/eslint-functional/eslint-plugin-functional
 * @type {import('eslint').Linter.Config['rules']}
 */
const disables = {
	/**
	 * Enforce functional parameters.
	 */
	'functional/functional-parameters': 'off',

	/**
	 * Enforce treating data as immutable.
	 */
	'functional/immutable-data': 'off',

	/**
	 * Disallow conditional statements.
	 */
	'functional/no-conditional-statements': 'off',

	/**
	 * Disallow expression statements.
	 */
	'functional/no-expression-statements': 'off',

	/**
	 * Restrict types so that only members of the same kind are allowed in them.
	 */
	'functional/no-mixed-types': 'off',

	/**
	 * Disallow functions that don't return anything.
	 */
	'functional/no-return-void': 'off',

	/**
	 * Disallow throwing exceptions.
	 */
	'functional/no-throw-statements': 'off',

	/**
	 * Require function parameters to be typed as certain immutability
	 */
	'functional/prefer-immutable-types': 'off',

	/**
	 * Prefer property signatures over method signatures.
	 */
	'functional/prefer-property-signatures': 'off',

	/**
	 * Prefer readonly types over mutable types.
	 * @deprecated
	 */
	'functional/prefer-readonly-type': 'off',

	/**
	 * Replaces `x => f(x)` with just `f`.
	 */
	'functional/prefer-tacit': 'off',

	/**
	 * Require consistently using either `readonly` keywords or `Readonly<T>`
	 */
	'functional/readonly-type': 'off',

	/**
	 * Enforce the immutability of types based on patterns.
	 */
	'functional/type-declaration-immutability': 'off',
};

export { disables };
