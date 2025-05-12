/**
 * JavaScript stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/packages/jsx
 * @type {import('eslint').Linter.Config['rules']}
 */
const jsx = {
	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx/jsx-child-element-spacing': 'off',

	/**
	 * Enforce closing bracket location in JSX.
	 */
	'@stylistic/jsx/jsx-closing-bracket-location': [
		'error',
		'line-aligned',
	],

	/**
	 * Enforce closing tag location for multiline JSX.
	 */
	'@stylistic/jsx/jsx-closing-tag-location': 'error',

	/**
	 * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions
	 * on literals in JSX children or attributes.
	 */
	'@stylistic/jsx/jsx-curly-brace-presence': [
		'error',
		{ children: 'never', props: 'never' },
	],

	/**
	 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx/jsx-curly-newline': [
		'error',
		{
			multiline: 'consistent',
			singleline: 'consistent',
		},
	],

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx/jsx-curly-spacing': [
		'error',
		'never',
		{ allowMultiline: true },
	],

	/**
	 * Enforce or disallow spaces around equal signs in JSX attributes.
	 */
	'@stylistic/jsx/jsx-equals-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce proper position of the first property in JSX.
	 */
	'@stylistic/jsx/jsx-first-prop-new-line': [
		'error',
		'multiline-multiprop',
	],

	/**
	 * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
	 */
	'@stylistic/jsx/jsx-function-call-newline': [
		'error',
		'always',
	],

	/**
	 * Enforce JSX indentation. Deprecated, use `indent` rule instead.
	 * @deprecated
	 */
	'@stylistic/jsx/jsx-indent': [
		'off',
		'tab',
	],

	/**
	 * Enforce props indentation in JSX.
	 */
	'@stylistic/jsx/jsx-indent-props': [
		'error',
		'tab',
	],

	/**
	 * Enforce maximum of props on a single line in JSX.
	 */
	'@stylistic/jsx/jsx-max-props-per-line': [
		'error',
		{ maximum: 1, when: 'multiline' },
	],

	/**
	 * Require or prevent a new line after jsx elements and expressions.
	 */
	'@stylistic/jsx/jsx-newline': 'off',

	/**
	 * Require one JSX element per line.
	 */
	'@stylistic/jsx/jsx-one-expression-per-line': [
		'error',
		{ allow: 'single-child' },
	],

	/**
	 * Enforce PascalCase for user-defined JSX components.
	 */
	'@stylistic/jsx/jsx-pascal-case': [
		'error',
		{
			allowAllCaps: true,
			ignore: [],
		},
	],

	/**
	 * Disallow multiple spaces between inline JSX props.
	 */
	'@stylistic/jsx/jsx-props-no-multi-spaces': 'error',

	/**
	 * Disallow extra closing tags for components without children.
	 */
	'@stylistic/jsx/jsx-self-closing-comp': 'error',

	/**
	 * Enforce props alphabetical sorting.
	 */
	'@stylistic/jsx/jsx-sort-props': 'off',

	/**
	 * Enforce whitespace in and around the JSX opening and closing brackets.
	 */
	'@stylistic/jsx/jsx-tag-spacing': [
		'error',
		{
			afterOpening: 'never',
			beforeClosing: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		},
	],

	/**
	 * Disallow missing parentheses around multiline JSX.
	 */
	'@stylistic/jsx/jsx-wrap-multilines': [
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
};

export { jsx };
