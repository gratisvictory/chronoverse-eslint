/**
 * JSX stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=jsx
 * @type {import('eslint').Linter.Config['rules']}
 */
const jsxRules = {
	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
	 */
	'@stylistic/jsx-child-element-spacing': 'off',

	/**
	 * Enforce closing bracket location in JSX.
	 */
	'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

	/**
	 * Enforce closing tag location for multiline JSX.
	 */
	'@stylistic/jsx-closing-tag-location': 'error',

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
	 * Enforce or disallow spaces around equal signs in JSX attributes.
	 */
	'@stylistic/jsx-equals-spacing': ['error', 'never'],

	/**
	 * Enforce proper position of the first property in JSX.
	 */
	'@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

	/**
	 * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
	 */
	'@stylistic/jsx-function-call-newline': ['error', 'always'],

	/**
	 * Enforce JSX indentation. Deprecated, use `indent` rule instead.
	 * @deprecated
	 */
	'@stylistic/jsx-indent': ['off', 'tab'],

	/**
	 * Enforce props indentation in JSX.
	 */
	'@stylistic/jsx-indent-props': ['error', 'tab'],

	/**
	 * Enforce maximum of props on a single line in JSX.
	 */
	'@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

	/**
	 * Require or prevent a new line after jsx elements and expressions.
	 */
	'@stylistic/jsx-newline': 'off',

	/**
	 * Require one JSX element per line.
	 */
	'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

	/**
	 * Enforce PascalCase for user-defined JSX components.
	 */
	'@stylistic/jsx-pascal-case': [
		'error',
		{
			allowAllCaps: true,
			ignore: [],
		},
	],

	/**
	 * Disallow multiple spaces between inline JSX props.
	 */
	'@stylistic/jsx-props-no-multi-spaces': 'error',

	/**
	 * Enforce the consistent use of either double or single quotes in JSX attributes.
	 */
	'@stylistic/jsx-quotes': ['error', 'prefer-single'],

	/**
	 * Disallow extra closing tags for components without children.
	 */
	'@stylistic/jsx-self-closing-comp': 'error',

	/**
	 * Enforce props alphabetical sorting.
	 */
	'@stylistic/jsx-sort-props': 'off',

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
};

export { jsxRules };
