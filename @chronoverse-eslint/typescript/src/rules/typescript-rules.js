/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const typescriptRules = {
	/**
	 * Require explicit return types on functions and class methods
	 */
	'@typescript-eslint/explicit-function-return-type': 'off',
	/**
	 * Require explicit accessibility modifiers on class properties and methods
	 */
	'@typescript-eslint/explicit-member-accessibility': 'off',
	/**
	 * Require explicit return types on functions and class methods
	 */
	'@typescript-eslint/interface-name-prefix': 'off',

	/**
	 * Disallow generic `Array` constructors
	 */
	'@typescript-eslint/no-array-constructor': 'error',

	/**
	 * Disallow the `any` type
	 */
	'@typescript-eslint/no-explicit-any': 'off',

	/**
	 * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
	 */
	'@typescript-eslint/no-inferrable-types': [
		'error',
		{
			ignoreParameters: false,
			ignoreProperties: false,
		},
	],

	/**
	 *Disallow TypeScript namespaces
	 */
	'@typescript-eslint/no-namespace': [
		'error',
		{ allowDeclarations: false, allowDefinitionFiles: false },
	],

	/**
	 * Disallow non-null assertions using the `!` postfix operator
	 */
	'@typescript-eslint/no-non-null-assertion': 'off',

	/**
	 * Disallow the use of variables before they are defined
	 */
	'@typescript-eslint/no-use-before-define': 'off',

	/**
	 * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
	 */
	'@typescript-eslint/prefer-namespace-keyword': 'off',

	/**
	 * Disallow type aliases
	 * @deprecated
	 */
	'@typescript-eslint/no-type-alias': 'off',

	/**
	 * Require that function overload signatures be consecutive
	 */
	'@typescript-eslint/adjacent-overload-signatures': 'error',

	/**
	 * Require or disallow parameter properties in class constructors
	 */
	'@typescript-eslint/no-parameter-properties': 'off',

	/**
	 * Disallow the declaration of empty interfaces
	 * @deprecated
	 */
	'@typescript-eslint/no-empty-interface': 'off',

	/**
	 * Require consistently using either `T[]` or `Array<T>` for arrays
	 */
	'@typescript-eslint/array-type': [
		'error',
		{
			default: 'array',
			readonly: 'generic',
		},
	],

	/**
	 * Disallow accidentally using the "empty object" type
	 */
	'@typescript-eslint/no-empty-object-type': 'error',

	/**
	 * Disallow using confusing built-in primitive class wrappers
	 */
	'@typescript-eslint/no-wrapper-object-types': 'error',

	/**
	 * Require a consistent member declaration order
	 */
	'@typescript-eslint/member-ordering': [
		'error',
		{
			default: [
				'public-static-field',
				'protected-static-field',
				'private-static-field',
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'constructor',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
			],
		},
	],

	/**
	 * Enforce naming conventions for everything across a codebase
	 */
	'@typescript-eslint/naming-convention': [
		'error',
		{
			format: [
				'camelCase',
				'PascalCase',
				'UPPER_CASE',
			],
			leadingUnderscore: 'allow',
			selector: 'default',
			trailingUnderscore: 'allow',
		},
		{
			filter: {
				match: true,
				regex: '^(__|UNSAFE_).+$',
			},
			format: null,
			selector: 'default',
		},
		{
			format: ['PascalCase'],
			selector: 'typeLike',
		},
		{
			format: ['PascalCase'],
			prefix: ['T'],
			selector: 'typeParameter',
		},
		{
			custom: {
				match: false,
				regex: '^I[A-Z]',
			},
			format: ['PascalCase'],
			selector: 'interface',
		},
	],

	/**
	 * Disallow classes used as namespaces
	 */
	'@typescript-eslint/no-extraneous-class': [
		'error',
		{
			allowConstructorOnly: false,
			allowEmpty: false,
			allowStaticOnly: false,
		},
	],

	/**
	 * Disallow misusing the `new` operator
	 */
	'@typescript-eslint/no-misused-new': 'error',

	/**
	 * Disallow invocation of `require()`
	 */
	'@typescript-eslint/no-require-imports': 'error',

	/**
	 * Disallow aliasing `this`
	 */
	'@typescript-eslint/no-this-alias': [
		'error',
		{ allowDestructuring: true, allowedNames: [] },
	],

	/**
	 * Enforce using function types instead of interfaces with call signatures
	 */
	'@typescript-eslint/prefer-function-type': 'off',

	/**
	 * Require any function or method that returns a Promise to be marked async
	 */
	'@typescript-eslint/promise-function-async': 'off',

	/**
	 * Disallow `@ts-<directive>` comments or require descriptions after directives
	 */
	'@typescript-eslint/ban-ts-comment': 'error',

	/**
	 * Enforce consistent usage of type assertions
	 */
	'@typescript-eslint/consistent-type-assertions': [
		'error',
		{ assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
	],

	/**
	 * Disallow empty functions
	 */
	'@typescript-eslint/no-empty-function': 'off',

	/**
	 * Require Promise-like statements to be handled appropriately
	 */
	'@typescript-eslint/no-floating-promises': 'off',

	/**
	 * Disallow magic numbers
	 */
	'@typescript-eslint/no-magic-numbers': 'off',

	/**
	 * Enforce the use of `for-of` loop over the standard `for` loop where possible
	 */
	'@typescript-eslint/prefer-for-of': 'error',

	/**
	 * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
	 */
	'@typescript-eslint/require-array-sort-compare': 'off',

	/**
	 * Disallow certain types in boolean expressions
	 */
	'@typescript-eslint/strict-boolean-expressions': 'off',

	/**
	 * Disallow certain triple slash directives in favor of ES6-style import declarations
	 */
	'@typescript-eslint/triple-slash-reference': [
		'error',
		{ lib: 'never', path: 'never', types: 'never' },
	],

	/**
	 * Require type annotations in certain places
	 * @deprecated
	 */
	'@typescript-eslint/typedef': 'off',

	/**
	 * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
	 */
	'@typescript-eslint/unified-signatures': 'error',

	/**
	 * Disallow awaiting a value that is not a Thenable
	 */
	'@typescript-eslint/await-thenable': 'off',

	/**
	 * Disallow iterating over an array with a for-in loop
	 */
	'@typescript-eslint/no-for-in-array': 'off',

	/**
	 * Disallow Promises in places not designed to handle them
	 */
	'@typescript-eslint/no-misused-promises': 'off',

	/**
	 * Disallow type assertions that do not change the type of an expression
	 */
	'@typescript-eslint/no-unnecessary-type-assertion': 'off',

	/**
	 * Enforce `includes` method over `indexOf` method
	 */
	'@typescript-eslint/prefer-includes': 'off',

	/**
	 * Prefer RegExp#exec() over String#match() if no global flag is provided
	 */
	'@typescript-eslint/prefer-regexp-exec': 'off',

	/**
	 * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods
	 */
	'@typescript-eslint/prefer-string-starts-ends-with': 'off',

	/**
	 * Disallow async functions which have no await expression
	 */
	'@typescript-eslint/require-await': 'off',

	/**
	 * Enforces unbound methods are called with their expected scope
	 */
	'@typescript-eslint/unbound-method': 'off',

	/**
	 * Warns when a namespace qualifier is unnecessary
	 */
	'@typescript-eslint/no-unnecessary-qualifier': 'off',

	/**
	 * When adding two variables, operands must both be of type number or of type string
	 */
	'@typescript-eslint/restrict-plus-operands': 'off',

	/**
	 * Prevents conditionals where the type is always truthy or always falsy
	 */
	'@typescript-eslint/no-unnecessary-condition': 'off',

	/**
	 * Warns if an explicitly specified type argument is the default for that type parameter
	 */
	'@typescript-eslint/no-unnecessary-type-arguments': 'off',

	/**
	 * Requires that private members are marked as readonly if they're never modified outside of the constructor
	 */
	'@typescript-eslint/prefer-readonly': 'off',

	/**
	 * Enforces a consistent way to define records (index signature style)
	 */
	'@typescript-eslint/consistent-indexed-object-style': 'error',

	/**
	 * Disallows unnecessary constraints on generic types
	 */
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',

	/**
	 * Disallow unused expressions
	 */
	'@typescript-eslint/no-unused-expressions': 'error',
};

export { typescriptRules };
