/**
 * Types stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=type
 * @type {import('eslint').Linter.Config['rules']}
 */
const typesRules = {
	/**
	 * Require consistent spacing around type annotations
	 */
	'@stylistic/type-annotation-spacing': 'error',

	/**
	 * Enforces consistent spacing inside TypeScript type generics.
	 */
	'@stylistic/type-generic-spacing': 'error',

	/**
	 * Expect space before the type declaration in the named tuple.
	 */
	'@stylistic/type-named-tuple-spacing': 'error',
};

export { typesRules };
