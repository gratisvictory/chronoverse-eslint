/**
 * Disallow stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=disallow
 * @type {import('eslint').Linter.Config['rules']}
 */
const disallowRules = {
	/**
	 * Disallow arrow functions where they could be confused with comparisons
	 */
	'@stylistic/no-confusing-arrow': ['error', { onlyOneSimpleParam: true }],

	/**
	 * Disallow unnecessary parentheses
	 */
	'@stylistic/no-extra-parens': [
		'error',
		'all',
		{ ignoreJSX: 'multi-line' },
	],

	/**
	 * Disallow unnecessary semicolons
	 */
	'@stylistic/no-extra-semi': 'error',

	/**
	 * Disallow leading or trailing decimal points in numeric literals
	 */
	'@stylistic/no-floating-decimal': 'error',

	/**
	 * Disallow mixed binary operators
	 */
	'@stylistic/no-mixed-operators': [
		'error',
		{
			allowSamePrecedence: false,
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['/', '*'],
				[
					'&',
					'|',
					'<<',
					'>>',
					'>>>',
				],
				[
					'==',
					'!=',
					'===',
					'!==',
				],
				['&&', '||'],
			],
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
	 * Disallow multiple empty lines
	 */
	'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

	/**
	 * Disallow all tabs
	 */
	'@stylistic/no-tabs': 'off',

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
};

export { disallowRules };
