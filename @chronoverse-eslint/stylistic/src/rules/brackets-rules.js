/**
 * Brackets stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=brackets
 * @type {import('eslint').Linter.Config['rules']}
 */
const bracketsRules = {
	/**
	 * Enforce linebreaks after opening and before closing array brackets.
	 */
	'@stylistic/array-bracket-newline': ['error', { minItems: 3, multiline: true }],

	/**
	 * Enforce consistent spacing inside array brackets.
	 */
	'@stylistic/array-bracket-spacing': ['error', 'never'],

	/**
	 * Require parentheses around arrow function arguments.
	 */
	'@stylistic/arrow-parens': ['error', 'as-needed'],

	/**
	 * Enforce consistent brace style for blocks.
	 */
	'@stylistic/brace-style': [
		'error',
		'1tbs',
		{ allowSingleLine: true },
	],

	/**
	 * Enforce consistent line breaks after opening and before closing braces.
	 */
	'@stylistic/curly-newline': ['error', 'always'],

	/**
	 * Enforce consistent line breaks inside function parentheses.
	 */
	'@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

	/**
	 * Enforce closing bracket location in JSX.
	 */
	'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

	/**
	 * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions
	 * on literals in JSX children or attributes.
	 */
	'@stylistic/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],

	/**
	 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx-curly-newline': [
		'error',
		{
			multiline: 'consistent',
			singleline: 'consistent',
		},
	],

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx-curly-spacing': [
		'error',
		'never',
		{ allowMultiline: true },
	],

	/**
	 * Disallow missing parentheses around multiline JSX.
	 */
	'@stylistic/jsx-wrap-multilines': [
		'error',
		{
			arrow: 'parens-new-line',
			assignment: 'parens-new-line',
			condition: 'parens-new-line',
			declaration: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
			return: 'parens-new-line',
		},
	],

	/**
	 * Enforce or disallow parentheses when invoking a constructor with no arguments
	 */
	'@stylistic/new-parens': 'error',

	/**
	 * Disallow unnecessary parentheses
	 */
	'@stylistic/no-extra-parens': [
		'error',
		'all',
		{ ignoreJSX: 'multi-line' },
	],

	/**
	 * Enforce consistent line breaks after opening and before closing braces
	 */
	'@stylistic/object-curly-newline': [
		'error',
		{
			ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
			ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
			ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
			ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
		},
	],

	/**
	 * Enforce consistent spacing inside braces
	 */
	'@stylistic/object-curly-spacing': ['error', 'always'],

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
	 * Require or disallow spacing around embedded expressions of template strings
	 */
	'@stylistic/template-curly-spacing': 'error',

	/**
	 * Require parentheses around immediate `function` invocations
	 */
	'@stylistic/wrap-iife': [
		'error',
		'outside',
		{ functionPrototypeMethods: false },
	],

	/**
	 * Require parenthesis around regex literals
	 */
	'@stylistic/wrap-regex': 'off',
};

export { bracketsRules };
