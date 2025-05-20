/**
 * TypeScript functional rules for ESLint.
 * @see https://github.com/eslint-functional/eslint-plugin-functional
 * @type {import('eslint').Linter.Config['rules']}
 */
const typescript = {
	/**
	 * Enforce functional parameters.
	 */
	'functional/functional-parameters': [
		'error',
		{
			enforceParameterCount: false,
			overrides: [
				{
					options: {
						enforceParameterCount: {
							count: 'atLeastOne',
							ignoreGettersAndSetters: true,
							ignoreIIFE: true,
							ignoreLambdaExpression: true,
						},
					},
					specifiers: [
						{
							from: 'file',
						},
					],
				},
			],
		},
	],

	/**
	 * Enforce treating data as immutable.
	 */
	'functional/immutable-data': 'error',

	/**
	 *
	 */
	'functional/no-classes': 'error',

	/**
	 * Disallow inheritance in classes.
	 */
	'functional/no-class-inheritance': ['error'],

	/**
	 * Disallow conditional statements.
	 */
	'functional/no-conditional-statements': [
		'error',
		{
			allowReturningBranches: true,
		},
	],

	/**
	 * Disallow expression statements.
	 */
	'functional/no-expression-statements': 'error',

	/**
	 * Disallow mutable variables.
	 */
	'functional/no-let': [
		'error',
		{
			allowInForLoopInit: true,
		},
	],

	/**
	 * Disallow imperative loops.
	 */
	'functional/no-loop-statements': 'error',

	/**
	 * Restrict types so that only members of the same kind are allowed in them.
	 */
	'functional/no-mixed-types': 'error',

	/**
	 * Disallow functions that don't return anything.
	 */
	'functional/no-return-void': 'error',

	/**
	 * Disallow this access.
	 */
	'functional/no-this-expressions': 'off',

	/**
	 * Disallow throwing exceptions.
	 */
	'functional/no-throw-statements': [
		'error',
		{
			allowToRejectPromises: true,
		},
	],

	/**
	 * Disallow try-catch[-finally] and try-finally patterns.
	 */
	'functional/no-try-statements': 'off',

	/**
	 * Require function parameters to be typed as certain immutability
	 */
	'functional/prefer-immutable-types': [
		'error',
		{
			enforcement: 'None',
			overrides: [
				{
					options: {
						ignoreInferredTypes: true,
						parameters: {
							enforcement: 'ReadonlyShallow',
						},
					},
					specifiers: [
						{
							from: 'lib',
						},
						{
							from: 'package',
						},
					],
				},
				{
					options: {
						ignoreInferredTypes: true,
						parameters: {
							enforcement: 'ReadonlyDeep',
						},
					},
					specifiers: {
						from: 'file',
					},
				},
			],
		},
	],

	/**
	 * Enforce the immutability of types based on patterns.
	 */
	'functional/type-declaration-immutability': [
		'error',
		{
			rules: [
				{
					comparator: 1,
					identifiers: ['^I?Immutable.+'],
					immutability: 5,
				},
				{
					comparator: 1,
					identifiers: ['^I?ReadonlyDeep.+'],
					immutability: 4,
				},
				{
					comparator: 1,
					identifiers: ['^I?Readonly.+'],
					immutability: 3,
					suggestions: [
						{
							pattern: '^(Array|Map|Set)<(.+)>$',
							replace: 'Readonly$1<$2>',
						},
						{
							pattern: '^(.+)$',
							replace: 'Readonly<$1>',
						},
					],
				},
				{
					comparator: -1,
					identifiers: ['^I?Mutable.+'],
					immutability: 2,
					suggestions: [
						{
							pattern: '^Readonly(Array|Map|Set)<(.+)>$',
							replace: '$1<$2>',
						},
						{
							pattern: '^Readonly<(.+)>$',
							replace: '$1',
						},
					],
				},
			],
		},
	],

	/**
	 * Prefer property signatures over method signatures.
	 */
	'functional/prefer-property-signatures': 'error',

	/**
	 * Replaces `x => f(x)` with just `f`.
	 */
	'functional/prefer-tacit': 'warn',

	/**
	 * Require consistently using either `readonly` keywords or `Readonly<T>`
	 */
	'functional/readonly-type': 'error',
};

export { typescript };
