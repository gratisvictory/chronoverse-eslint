import { RULE_OPTIONS } from '@chronoverse-shared/utilities';

const MAX_PARAMS = 5;

/**
 * ESLint stylistic rules — focused on style, readability, and consistency.
 * @see https://eslint.org/docs/latest/rules/
 * @type {import('eslint').Linter.Config['rules']}
 */
const stylistic = {
	/**
	 * Enforce camelCase naming convention.
	 */
	camelcase: [
		'error',
		{ allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
	],

	/**
	 * Require function expressions to have a name if beneficial.
	 */
	'func-names': [
		'error',
		'as-needed',
	],

	/**
	 * Enforce function declarations to be written as expressions.
	 */
	'func-style': [
		'error',
		'expression',
	],

	/**
	 * Limit the number of parameters a function can have.
	 */
	'max-params': [
		'error',
		MAX_PARAMS,
	],

	/**
	 * Require constructor names to begin with a capital letter.
	 */
	'new-cap': [
		'error',
		{ capIsNew: false },
	],

	/**
	 * Require parentheses when invoking a constructor with no arguments.
	 * @deprecated
	 */
	'new-parens': 'off',

	/**
	 * Disallow use of the `Array` constructor.
	 */
	'no-array-constructor': 'error',

	/**
	 * Disallow use of bitwise operators like `|` and `&`.
	 */
	'no-bitwise': 'error',

	/**
	 * Disallow `if` as the only statement in an `else` block.
	 */
	'no-lonely-if': 'error',

	/**
	 * Disallow chained assignment expressions.
	 */
	'no-multi-assign': 'error',

	/**
	 * Disallow nested ternary expressions.
	 */
	'no-nested-ternary': 'error',

	/**
	 * Disallow unary operators `++` and `--`.
	 */
	'no-plusplus': 'error',

	/**
	 * Disallow confusing or discouraged syntax patterns.
	 * @see RULE_OPTIONS.stylisticNoRestrictedSyntax
	 */
	'no-restricted-syntax': [
		'error',
		...RULE_OPTIONS.stylisticNoRestrictedSyntax,
	],

	/**
	 * Disallow dangling underscores in identifiers (e.g., `_foo`), except for Node globals.
	 */
	'no-underscore-dangle': [
		'error',
		{
			allow: [
				'__dirname',
				'__filename',
			],
		},
	],

	/**
	 * Disallow ternary operators when simpler alternatives exist.
	 */
	'no-unneeded-ternary': 'error',

	/**
	 * Prefer object spread (`{...obj}`) over `Object.assign`.
	 */
	'prefer-object-spread': 'error',
};

export { stylistic };
