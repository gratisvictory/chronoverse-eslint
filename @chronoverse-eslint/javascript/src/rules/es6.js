/**
 * ESLint rules related to ES6+ features, including arrow functions, let/const,
 * template literals, destructuring, and more.
 * @type {import('eslint').Linter.Config['rules']}
 */
const es6 = {
	/**
	 * Disallow unnecessary computed property keys in object literals.
	 */
	'no-useless-computed-key': 'error',

	/**
	 * Enforce concise arrow function bodies when possible.
	 */
	'arrow-body-style': [
		'error',
		'as-needed',
		{
			requireReturnForObjectLiteral: false,
		},
	],

	/**
	 * Require parentheses around arrow function arguments.
	 * @deprecated — handled by Prettier or style rules.
	 */
	'arrow-parens': 'off',

	/**
	 * Enforce space before/after arrow function arrow.
	 * @deprecated — handled by Prettier or style rules.
	 */
	'arrow-spacing': 'off',

	/**
	 * Disallow calling `super()` before `this` in constructors.
	 */
	'constructor-super': 'error',

	/**
	 * Disallow generator functions without `yield`.
	 * @deprecated — handled by TS/Prettier or not relevant.
	 */
	'generator-star-spacing': 'off',

	/**
	 * Disallow reassigning class declarations.
	 */
	'no-class-assign': 'error',

	/**
	 * Disallow confusing arrow function syntax (`=>` vs `>=`).
	 * @deprecated — handled by Prettier.
	 */
	'no-confusing-arrow': 'off',

	/**
	 * Disallow modifying variables declared with `const`.
	 */
	'no-const-assign': 'error',

	/**
	 * Disallow duplicate class members.
	 */
	'no-dupe-class-members': 'error',

	/**
	 * Disallow duplicate imports from the same module.
	 * @deprecated — let bundlers/TS handle this.
	 */
	'no-duplicate-imports': 'off',

	/**
	 * Disallow `new Symbol()`.
	 * @deprecated — almost never used this way.
	 */
	'no-new-symbol': 'off',

	/**
	 * Disallow reserved exports like `default`, `then`, etc.
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
	 * Disallow importing specific modules.
	 * Use `no-restricted-imports` if needed.
	 */
	'no-restricted-imports': 'off',

	/**
	 * Disallow using `this` before calling `super()` in constructors.
	 */
	'no-this-before-super': 'error',

	/**
	 * Disallow unnecessary constructors.
	 */
	'no-useless-constructor': 'error',

	/**
	 * Disallow renaming to the same name in destructuring or imports.
	 */
	'no-useless-rename': 'error',

	/**
	 * Disallow use of `var` in favor of `let` or `const`.
	 */
	'no-var': 'error',

	/**
	 * Require object literal shorthand `{ a }` instead of `{ a: a }`.
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
	 * Prefer arrow functions for callbacks.
	 */
	'prefer-arrow-callback': [
		'error',
		{
			allowNamedFunctions: false,
			allowUnboundThis: true,
		},
	],

	/**
	 * Prefer `const` over `let` where possible.
	 */
	'prefer-const': [
		'error',
		{
			destructuring: 'all',
			ignoreReadBeforeAssign: true,
		},
	],

	/**
	 * Prefer destructuring from arrays and objects.
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
	 * Require decimal literals instead of binary/octal/hex.
	 */
	'prefer-numeric-literals': 'error',

	/**
	 * Suggest using Reflect API where applicable.
	 */
	'prefer-reflect': 'off',

	/**
	 * Require use of rest parameters (`...args`) instead of `arguments`.
	 */
	'prefer-rest-params': 'error',

	/**
	 * Require use of spread syntax instead of `Function.prototype.apply`.
	 */
	'prefer-spread': 'error',

	/**
	 * Require use of template literals instead of string concatenation.
	 */
	'prefer-template': 'error',

	/**
	 * Require `yield` in generator functions.
	 */
	'require-yield': 'error',

	/**
	 * Disallow spacing around rest/spread operators.
	 * @deprecated — handled by Prettier.
	 */
	'rest-spread-spacing': 'off',

	/**
	 * Enforce sorting of import declarations within modules.
	 * @deprecated — handled by import plugin or formatter.
	 */
	'sort-imports': 'off',
	/**
	 * Require description for `Symbol()` for better debugging.
	 */
	'symbol-description': 'error',

	/**
	 * Enforce spacing conventions for template strings.
	 * @deprecated — handled by Prettier.
	 */
	'template-curly-spacing': 'off',

	/**
	 * Enforce spacing around a `*` in `yield*` expressions.
	 * @deprecated — handled by Prettier.
	 */
	'yield-star-spacing': 'off',
};

export { es6 };
