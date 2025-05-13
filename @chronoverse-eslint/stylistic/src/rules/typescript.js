/**
 * TypeScript stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/packages/ts
 * @type {import('eslint').Linter.Config['rules']}
 */
const typescript = {
	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before closing block
	 */
	'@stylistic/ts/block-spacing': [
		'error',
		'always',
	],

	/**
	 * Enforce consistent brace style for blocks
	 */
	'@stylistic/ts/brace-style': [
		'error',
		'1tbs',
		{ allowSingleLine: true },
	],

	/**
	 * Require or disallow trailing commas
	 */
	'@stylistic/ts/comma-dangle': [
		'error',
		{
			arrays: 'always-multiline',
			enums: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
			generics: 'always-multiline',
			imports: 'always-multiline',
			objects: 'always-multiline',
			tuples: 'always-multiline',
		},
	],

	/**
	 * Enforce consistent spacing before and after commas
	 */
	'@stylistic/ts/comma-spacing': [
		'error',
		{ after: true, before: false },
	],

	/**
	 * Require or disallow spacing between function identifiers and their invocations
	 */
	'@stylistic/ts/function-call-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce consistent indentation
	 */
	'@stylistic/ts/indent': 'off',

	/**
	 * Enforce consistent spacing between property names and type annotations in types and interfaces
	 */
	'@stylistic/ts/key-spacing': [
		'error',
		{ afterColon: true, beforeColon: false },
	],

	/**
	 * Enforce consistent spacing before and after keywords.
	 */
	'@stylistic/ts/keyword-spacing': [
		'error',
		{
			after: true,
			before: true,
			overrides: {
				case: { after: true },
				return: { after: true },
				throw: { after: true },
			},
		},
	],

	/**
	 * Require empty lines around comments.
	 */
	'@stylistic/ts/lines-around-comment': 'off',

	/**
	 * Require or disallow an empty line between class members.
	 */
	'@stylistic/ts/lines-between-class-members': [
		'error',
		'always',
		{ exceptAfterSingleLine: false },
	],

	/**
	 * Require a specific member delimiter style for interfaces and type literals
	 */
	'@stylistic/ts/member-delimiter-style': [
		'error',
		{
			multiline: { delimiter: 'semi', requireLast: true },
			singleline: { delimiter: 'semi', requireLast: true },
		},
	],

	/**
	 * Disallow unnecessary parentheses
	 */
	'@stylistic/ts/no-extra-parens': [
		'error',
		'all',
		{ ignoreJSX: 'multi-line' },
	],

	/**
	 * Disallow unnecessary semicolons
	 */
	'@stylistic/ts/no-extra-semi': 'error',

	/**
	 * Enforce consistent line breaks after opening and before closing braces
	 */
	'@stylistic/ts/object-curly-newline': [
		'error',
		{
			ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
			ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
			ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
			ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
		},
	],

	/**
	 * Enforce consistent spacing inside braces
	 */
	'@stylistic/ts/object-curly-spacing': [
		'error',
		'always',
	],

	/**
	 * Enforce placing object properties on separate lines
	 */
	'@stylistic/ts/object-property-newline': [
		'error',
		{
			allowAllPropertiesOnSameLine: true,
		},
	],

	/**
	 * Require or disallow padding lines between statements
	 */
	'@stylistic/ts/padding-line-between-statements': 'off',

	/**
	 * Require quotes around object literal property names
	 */
	'@stylistic/ts/quote-props': [
		'error',
		'as-needed',
		{ keywords: false, numbers: false, unnecessary: true },
	],

	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 */
	'@stylistic/ts/quotes': [
		'error',
		'single',
	],

	/**
	 * Require or disallow semicolons instead of ASI
	 */
	'@stylistic/ts/semi': [
		'error',
		'always',
	],

	/**
	 * Enforce consistent spacing before and after semicolons
	 */
	'@stylistic/ts/semi-spacing': [
		'error',
		{ after: true, before: false },
	],

	/**
	 * Enforce consistent spacing before blocks
	 */
	'@stylistic/ts/space-before-blocks': 'error',

	/**
	 * Enforce consistent spacing before `function` definition opening parenthesis
	 */
	'@stylistic/ts/space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			asyncArrow: 'always',
			named: 'never',
		},
	],

	/**
	 * Require spacing around infix operators
	 */
	'@stylistic/ts/space-infix-ops': 'error',

	/**
	 * Require consistent spacing around type annotations
	 */
	'@stylistic/ts/type-annotation-spacing': 'error',
};

export { typescript };
