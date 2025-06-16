/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const disablesRules = {
	/**
	 * Disabled: handled by TypeScript (undefined variables)
	 */
	'no-undef': 'off',

	/**
	 * Disabled: handled by TypeScript (unused expressions)
	 */
	'no-unused-expressions': 'off',

	/**
	 * Disabled: handled by TypeScript (unused variables)
	 */
	'no-unused-vars': 'off',

	/**
	 * Disabled: handled by TypeScript (useless constructors)
	 */
	'no-useless-constructor': 'off',

	/**
	 * Disabled: handled by TypeScript (variable shadowing)
	 */
	'no-shadow': 'off',

	/**
	 * Disabled: handled by TypeScript (use before define)
	 */
	'no-use-before-define': 'off',

	/**
	 * Disabled: handled by TypeScript (async without await)
	 */
	'require-await': 'off',

	/**
	 * Disabled: magic numbers often controlled via types/enums
	 */
	'no-magic-numbers': 'off',

	/**
	 * Disabled: handled by TypeScript (empty function bodies)
	 */
	'no-empty-function': 'off',

	/**
	 * Disabled: TypeScript handles naming consistency
	 */
	camelcase: 'off',

	/**
	 * Disabled: TypeScript handles array construction issues
	 */
	'no-array-constructor': 'off',

	/**
	 * Disabled: duplicate function arguments — TS handles this
	 */
	'no-dupe-args': 'off',

	/**
	 * Disabled: duplicate keys — TS handles this
	 */
	'no-dupe-keys': 'off',

	/**
	 * Disabled: unreachable code — TypeScript checks this
	 */
	'no-unreachable': 'off',

	/**
	 * Disabled: typeof correctness is handled by TS
	 */
	'valid-typeof': 'off',

	/**
	 * Disabled: TS enforces const assignments
	 */
	'no-const-assign': 'off',

	/**
	 * Disabled: handled by TS (Symbol misuse)
	 */
	'no-new-symbol': 'off',

	/**
	 * Disabled: TS enforces correct super usage
	 */
	'no-this-before-super': 'off',

	/**
	 * Disabled: redeclarations are caught by TS
	 */
	'no-redeclare': 'off',

	/**
	 * Disabled: duplicate class members are caught by TS
	 */
	'no-dupe-class-members': 'off',

	/**
	 * Disabled: strict mode is implied with modules + TS
	 */
	strict: 'off',

	/**
	 * Disabled: TS handles return statements in array callbacks
	 */
	'array-callback-return': 'off',

	/**
	 * Disabled: getter must return value — TS handles it
	 */
	'getter-return': 'off',
};

export { disablesRules };
