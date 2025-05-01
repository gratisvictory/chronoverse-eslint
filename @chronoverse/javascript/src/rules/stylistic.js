const stylisticNoRestrictedSyntax = [
	{
		message:
			'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
		selector: 'ForInStatement',
	},
	{
		message:
			'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
		selector: 'ForOfStatement',
	},
	{
		message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		selector: 'LabeledStatement',
	},
	{
		message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		selector: 'WithStatement',
	},
	{
		message: '`setInterval()` must be invoked with at least two arguments.',
		selector: "CallExpression[callee.name='setInterval'][arguments.length<2]",
	},
	{
		message: 'Use `new` keyword when throwing an `Error`.',
		selector: 'ThrowStatement > CallExpression[callee.name=/Error$/]',
	},
	{
		message: 'Use String.prototype.slice() or String.prototype.substring() instead of String.prototype.substr()',
		selector: "CallExpression[callee.property.name='substr']",
	},
	{
		message: '`setTimeout()` must be invoked with at least two arguments.',
		selector: "CallExpression[callee.name='setTimeout'][arguments.length<2]",
	},
	'TSEnumDeclaration[const=true]',
	'TSExportAssignment',
];

const MAX_PARAMS = 5;
/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const stylistic = {
	/**
	 * Require camel case names.
	 */
	camelcase: [
		'error',
		{ allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
	],
	/**
	 * Require function expressions to have a name.
	 */
	'func-names': [
		'error',
		'as-needed',
	],
	/**
	 * Require function declarations to be written as function expressions.
	 */
	'func-style': [
		'error',
		'expression',
	],
	/**
	 * Disallow functions with too many parameters.
	 */
	'max-params': [
		'error',
		MAX_PARAMS,
	],
	/**
	 * Require a capital letter for constructors.
	 */
	'new-cap': [
		'error',
		{ capIsNew: false },
	],
	/**
	 * Disallow the omission of parentheses when invoking a constructor with
	 * no arguments.
	 * @deprecated
	 */
	'new-parens': 'off',
	/**
	 * Disallow use of the Array constructor.
	 */
	'no-array-constructor': 'error',
	/**
	 *  Disallow use of bitwise operators.
	 */
	'no-bitwise': 'error',
	/**
	 * Disallow if as the only statement in an else block.
	 */
	'no-lonely-if': 'error',
	/**
	 * Disallow use of chained assignment expressions.
	 */
	'no-multi-assign': 'error',
	/**
	 * Disallow nested ternary expressions.
	 */
	'no-nested-ternary': 'error',
	/**
	 * Disallow use of `++` and `--`.
	 */
	'no-plusplus': 'error',
	/**
	 * Disallow use of restricted syntax.
	 */
	'no-restricted-syntax': [
		'error',
		...stylisticNoRestrictedSyntax,
	],
	/**
	 * Disallow ternary operators when simpler alternatives exist.
	 */
	'no-unneeded-ternary': 'error',
	/**
	 * Require use of an object spread over Object.assign.
	 */
	'prefer-object-spread': 'error',
};

export { stylistic };
