/**
 * Misc. stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=misc
 * @type {import('eslint').Linter.Config['rules']}
 */
const miscRules = {
	/**
	 * Enforce a maximum line length.
	 */
	'@stylistic/max-len': [
		'error',
		120,
		4,
		{
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		},
	],
	/**
	 * Enforce a maximum number of statements allowed per line.
	 */
	'@stylistic/max-statements-per-line': ['off', { max: 1 }],

	/**
	 * Require a specific member delimiter style for interfaces and type literals
	 */
	'@stylistic/member-delimiter-style': [
		'error',
		{
			multiline: { delimiter: 'semi', requireLast: true },
			singleline: { delimiter: 'semi', requireLast: true },
		},
	],

	/**
	 * Enforce the location of single-line statements
	 */
	'@stylistic/nonblock-statement-body-position': [
		'error',
		'beside',
		{ overrides: {} },
	],

	/**
	 * Require or disallow newlines around variable declarations
	 */
	'@stylistic/one-var-declaration-per-line': ['error', 'always'],

	/**
	 * Require or disallow padding within blocks
	 */
	'@stylistic/padded-blocks': [
		'error',
		{
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		},
		{
			allowSingleLineBlocks: true,
		},
	],
};

export { miscRules };
