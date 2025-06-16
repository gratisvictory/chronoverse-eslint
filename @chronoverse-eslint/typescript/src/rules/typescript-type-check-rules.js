/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const typescriptTypeCheckRules = {
	/**
	 * Disallow awaiting a value that is not a Thenable
	 */
	'@typescript-eslint/await-thenable': 'error',

	/**
	 * Disallow iterating over arrays using for-in (use for-of instead)
	 */
	'@typescript-eslint/no-for-in-array': 'error',

	/**
	 * Avoid using promises in contexts not designed to handle them (e.g., event handlers, conditions)
	 */
	'@typescript-eslint/no-misused-promises': [
		'error',
		{
			checksConditionals: true,
			checksVoidReturn: true,
		},
	],

	/**
	 * Warn if a type assertion has no effect on the expression type
	 * (disabled for clarity and code readability)
	 */
	'@typescript-eslint/no-unnecessary-type-assertion': 'off',

	/**
	 * Enforce `includes()` over `indexOf()` when checking for existence
	 */
	'@typescript-eslint/prefer-includes': 'error',

	/**
	 * Prefer RegExp#exec() over String#match() if global flag is not used
	 */
	'@typescript-eslint/prefer-regexp-exec': 'error',

	/**
	 * Enforce using String#startsWith and String#endsWith over other substring checks
	 */
	'@typescript-eslint/prefer-string-starts-ends-with': 'error',

	/**
	 * Disallow async functions without an await expression
	 */
	'@typescript-eslint/require-await': 'error',

	/**
	 * Enforce calling unbound methods with the correct `this` context
	 */
	'@typescript-eslint/unbound-method': [
		'error',
		{ ignoreStatic: false },
	],

	/**
	 * Disallow unnecessary namespace qualifiers (e.g., A.A instead of A)
	 */
	'@typescript-eslint/no-unnecessary-qualifier': 'error',

	/**
	 * Enforce operands of `+` to be both string or both number
	 */
	'@typescript-eslint/restrict-plus-operands': 'error',

	/**
	 * Prevent conditions that are always truthy or always falsy
	 */
	'@typescript-eslint/no-unnecessary-condition': ['error'],

	/**
	 * Disallow explicitly passing default type arguments
	 */
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',

	/**
	 * Require marking private class members as readonly if never reassigned outside constructor
	 */
	'@typescript-eslint/prefer-readonly': [
		'error',
		{ onlyInlineLambdas: false },
	],
};

export { typescriptTypeCheckRules };
