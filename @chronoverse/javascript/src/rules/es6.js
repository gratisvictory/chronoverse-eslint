/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const es6 = {
	/**
	 * Disallow useless computed property keys.
	 */
	'no-useless-computed-key': 'error',

	/**
	 * Enforce the use of `as-needed` arrow function body style.
	 */
	'arrow-body-style': [
		'error',
		'as-needed',
		{
			requireReturnForObjectLiteral: false,
		},
	],
	/**
	 * Require parens in arrow function arguments.
	 * @deprecated
	 */
	'arrow-parens': 'off',
	/**
	 * Require space before/after arrow function's arrow.
	 * @deprecated
	 */
	'arrow-spacing': 'off',
	/**
	 * Disallow calling `super()` before `this` is used.
	 */
	'constructor-super': 'error',
	/**
	 * Disallow generator functions that do not have the `yield` keyword.
	 * @deprecated
	 */
	'generator-star-spacing': 'off',
	/**
	 * Disallow reassigning class declarations.
	 */
	'no-class-assign': 'error',
	/**
	 * Disallow arrow functions where they could be confused with the comparison operator.
	 * @deprecated
	 */
	'no-confusing-arrow': 'off',
	/**
	 * disallow modifying variables that are declared using const
	 */
	'no-const-assign': 'error',
	/**
	 * Disallow duplicate class members.
	 */
	'no-dupe-class-members': 'error',
	/**
	 * Disallow duplicate imports.
	 */
	'no-duplicate-imports': 'off',
	/**
	 * Disallow `new` operators with the `Symbol` object.
	 * @deprecated
	 */
	'no-new-symbol': 'off',
	/**
	 * Disallow exports of `default`, `then`, `prototype`, `__esModule`, `arguments`, and `eval`.
	 */
	'no-restricted-exports': [
		'error',
		{
			restrictedNamedExports: [
				'default',
				'then',
				'prototype',
				'__esModule',
				'arguments',
				'eval',
			],
		},
	],
	/**
	 * Disallow restricted imports.
	 */
	'no-restricted-imports': 'off',
	/**
	 * Disallow `this` before `super()` in constructors.
	 */
	'no-this-before-super': 'error',
	/**
	 * Disallow unnecessary constructors.
	 */
	'no-useless-constructor': 'error',
	/**
	 * Disallow renaming import, export, and variable declarations to the same name.
	 */
	'no-useless-rename': 'error',
	/**
	 * Require `let` or `const` instead of `var`.
	 */
	'no-var': 'error',
	/**
	 * Require object literal shorthand syntax.
	 */
	'object-shorthand': [
		'error',
		'always',
		{
			avoidExplicitReturnArrows: true,
			avoidQuotes: true,
			ignoreConstructors: false,
		},
	],
	/**
	 * Suggest using arrow functions as callbacks.
	 */
	'prefer-arrow-callback': [
		'error',
		{
			allowNamedFunctions: false,
			allowUnboundThis: true,
		},
	],
	/**
	 * Require `const` or `let` instead of `var`.
	 */
	'prefer-const': [
		'error',
		{
			destructuring: 'all',
			ignoreReadBeforeAssign: true,
		},
	],
	/**
	 * Prefer destructuring from arrays and objects
	 */
	'prefer-destructuring': [
		'error',
		{
			AssignmentExpression: {
				array: true,
				object: false,
			},
			VariableDeclarator: {
				array: false,
				object: true,
			},
		},
		{
			enforceForRenamedProperties: false,
		},
	],
	/**
	 * Require numeric literals to always be written as decimals.
	 */
	'prefer-numeric-literals': 'error',
	/**
	 * Suggest using Reflect methods where applicable.
	 */
	'prefer-reflect': 'off',
	/**
	 * Require rest parameters instead of `arguments`.
	 */
	'prefer-rest-params': 'error',
	/**
	 * Require using spread syntax instead of `.apply()`.
	 */
	'prefer-spread': 'error',
	/**
	 * Require using template literals instead of string concatenation.
	 */
	'prefer-template': 'error',
	/**
	 * Disallow generator functions that do not have yield.
	 */
	'require-yield': 'error',
	/**
	 * Disallow spaces around rest and spread operators.
	 * @deprecated
	 */
	'rest-spread-spacing': 'off',
	/**
	 *  import sorting
	 */
	'sort-imports': 'off',
	/**
	 * Require symbol descriptions.
	 */
	'symbol-description': 'error',
	/**
	 * Enforce usage of spacing in template strings.
	 * @deprecated
	 */
	'template-curly-spacing': 'off',
	/**
	 * Enforce spacing around the `*` in `yield*` expressions.
	 * @deprecated
	 */
	'yield-star-spacing': 'off',
};

export { es6 };
