/**
 * ESLint rules focused on preventing runtime errors and unsafe code patterns.
 * @see https://eslint.org/docs/latest/rules/
 * @type {import('eslint').Linter.Config['rules']}
 */
const errors = {
	/** Loops & Control Flow */

	/**
	 * Enforce correct direction in `for` loop counters.
	 */
	'for-direction': 'error',

	/**
	 * Enforce return statements in getters.
	 */
	'getter-return': ['error', { allowImplicit: true }],

	/**
	 * Disallow `await` inside loops.
	 */
	'no-await-in-loop': 'error',

	/**
	 * Disallow unreachable code.
	 */
	'no-unreachable': 'error',

	/**
	 * Disallow unreachable code inside loops.
	 */
	'no-unreachable-loop': 'error',

	/**
	 * Disallow control flow statements like `return` in `finally` blocks.
	 */
	'no-unsafe-finally': 'error',

	/** Async & Promises */

	/**
	 * Disallow async functions used as Promise executor.
	 */
	'no-async-promise-executor': 'error',

	/**
	 * Disallow returning values from Promise executor functions.
	 */
	'no-promise-executor-return': 'error',

	/**
	 * Disallow assignments that might cause race conditions with `await` or `yield`.
	 */
	'require-atomic-updates': 'off',

	/** Logic & Comparison */

	/**
	 * Disallow assignments in conditional expressions.
	 */
	'no-cond-assign': ['error', 'except-parens'],

	/**
	 * Disallow comparisons to -0.
	 */
	'no-compare-neg-zero': 'error',

	/**
	 * Disallow constant binary expressions like `true && true`.
	 */
	'no-constant-binary-expression': 'error',

	/**
	 * Disallow constant conditions in if, loops, etc.
	 */
	'no-constant-condition': 'error',

	/**
	 * Disallow negating the left operand of `in`.
	 */
	'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

	/**
	 * Disallow unsafe usage of optional chaining (`?.`).
	 */
	'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

	/**
	 * Enforce `isNaN(x)` or `Number.isNaN(x)` instead of `x === NaN`.
	 */
	'use-isnan': 'error',

	/**
	 * Enforce valid `typeof` comparisons.
	 */
	'valid-typeof': ['error', { requireStringLiterals: true }],

	/** Regex & Strings */

	/**
	 * Disallow invalid regular expressions.
	 */
	'no-invalid-regexp': 'error',

	/**
	 * Disallow control characters in regex patterns.
	 */
	'no-control-regex': 'error',

	/**
	 * Disallow empty character classes in regex.
	 */
	'no-empty-character-class': 'error',

	/**
	 * Disallow regex patterns with misleading unicode character classes.
	 */
	'no-misleading-character-class': 'error',

	/**
	 * Disallow multiple spaces in regex.
	 */
	'no-regex-spaces': 'error',

	/**
	 * Disallow backreferences that don’t exist in regex.
	 */
	'no-useless-backreference': 'error',

	/** Objects & Imports */

	/**
	 * Disallow duplicate keys in object literals.
	 */
	'no-dupe-keys': 'error',

	/**
	 * Disallow calling `Object` as a constructor.
	 */
	'no-obj-calls': 'error',

	/**
	 * Disallow usage of `__proto__`.
	 */
	'no-prototype-builtins': 'error',

	/**
	 * Disallow reassignment of imports.
	 */
	'no-import-assign': 'error',

	/** Syntax Errors & Misuse */

	/**
	 * Disallow usage of `debugger`.
	 */
	'no-debugger': 'error',

	/**
	 * Disallow usage of `console`, except for `warn` and `error`.
	 */
	'no-console': [
		'warn',
		{
			allow: ['warn', 'error'],
		},
	],

	/**
	 * Disallow duplicate case labels in `switch` statements.
	 */
	'no-duplicate-case': 'error',

	/**
	 * Disallow duplicate arguments in function declarations.
	 */
	'no-dupe-args': 'error',

	/**
	 * Disallow duplicate conditions in `if` statements.
	 */
	'no-dupe-else-if': 'error',

	/**
	 * Disallow empty blocks.
	 */
	'no-empty': 'error',

	/**
	 * Disallow reassignment of exception parameter in catch blocks.
	 */
	'no-ex-assign': 'error',

	/**
	 * Disallow use of `NaN` in conditions.
	 */
	'no-func-assign': 'error',

	/**
	 * Disallow declaring variables or functions inside blocks.
	 */
	'no-inner-declarations': 'error',

	/**
	 * Disallow irregular or invisible whitespace.
	 */
	'no-irregular-whitespace': 'error',

	/**
	 * Disallow loss of floating-point precision.
	 */
	'no-loss-of-precision': 'error',

	/**
	 * Disallow sparse arrays like `[,,]`.
	 */
	'no-sparse-arrays': 'error',

	/**
	 * Disallow string templates used as strings (likely typo).
	 */
	'no-template-curly-in-string': 'error',

	/**
	 * Disallow multiline strings using backslashes.
	 */
	'no-unexpected-multiline': 'error',

	/**
	 * Disallow use of `setters` that return values.
	 */
	'no-setter-return': 'error',

	/**
	 * Disallow unused private class members.
	 */
	'no-unused-private-class-members': 'error',

	/** Optional / Deprecated */

	/**
	 * Disallow unnecessary parentheses.
	 * @deprecated — handled by Prettier.
	 */
	'no-extra-parens': 'off',

	/**
	 * Disallow unnecessary semicolons.
	 * @deprecated — handled by Prettier.
	 */
	'no-extra-semi': 'off',

	/**
	 * Disallow negation before `in` operator.
	 * @deprecated — replaced by `no-unsafe-negation`.
	 */
	'no-negated-in-lhs': 'off',

	/**
	 * Disallow `new Array()` and similar invalid usage.
	 * @deprecated — ESM and bundlers handle this better.
	 */
	'no-new-native-nonconstructor': 'off',
};

export { errors };
