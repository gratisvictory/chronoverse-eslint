/**
 * Spacing stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=spacing
 * @type {import('eslint').Linter.Config['rules']}
 */
const spacingRules = {
	/**
	 * Enforce consistent spacing inside array brackets.
	 */
	'@stylistic/array-bracket-spacing': ['error', 'never'],

	/**
	 * Enforce consistent spacing before and after the arrow in arrow functions.
	 */
	'@stylistic/arrow-spacing': ['error', { after: true, before: true }],

	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before closing block.
	 */
	'@stylistic/block-spacing': ['error', 'always'],

	/**
	 * Enforce consistent spacing before and after commas.
	 */
	'@stylistic/comma-spacing': ['error', { after: true, before: false }],

	/**
	 * Enforce consistent spacing inside computed property brackets.
	 */
	'@stylistic/computed-property-spacing': ['error', 'never'],

	/**
	 *  Require or disallow spacing between function identifiers and their invocations.
	 */
	'@stylistic/function-call-spacing': ['error', 'never'],

	/**
	 * Enforce consistent spacing around `*` operators in generator functions.
	 */
	'@stylistic/generator-star-spacing': ['error', { after: false, before: true }],

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx-child-element-spacing': 'off',

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx-curly-spacing': [
		'error',
		'never',
		{ allowMultiline: true },
	],

	/**
	 * Enforce or disallow spaces around equal signs in JSX attributes.
	 */
	'@stylistic/jsx-equals-spacing': ['error', 'never'],

	/**
	 * Disallow multiple spaces between inline JSX props.
	 */
	'@stylistic/jsx-props-no-multi-spaces': 'error',

	/**
	 * Enforce whitespace in and around the JSX opening and closing brackets.
	 */
	'@stylistic/jsx-tag-spacing': [
		'error',
		{
			afterOpening: 'never',
			beforeClosing: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		},
	],

	/**
	 * Enforce consistent spacing between keys and values in object literal properties.
	 */
	'@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],

	/**
	 * Enforce consistent spacing before and after keywords.
	 */
	'@stylistic/keyword-spacing': [
		'error',
		{
			after: true,
			before: true,
			overrides: {
				case: { after: true },
				return: { after: true },
				throw: { after: true },
			},
		},
	],

	/**
	 * Disallow mixed spaces and tabs for indentation
	 */
	'@stylistic/no-mixed-spaces-and-tabs': 'error',

	/**
	 * Disallow multiple spaces
	 */
	'@stylistic/no-multi-spaces': 'error',

	/**
	 * Disallow trailing whitespace at the end of lines
	 */
	'@stylistic/no-trailing-spaces': [
		'error',
		{
			ignoreComments: false,
			skipBlankLines: false,
		},
	],

	/**
	 * Disallow whitespace before properties
	 */
	'@stylistic/no-whitespace-before-property': 'error',

	/**
	 * Enforce consistent spacing inside braces
	 */
	'@stylistic/object-curly-spacing': ['error', 'always'],

	/**
	 * Enforce spacing between rest and spread operators and their expressions
	 */
	'@stylistic/rest-spread-spacing': ['error', 'never'],

	/**
	 * Enforce consistent spacing before and after semicolons
	 */
	'@stylistic/semi-spacing': ['error', { after: true, before: false }],

	/**
	 * Enforce consistent spacing before blocks
	 */
	'@stylistic/space-before-blocks': 'error',

	/**
	 * Enforce consistent spacing before `function` definition opening parenthesis
	 */
	'@stylistic/space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			asyncArrow: 'always',
			named: 'never',
		},
	],

	/**
	 * Enforce consistent spacing inside parentheses
	 */
	'@stylistic/space-in-parens': ['error', 'never'],

	/**
	 * Require spacing around infix operators
	 */
	'@stylistic/space-infix-ops': 'error',

	/**
	 * Enforce consistent spacing before or after unary operators
	 */
	'@stylistic/space-unary-ops': [
		'error',
		{
			nonwords: false,
			overrides: {},
			words: true,
		},
	],

	/**
	 * Enforce consistent spacing after the `//` or `/*` in a comment
	 */
	'@stylistic/spaced-comment': [
		'error',
		'always',
		{
			block: {
				balanced: true,
				exceptions: ['-', '+'],
				markers: [
					'=',
					'!',
					':',
					'::',
				],
			},
			line: {
				exceptions: ['-', '+'],
				markers: [
					'=',
					'!',
					'/',
				],
			},
		},
	],

	/**
	 * Enforce spacing around colons of switch statements
	 */
	'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

	/**
	 * Require or disallow spacing around embedded expressions of template strings
	 */
	'@stylistic/template-curly-spacing': 'error',

	/**
	 * Require or disallow spacing between template tags and their literals
	 */
	'@stylistic/template-tag-spacing': ['error', 'never'],

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

	/**
	 * Require or disallow spacing around the `*` in `yield*` expressions
	 */
	'@stylistic/yield-star-spacing': ['error', 'after'],
};

export { spacingRules };
