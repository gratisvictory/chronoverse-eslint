import { bestPracticesNoRestrictedProperties } from '@chronoverse-shared/utilities/rule-options';

/**
 * ESLint rules enforcing best practices in JS: control flow, safety, consistency, and code clarity.
 * Many rules are turned off when handled by modern tooling (e.g. Prettier) or TypeScript.
 * @see https://eslint.org/docs/latest/rules/
 * @type {import('eslint').Linter.Config['rules']}
 */
const bestPractice = {
	/**
	 * Enforce return statements in array method callbacks (e.g., map, filter).
	 */
	'array-callback-return': ['error', { allowImplicit: true }],

	/**
	 * Treat `var` as block-scoped (discouraged, prefer `let`/`const`).
	 */
	'block-scoped-var': 'error',

	/**
	 * Enforce `this` usage in class methods.
	 */
	'class-methods-use-this': 'error',

	/**
	 * Limit cyclomatic complexity (disabled — use in code style enforcement).
	 */
	complexity: 'off',

	/**
	 * Enforce consistent return behavior in functions.
	 */
	'consistent-return': 'error',

	/**
	 * Require curly braces for multi-line blocks.
	 */
	curly: ['error', 'multi-line'],

	/**
	 * Require a `default` case in `switch` statements.
	 */
	'default-case': ['error', { commentPattern: '^no default$' }],

	/**
	 * Require `default` clause to be last in `switch`.
	 */
	'default-case-last': 'error',

	/**
	 * Require default parameters to be last.
	 */
	'default-param-last': 'error',

	/**
	 * @deprecated — spacing handled by Prettier.
	 */
	'dot-location': 'off',

	/**
	 * Prefer dot notation when accessing object properties.
	 */
	'dot-notation': ['error', { allowKeywords: true }],

	/**
	 * Require strict equality operators (`===`, `!==`).
	 */
	eqeqeq: ['error', 'always'],

	/**
	 * Group getters/setters in class/object declarations.
	 */
	'grouped-accessor-pairs': 'error',

	/**
	 * Ensure `for-in` loops are filtered with `hasOwnProperty`.
	 */
	'guard-for-in': 'error',

	/**
	 * Limit number of classes per file.
	 */
	'max-classes-per-file': ['error', 1],

	/**
	 * Disallow `alert`, `confirm`, `prompt`.
	 */
	'no-alert': 'error',

	/**
	 * Disallow `arguments.callee` and `arguments.caller`.
	 */
	'no-caller': 'error',

	/**
	 * Disallow lexical declarations in `case`/`default` blocks.
	 */
	'no-case-declarations': 'error',

	/**
	 * Disallow `return` from constructor functions.
	 */
	'no-constructor-return': 'error',

	/**
	 * Disallow regular expressions starting with division operator.
	 */
	'no-div-regex': 'off',

	/**
	 * Disallow `else` after `return`.
	 */
	'no-else-return': ['error', { allowElseIf: false }],

	/**
	 * Disallow empty functions (except arrow, methods, etc.).
	 */
	'no-empty-function': [
		'error',
		{
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			],
		},
	],

	/**
	 * Disallow empty destructuring patterns.
	 */
	'no-empty-pattern': 'error',

	/**
	 * Disallow empty static blocks (ES2022).
	 */
	'no-empty-static-block': 'off',

	/**
	 * Disallow `== null` comparisons.
	 */
	'no-eq-null': 'off',

	/**
	 * Disallow `eval()`.
	 */
	'no-eval': 'error',

	/**
	 * Disallow extending native objects.
	 */
	'no-extend-native': 'error',

	/**
	 * Disallow unnecessary `.bind()` calls.
	 */
	'no-extra-bind': 'error',

	/**
	 * Disallow unnecessary labels.
	 */
	'no-extra-label': 'error',

	/**
	 * Disallow fallthrough in `switch` statements.
	 */
	'no-fallthrough': ['error', { commentPattern: '.*intentional fallthrough.*' }],

	/**
	 * @deprecated — handled by Prettier.
	 */
	'no-floating-decimal': 'off',

	/**
	 * Disallow global reassignments (e.g., `undefined = 123`).
	 */
	'no-global-assign': ['error', { exceptions: [] }],

	/**
	 * Disallow implicit type coercion (e.g., `+foo`, `!!bar`).
	 */
	'no-implicit-coercion': [
		'error',
		{
			allow: ['!!'],
		},
	],

	/**
	 * Disallow `var`/function declarations in global scope.
	 */
	'no-implicit-globals': 'off',

	/**
	 * Disallow `setTimeout(fn, 0)`-style evals.
	 */
	'no-implied-eval': 'error',

	/**
	 * Disallow `this` outside class context.
	 */
	'no-invalid-this': 'off',

	/**
	 * Disallow `__iterator__` (non-standard).
	 */
	'no-iterator': 'error',

	/**
	 * Disallow labels except in loops/switches.
	 */
	'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

	/**
	 * Disallow unnecessary nested blocks.
	 */
	'no-lone-blocks': 'error',

	/**
	 * Disallow functions inside loops.
	 */
	'no-loop-func': 'error',

	/**
	 * Disable rule enforcing no magic numbers.
	 */
	'no-magic-numbers': ['off', { enforceConst: true, ignoreArrayIndexes: true }],

	/**
	 * @deprecated — handled by Prettier.
	 */
	'no-multi-spaces': 'off',

	/**
	 * Disallow multiline strings using line continuation.
	 */
	'no-multi-str': 'error',

	/**
	 * @deprecated — replaced by `no-global-assign`.
	 */
	'no-native-reassign': 'off',

	/**
	 * Disallow `new` used only for side effects.
	 */
	'no-new': 'error',

	/**
	 * Disallow `Function` constructor.
	 */
	'no-new-func': 'error',

	/**
	 * Disallow `new Boolean`, `new String`, etc.
	 */
	'no-new-wrappers': 'error',

	/**
	 * Disallow `\8` and `\9` escape sequences.
	 */
	'no-nonoctal-decimal-escape': 'error',

	/**
	 * Disallow `new Object()` with no args.
	 */
	'no-object-constructor': 'off',

	/**
	 * Disallow old-style octal literals (`0755`).
	 */
	'no-octal': 'error',

	/**
	 * Disallow octal escape sequences.
	 */
	'no-octal-escape': 'error',

	/**
	 * Disallow reassignment of function parameters.
	 */
	'no-param-reassign': [
		'error',
		{
			ignorePropertyModificationsFor: [
				'acc',
				'accumulator',
				'e',
				'ctx',
				'context',
				'req',
				'request',
				'res',
				'response',
				'$scope',
				'staticContext',
			],
			props: true,
		},
	],

	/**
	 * Disallow use of deprecated `__proto__`.
	 */
	'no-proto': 'error',

	/**
	 * Disallow redeclaring variables.
	 */
	'no-redeclare': 'error',

	/**
	 * Disallow certain object properties (e.g., `assert.equal`).
	 * @see bestPracticesNoRestrictedProperties
	 */
	'no-restricted-properties': ['error', ...bestPracticesNoRestrictedProperties],

	/**
	 * Disallow assignment in return statements.
	 */
	'no-return-assign': ['error', 'always'],

	/**
	 * @deprecated — often incorrect in async functions.
	 */
	'no-return-await': 'off',

	/**
	 * Disallow `javascript:` URLs.
	 */
	'no-script-url': 'error',

	/**
	 * Disallow self-assignment.
	 */
	'no-self-assign': ['error', { props: true }],

	/**
	 * Disallow self-comparisons (`a === a`).
	 */
	'no-self-compare': 'error',

	/**
	 * Disallow comma operator.
	 */
	'no-sequences': 'error',

	/**
	 * Disallow throwing non-Error objects.
	 */
	'no-throw-literal': 'error',

	/**
	 * Disallow unmodified conditions in loops.
	 */
	'no-unmodified-loop-condition': 'off',

	/**
	 * Disallow unused expressions.
	 */
	'no-unused-expressions': [
		'error',
		{
			allowShortCircuit: false,
			allowTaggedTemplates: false,
			allowTernary: false,
		},
	],

	/**
	 * Disallow unused labels.
	 */
	'no-unused-labels': 'error',

	/**
	 * Disallow unnecessary usage of `.call()` and `.apply()`.
	 */
	'no-useless-call': 'error',

	/**
	 * Disallow unnecessary `catch` blocks.
	 */
	'no-useless-catch': 'error',

	/**
	 * Disallow unnecessary string concatenation.
	 */
	'no-useless-concat': 'error',

	/**
	 * Disallow unnecessary escaping in strings.
	 */
	'no-useless-escape': 'error',

	/**
	 * Disallow redundant `return` statements.
	 */
	'no-useless-return': 'error',

	/**
	 * Disallow use of `void` operator.
	 */
	'no-void': 'error',

	/**
	 * Disallow `TODO`, `FIXME`, and similar comments.
	 */
	'no-warning-comments': [
		'off',
		{
			location: 'start',
			terms: [
				'todo',
				'fixme',
				'xxx',
			],
		},
	],

	/**
	 * Disallow `with` statements.
	 */
	'no-with': 'error',

	/**
	 * Suggest using named capture groups in regex.
	 */
	'prefer-named-capture-group': 'off',

	/**
	 * Prefer `Object.hasOwn()` over `hasOwnProperty.call()`.
	 */
	'prefer-object-has-own': 'error',

	/**
	 * Require `Error` objects in Promise rejections.
	 */
	'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

	/**
	 * Prefer regex literals over `RegExp` constructor.
	 */
	'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

	/**
	 * Require radix argument in `parseInt()`.
	 */
	radix: 'error',

	/**
	 * Disallow async functions without `await`.
	 */
	'require-await': 'off',

	/**
	 * Require the `u` flag on regular expressions.
	 */
	'require-unicode-regexp': 'off',

	/**
	 * Require variables to be declared at the top of their scope.
	 */
	'vars-on-top': 'error',

	/**
	 * @deprecated — formatting handled by Prettier.
	 */
	'wrap-iife': 'off',

	/**
	 * Disallow "Yoda" conditions (`if (42 === x)`).
	 */
	yoda: 'error',
};

export { bestPractice };
