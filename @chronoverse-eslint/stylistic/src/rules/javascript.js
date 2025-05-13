/**
 * JavaScript stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/packages/js
 * @type {import('eslint').Linter.Config['rules']}
 */
const javascript = {
	/**
	 * Enforce linebreaks after opening and before closing array brackets.
	 */
	'@stylistic/js/array-bracket-newline': [
		'error',
		{ minItems: 1, multiline: true },
	],

	/**
	 * Enforce consistent spacing inside array brackets.
	 */
	'@stylistic/js/array-bracket-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce line breaks after each array element.
	 */
	'@stylistic/js/array-element-newline': [
		'error',
		{ minItems: 1, multiline: true },
	],

	/**
	 * Require parentheses around arrow function arguments.
	 */
	'@stylistic/js/arrow-parens': [
		'error',
		'as-needed',
	],

	/**
	 * Enforce consistent spacing before and after the arrow in arrow functions.
	 */
	'@stylistic/js/arrow-spacing': [
		'error',
		{ after: true, before: true },
	],

	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before closing block.
	 */
	'@stylistic/js/block-spacing': [
		'error',
		'always',
	],

	/**
	 * Enforce consistent brace style for blocks.
	 */
	'@stylistic/js/brace-style': [
		'error',
		'1tbs',
		{ allowSingleLine: true },
	],

	/**
	 * Require or disallow trailing commas.
	 */
	'@stylistic/js/comma-dangle': [
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
	'@stylistic/js/comma-spacing': [
		'error',
		{ after: true, before: false },
	],

	/**
	 * Enforce consistent comma style.
	 */
	'@stylistic/js/comma-style': [
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

	/**
	 * Enforce consistent spacing inside computed property brackets.
	 */
	'@stylistic/js/computed-property-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce consistent newlines before and after dots.
	 */
	'@stylistic/js/dot-location': [
		'error',
		'property',
	],

	/**
	 * Require or disallow newline at the end of files.
	 */
	'@stylistic/js/eol-last': [
		'error',
		'always',
	],

	/**
	 *  Require or disallow spacing between function identifiers and their invocations.
	 */
	'@stylistic/js/function-call-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce consistent line breaks inside function parentheses.
	 */
	'@stylistic/js/function-paren-newline': [
		'error',
		'multiline-arguments',
	],

	/**
	 * Enforce consistent spacing around `*` operators in generator functions.
	 */
	'@stylistic/js/generator-star-spacing': [
		'error',
		{ after: false, before: true },
	],

	/**
	 * Enforce the location of arrow function bodies.
	 */
	'@stylistic/js/implicit-arrow-linebreak': 'off',

	/**
	 * Enforce consistent indentation.
	 */
	'@stylistic/js/indent': [
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
	 * Enforce the consistent use of either double or single quotes in JSX attributes.
	 */
	'@stylistic/js/jsx-quotes': [
		'error',
		'prefer-single',
	],

	/**
	 * Enforce consistent spacing between keys and values in object literal properties.
	 */
	'@stylistic/js/key-spacing': [
		'error',
		{ afterColon: true, beforeColon: false },
	],

	/**
	 * Enforce consistent spacing before and after keywords.
	 */
	'@stylistic/js/keyword-spacing': [
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
	 * Enforce position of line comments.
	 */
	'@stylistic/js/line-comment-position': [
		'off',
		{
			applyDefaultPatterns: true,
			ignorePattern: '',
			position: 'above',
		},
	],

	/**
	 * Enforce consistent linebreak style.
	 */
	'@stylistic/js/linebreak-style': [
		'error',
		'unix',
	],

	/**
	 * Require empty lines around comments.
	 */
	'@stylistic/js/lines-around-comment': 'off',

	/**
	 * Require or disallow an empty line between class members.
	 */
	'@stylistic/js/lines-between-class-members': [
		'error',
		'always',
		{ exceptAfterSingleLine: false },
	],

	/**
	 * Enforce a maximum line length.
	 */
	'@stylistic/js/max-len': [
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
	'@stylistic/js/max-statements-per-line': [
		'off',
		{ max: 1 },
	],

	/**
	 * Enforce a particular style for multiline comments
	 */
	'@stylistic/js/multiline-comment-style': [
		'off',
		'starred-block',
	],

	/**
	 * Enforce newlines between operands of ternary expressions
	 */
	'@stylistic/js/multiline-ternary': [
		'off',
		'never',
	],

	/**
	 * Enforce or disallow parentheses when invoking a constructor with no arguments
	 */
	'@stylistic/js/new-parens': 'error',

	/**
	 * Require a newline after each call in a method chain
	 */
	'@stylistic/js/newline-per-chained-call': [
		'error',
		{ ignoreChainWithDepth: 4 },
	],

	/**
	 * Disallow arrow functions where they could be confused with comparisons
	 */
	'@stylistic/js/no-confusing-arrow': [
		'error',
		{ onlyOneSimpleParam: true },
	],

	/**
	 * Disallow unnecessary parentheses
	 */
	'@stylistic/js/no-extra-parens': [
		'error',
		'all',
		{ ignoreJSX: 'multi-line' },
	],

	/**
	 * Disallow unnecessary semicolons
	 */
	'@stylistic/js/no-extra-semi': 'error',

	/**
	 * Disallow leading or trailing decimal points in numeric literals
	 */
	'@stylistic/js/no-floating-decimal': 'error',

	/**
	 * Disallow mixed binary operators
	 */
	'@stylistic/js/no-mixed-operators': [
		'error',
		{
			allowSamePrecedence: false,
			groups: [
				[
					'%',
					'**',
				],
				[
					'%',
					'+',
				],
				[
					'%',
					'-',
				],
				[
					'%',
					'*',
				],
				[
					'%',
					'/',
				],
				[
					'/',
					'*',
				],
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
				[
					'&&',
					'||',
				],
			],
		},
	],

	/**
	 * Disallow mixed spaces and tabs for indentation
	 */
	'@stylistic/js/no-mixed-spaces-and-tabs': 'error',

	/**
	 * Disallow multiple spaces
	 */
	'@stylistic/js/no-multi-spaces': 'error',

	/**
	 * Disallow multiple empty lines
	 */
	'@stylistic/js/no-multiple-empty-lines': [
		'error',
		{ max: 1, maxBOF: 0, maxEOF: 0 },
	],

	/**
	 * Disallow all tabs
	 */
	'@stylistic/js/no-tabs': 'off',

	/**
	 * Disallow trailing whitespace at the end of lines
	 */
	'@stylistic/js/no-trailing-spaces': [
		'error',
		{
			ignoreComments: false,
			skipBlankLines: false,
		},
	],

	/**
	 * Disallow whitespace before properties
	 */
	'@stylistic/js/no-whitespace-before-property': 'error',

	/**
	 * Enforce the location of single-line statements
	 */
	'@stylistic/js/nonblock-statement-body-position': [
		'error',
		'beside',
		{ overrides: {} },
	],

	/**
	 * Enforce consistent line breaks after opening and before closing braces
	 */
	'@stylistic/js/object-curly-newline': [
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
	'@stylistic/js/object-curly-spacing': [
		'error',
		'always',
	],

	/**
	 * Enforce placing object properties on separate lines
	 */
	'@stylistic/js/object-property-newline': [
		'error',
		{
			allowAllPropertiesOnSameLine: true,
		},
	],

	/**
	 * Require or disallow newlines around variable declarations
	 */
	'@stylistic/js/one-var-declaration-per-line': [
		'error',
		'always',
	],

	/**
	 * Enforce consistent linebreak style for operators
	 */
	'@stylistic/js/operator-linebreak': 'off',

	/**
	 * Require or disallow padding within blocks
	 */
	'@stylistic/js/padded-blocks': [
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

	/**
	 * Require or disallow padding lines between statements
	 */
	'@stylistic/js/padding-line-between-statements': 'off',

	/**
	 * Require quotes around object literal property names
	 */
	'@stylistic/js/quote-props': [
		'error',
		'as-needed',
		{ keywords: false, numbers: false, unnecessary: true },
	],

	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 */
	'@stylistic/js/quotes': [
		'error',
		'single',
		{ avoidEscape: true },
	],

	/**
	 * Enforce spacing between rest and spread operators and their expressions
	 */
	'@stylistic/js/rest-spread-spacing': [
		'error',
		'never',
	],

	/**
	 * Require or disallow semicolons instead of ASI
	 */
	'@stylistic/js/semi': [
		'error',
		'always',
	],

	/**
	 * Enforce consistent spacing before and after semicolons
	 */
	'@stylistic/js/semi-spacing': [
		'error',
		{ after: true, before: false },
	],

	/**
	 * Enforce location of semicolons
	 */
	'@stylistic/js/semi-style': [
		'error',
		'last',
	],

	/**
	 * Enforce consistent spacing before blocks
	 */
	'@stylistic/js/space-before-blocks': 'error',

	/**
	 * Enforce consistent spacing before `function` definition opening parenthesis
	 */
	'@stylistic/js/space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			asyncArrow: 'always',
			named: 'never',
		},
	],

	/**
	 * Enforce consistent spacing inside parentheses
	 */
	'@stylistic/js/space-in-parens': [
		'error',
		'never',
	],

	/**
	 * Require spacing around infix operators
	 */
	'@stylistic/js/space-infix-ops': 'error',

	/**
	 * Enforce consistent spacing before or after unary operators
	 */
	'@stylistic/js/space-unary-ops': [
		'error',
		{
			nonwords: false,
			overrides: {},
			words: true,
		},
	],

	/**
	 * Enforce consistent spacing after the `//` or `/*` in a comment
	 */
	'@stylistic/js/spaced-comment': [
		'error',
		'always',
		{
			block: {
				balanced: true,
				exceptions: [
					'-',
					'+',
				],
				markers: [
					'=',
					'!',
					':',
					'::',
				],
			},
			line: {
				exceptions: [
					'-',
					'+',
				],
				markers: [
					'=',
					'!',
					'/',
				],
			},
		},
	],

	/**
	 * Enforce spacing around colons of switch statements
	 */
	'@stylistic/js/switch-colon-spacing': [
		'error',
		{ after: true, before: false },
	],

	/**
	 * Require or disallow spacing around embedded expressions of template strings
	 */
	'@stylistic/js/template-curly-spacing': 'error',

	/**
	 * Require or disallow spacing between template tags and their literals
	 */
	'@stylistic/js/template-tag-spacing': [
		'error',
		'never',
	],

	/**
	 * Require parentheses around immediate `function` invocations
	 */
	'@stylistic/js/wrap-iife': [
		'error',
		'outside',
		{ functionPrototypeMethods: false },
	],

	/**
	 * Require parenthesis around regex literals
	 */
	'@stylistic/js/wrap-regex': 'off',

	/**
	 * Require or disallow spacing around the `*` in `yield*` expressions
	 */
	'@stylistic/js/yield-star-spacing': [
		'error',
		'after',
	],
};

export { javascript };
