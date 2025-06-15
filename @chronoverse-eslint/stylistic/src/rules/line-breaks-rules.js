/**
 * Line breaks stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=line-breaks
 * @type {import('eslint').Linter.Config['rules']}
 */
const lineBreaksRules = {
	/**
	 * Enforce linebreaks after opening and before closing array brackets.
	 */
	'@stylistic/array-bracket-newline': ['error', { minItems: 3, multiline: true }],

	/**
	 * Enforce line breaks after each array element.
	 */
	'@stylistic/array-element-newline': 'off',

	/**
	 * Enforce consistent line breaks after opening and before closing braces.
	 */
	'@stylistic/curly-newline': ['error', 'always'],

	/**
	 * Require or disallow newline at the end of files.
	 */
	'@stylistic/eol-last': ['error', 'always'],

	/**
	 * Enforce line breaks between arguments of a function call
	 */
	'@stylistic/function-call-argument-newline': ['error', 'consistent'],

	/**
	 * Enforce consistent line breaks inside function parentheses.
	 */
	'@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

	/**
	 * Enforce the location of arrow function bodies.
	 */
	'@stylistic/implicit-arrow-linebreak': 'off',

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
	 * Enforce proper position of the first property in JSX.
	 */
	'@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

	/**
	 * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
	 */
	'@stylistic/jsx-function-call-newline': ['error', 'always'],

	/**
	 * Require or prevent a new line after jsx elements and expressions.
	 */
	'@stylistic/jsx-newline': 'off',

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
	 * Enforce consistent linebreak style.
	 */
	'@stylistic/linebreak-style': ['error', 'unix'],

	/**
	 * Require empty lines around comments.
	 */
	'@stylistic/lines-around-comment': 'off',

	/**
	 * Require or disallow an empty line between class members.
	 */
	'@stylistic/lines-between-class-members': [
		'error',
		'always',
		{ exceptAfterSingleLine: false },
	],

	/**
	 * Enforce a particular style for multiline comments
	 */
	'@stylistic/multiline-comment-style': ['off', 'starred-block'],

	/**
	 * Enforce newlines between operands of ternary expressions
	 */
	'@stylistic/multiline-ternary': ['off', 'never'],

	/**
	 * Require a newline after each call in a method chain
	 */
	'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

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
	 * Enforce placing object properties on separate lines
	 */
	'@stylistic/object-property-newline': [
		'error',
		{
			allowAllPropertiesOnSameLine: true,
		},
	],

	/**
	 * Enforce consistent linebreak style for operators
	 */
	'@stylistic/operator-linebreak': 'off',

	/**
	 * Require or disallow padding lines between statements
	 */
	'@stylistic/padding-line-between-statements': 'off',
};

export { lineBreaksRules };
