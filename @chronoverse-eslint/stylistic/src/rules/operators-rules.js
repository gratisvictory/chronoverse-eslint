/**
 * Operators stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=operators
 * @type {import('eslint').Linter.Config['rules']}
 */
const operatorsRules = {
	/**
	 * Enforce consistent newlines before and after dots.
	 */
	'@stylistic/dot-location': ['error', 'property'],

	/**
	 * Indentation for binary operators.
	 */
	'@stylistic/indent-binary-ops': ['error', 'tab'],

	/**
	 * Enforce newlines between operands of ternary expressions
	 */
	'@stylistic/multiline-ternary': ['off', 'never'],

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
	 * Enforce consistent linebreak style for operators
	 */
	'@stylistic/operator-linebreak': 'off',

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
};

export { operatorsRules };
