/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const errors = {
	/**
	 * Enforce “for” loop update clause moving the counter in the right direction.
	 */
	'for-direction': 'error',
	/**
	 * Enforce return statements in getters.
	 */
	'getter-return': [
		'error',
		{ allowImplicit: true },
	],
	/**
	 * Disallow async functions in Promise executors.
	 */
	'no-async-promise-executor': 'error',
	/**
	 * Disallow `await` inside loops.
	 */
	'no-await-in-loop': 'error',
	/**
	 * Disallow comparisons to negative zero.
	 */
	'no-compare-neg-zero': 'error',
	/**
	 * Disallow assignment in conditional expressions.
	 */
	'no-cond-assign': [
		'error',
		'except-parens',
	],
	/**
	 * Disallow `console`.
	 */
	'no-console': [
		'warn',
		{
			allow: [
				'warn',
				'error',
			],
		},
	],
	/**
	 * Disallow expressions where the operation doesn't affect the value.
	 */
	'no-constant-binary-expression': 'error',
	/**
	 * Disallow constant conditions.
	 */
	'no-constant-condition': 'error',
	/**
	 * Disallow control characters in regular expressions.
	 */
	'no-control-regex': 'error',
	/**
	 * Disallow `debugger`.
	 */
	'no-debugger': 'error',
	/**
	 * Disallow duplicate arguments in function definitions.
	 */
	'no-dupe-args': 'error',
	/**
	 * Disallow duplicate conditions in if statements.
	 */
	'no-dupe-else-if': 'error',
	/**
	 * Disallow duplicate keys in object literals.
	 */
	'no-dupe-keys': 'error',
	/**
	 * Disallow duplicate cases in switch statements.
	 */
	'no-duplicate-case': 'error',
	/**
	 * Disallow empty blocks.
	 */
	'no-empty': 'error',
	/**
	 * Disallow empty character classes.
	 */
	'no-empty-character-class': 'error',
	/**
	 * Disallow reassignment of exception parameter.
	 */
	'no-ex-assign': 'error',
	/**
	 * Disallow unnecessary boolean casts.
	 */
	'no-extra-boolean-cast': 'error',
	/**
	 * Disallow unnecessary parentheses.
	 */
	'no-extra-parens': 'off',
	/**
	 * Disallow unnecessary semicolons.
	 * @deprecated
	 */
	'no-extra-semi': 'off',
	/**
	 * Disallow reassignment of function declarations.
	 */
	'no-func-assign': 'error',
	/**
	 * Disallow reassignment of imports.
	 */
	'no-import-assign': 'error',
	/**
	 * Disallow variable or function declarations in nested blocks.
	 */
	'no-inner-declarations': 'error',
	/**
	 * Disallow invalid regular expression strings.
	 */
	'no-invalid-regexp': 'error',
	/**
	 * Disallow irregular whitespace.
	 */
	'no-irregular-whitespace': 'error',
	/**
	 * Disallow loss of precision.
	 */
	'no-loss-of-precision': 'error',
	/**
	 * Disallow misleading character classes.
	 */
	'no-misleading-character-class': 'error',
	/**
	 * Disallow negation of the left operand of the `in` operator.
	 */
	'no-negated-in-lhs': 'off',
	/**
	 * Disallow `new` operators with the `Array` object.
	 */
	'no-new-native-nonconstructor': 'off',
	/**
	 * Disallow calls to `Object` as a constructor.
	 */
	'no-obj-calls': 'error',
	/**
	 * Disallow returning values from Promise executor functions.
	 */
	'no-promise-executor-return': 'error',
	/**
	 * Disallow direct usage of `__proto__`.
	 */
	'no-prototype-builtins': 'error',
	/**
	 * Disallow spaces around the `*` in generator functions.
	 */
	'no-regex-spaces': 'error',
	/**
	 * Disallow return statements in setters.
	 */
	'no-setter-return': 'error',
	/**
	 * Disallow sparse arrays.
	 */
	'no-sparse-arrays': 'error',
	/**
	 * Disallow template literal placeholder syntax in regular strings, as
	 * these are likely errors.
	 */
	'no-template-curly-in-string': 'error',
	/**
	 * Disallow multiline strings.
	 */
	'no-unexpected-multiline': 'error',
	/**
	 * Disallow unreachable code after a return, throw, continue, or break statement.
	 */
	'no-unreachable': 'error',
	/**
	 * Disallow unreachable code after a return, throw, continue, or break statement.
	 */
	'no-unreachable-loop': 'error',
	/**
	 * Disallow control flow statements in finally blocks.
	 */
	'no-unsafe-finally': 'error',
	/**
	 * Disallow negation of the left operand of the `in` operator.
	 */
	'no-unsafe-negation': [
		'error',
		{ enforceForOrderingRelations: true },
	],
	/**
	 * Disallow use of optional chaining in contexts where the undefined value is not allowed.
	 */
	'no-unsafe-optional-chaining': [
		'error',
		{ disallowArithmeticOperators: true },
	],
	/**
	 * Disallow unused private class members.
	 */
	'no-unused-private-class-members': 'error',
	/**
	 * Disallow backreferences in regular expressions.
	 */
	'no-useless-backreference': 'error',
	/**
	 * Disallow assignments that can lead to race conditions due to usage of await or yield.
	 */
	'require-atomic-updates': 'off',
	/**
	 * Disallow use of `NaN` as a condition.
	 */
	'use-isnan': 'error',
	/**
	 * Enforce the use of `typeof` operator instead of `instanceof`.
	 */
	'valid-typeof': [
		'error',
		{ requireStringLiterals: true },
	],
};

export { errors };
