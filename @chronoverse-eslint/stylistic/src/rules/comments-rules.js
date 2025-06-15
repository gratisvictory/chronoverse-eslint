/**
 * Comments stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=comments
 * @type {import('eslint').Linter.Config['rules']}
 */
const commentsRules = {
	/**
	 * Enforce position of line comments.
	 */
	'@stylistic/line-comment-position': [
		'off',
		{
			applyDefaultPatterns: true,
			ignorePattern: '',
			position: 'above',
		},
	],

	/**
	 * Require empty lines around comments.
	 */
	'@stylistic/lines-around-comment': 'off',

	/**
	 * Enforce a particular style for multiline comments
	 */
	'@stylistic/multiline-comment-style': ['off', 'starred-block'],

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
};

export { commentsRules };
