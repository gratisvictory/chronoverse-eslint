/**
 * Indent stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=intent
 * @type {import('eslint').Linter.Config['rules']}
 */
const indentRules = {
	/**
	 * Enforce consistent indentation.
	 */
	'@stylistic/indent': [
		'error',
		'tab',
		{
			ArrayExpression: 1,
			CallExpression: {
				arguments: 1,
			},
			flatTernaryExpressions: false,
			FunctionDeclaration: {
				body: 1,
				parameters: 1,
			},
			FunctionExpression: {
				body: 1,
				parameters: 1,
			},
			ignoreComments: false,
			ignoredNodes: [
				'JSXElement',
				'JSXElement > *',
				'JSXAttribute',
				'JSXIdentifier',
				'JSXNamespacedName',
				'JSXMemberExpression',
				'JSXSpreadAttribute',
				'JSXExpressionContainer',
				'JSXOpeningElement',
				'JSXClosingElement',
				'JSXFragment',
				'JSXOpeningFragment',
				'JSXClosingFragment',
				'JSXText',
				'JSXEmptyExpression',
				'JSXSpreadChild',
			],
			ImportDeclaration: 1,
			ObjectExpression: 1,
			outerIIFEBody: 1,
			SwitchCase: 1,
			VariableDeclarator: 1,
		},
	],

	/**
	 * Indentation for binary operators.
	 */
	'@stylistic/indent-binary-ops': ['error', 'tab'],

	/**
	 * Enforce JSX indentation. Deprecated, use `indent` rule instead.
	 * @deprecated
	 */
	'@stylistic/jsx-indent': ['off', 'tab'],

	/**
	 * Enforce props indentation in JSX.
	 */
	'@stylistic/jsx-indent-props': ['error', 'tab'],
};

export { indentRules };
