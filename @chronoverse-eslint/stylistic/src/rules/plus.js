/**
 * Plus stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/packages/plus
 * @type {import('eslint').Linter.Config['rules']}
 */
const plus = {
	/**
	 * Enforce consistent line breaks after opening and before closing braces.
	 */
	'@stylistic/plus/curly-newline': [
		'error',
		'always',
	],

	/**
	 * Indentation for binary operators.
	 */
	'@stylistic/plus/indent-binary-ops': [
		'error',
		'tab',
	],

	/**
	 * Enforces consistent spacing inside TypeScript type generics.
	 */
	'@stylistic/plus/type-generic-spacing': 'error',

	/**
	 * Expect space before the type declaration in the named tuple.
	 */
	'@stylistic/plus/type-named-tuple-spacing': 'error',
};

export { plus };
