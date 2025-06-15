/**
 * Quotes stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=quotes
 * @type {import('eslint').Linter.Config['rules']}
 */
const quotesRules = {
	/**
	 * Require quotes around object literal property names
	 */
	'@stylistic/quote-props': [
		'error',
		'as-needed',
		{ keywords: false, numbers: false, unnecessary: true },
	],

	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 */
	'@stylistic/quotes': [
		'error',
		'single',
		{ avoidEscape: true },
	],

	/**
	 * Enforce JSX indentation. Deprecated, use `indent` rule instead.
	 */
	'@stylistic/jsx-quotes': ['off', 'prefer-double'],
};

export { quotesRules };
