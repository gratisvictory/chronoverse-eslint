/**
 * Commas stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?filter=commas
 * @type {import('eslint').Linter.Config['rules']}
 */
const commasRules = {
	/**
	 * Require or disallow trailing commas.
	 */
	'@stylistic/comma-dangle': [
		'error',
		{
			arrays: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
			imports: 'always-multiline',
			objects: 'always-multiline',
		},
	],

	/**
	 * Enforce consistent spacing before and after commas.
	 */
	'@stylistic/comma-spacing': ['error', { after: true, before: false }],

	/**
	 * Enforce consistent comma style.
	 */
	'@stylistic/comma-style': [
		'error',
		'last',
		{
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				NewExpression: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
			},
		},
	],
};

export { commasRules };
