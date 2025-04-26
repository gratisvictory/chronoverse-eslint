const bestPracticesNoRestrictedProperties = [
	{
		message: 'Use `assert.deepStrictEqual()`.',
		object: 'assert',
		property: 'deepEqual',
	},
	{
		message: 'Use `assert.notDeepStrictEqual()`.',
		object: 'assert',
		property: 'notDeepEqual',
	},
	{
		message: 'Use `assert.strictEqual()` rather than `assert.equal()`.',
		object: 'assert',
		property: 'equal',
	},
	{
		message: 'Use `assert.notStrictEqual()` rather than `assert.notEqual()`.',
		object: 'assert',
		property: 'notEqual',
	},
	{
		message: 'arguments.callee is deprecated',
		object: 'arguments',
		property: 'callee',
	},
	{
		message: 'Please use Number.isFinite instead',
		object: 'global',
		property: 'isFinite',
	},
	{
		message: 'Please use Number.isFinite instead',
		object: 'self',
		property: 'isFinite',
	},
	{
		message: 'Please use Number.isFinite instead',
		object: 'window',
		property: 'isFinite',
	},
	{
		message: 'Please use Number.isNaN instead',
		object: 'global',
		property: 'isNaN',
	},
	{
		message: 'Please use Number.isNaN instead',
		object: 'self',
		property: 'isNaN',
	},
	{
		message: 'Please use Number.isNaN instead',
		object: 'window',
		property: 'isNaN',
	},
	{
		message: 'Please use Object.defineProperty instead.',
		property: '__defineGetter__',
	},
	{
		message: 'Please use Object.defineProperty instead.',
		property: '__defineSetter__',
	},
	{
		message: 'Use `globalThis.crypto`.',
		property: 'webcrypto',
	},
	{
		message: 'Use the exponentiation operator (**) instead.',
		object: 'Math',
		property: 'pow',
	},
	{
		message: 'Use `Object.defineProperty` instead.',
		property: '__defineGetter__',
	},
	{
		message: 'Use `Object.defineProperty` instead.',
		property: '__defineSetter__',
	},
	{
		message: 'Use `Object.getOwnPropertyDescriptor` instead.',
		property: '__lookupGetter__',
	},
	{
		message: 'Use `Object.getOwnPropertyDescriptor` instead.',
		property: '__lookupSetter__',
	},
];

/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const bestPractice = {
	/*
	 * Require return statements in array methods callbacks.
	 */
	'array-callback-return': [
		'error',
		{ allowImplicit: true },
	],
	/**
	 * Treat `var` statements as if they were block scoped.
	 */
	'block-scoped-var': 'error',
	/*
	 * Enforce the use of `this` in class methods.
	 */
	'class-methods-use-this': 'error',
	/*
	 * specify the maximum cyclomatic complexity allowed in a program.
	 */
	complexity: 'off',
	/**
	 * Require return statements to either always or never specify values.
	 */
	'consistent-return': 'error',
	/*
	 * Require curly braces for multiline blocks.
	 */
	curly: [
		'error',
		'multi-line',
	],
	/**
	 * require default case in switch statements.
	 */
	'default-case': [
		'error',
		{ commentPattern: '^no default$' },
	],
	/*
	 * Require default clauses in switch statements to be last (if used).
	 */
	'default-case-last': 'error',
	/*
	 * Require default parameters to be last.
	 */
	'default-param-last': 'error',
	/**
	 * Enforces consistent newlines before or after dots.
	 * @deprecated
	 */
	'dot-location': 'off',
	/**
	 * Encourages use of dot notation whenever possible.
	 */
	'dot-notation': [
		'error',
		{ allowKeywords: true },
	],
	/*
	 * Require triple equals (`===` and `!==`).
	 */
	eqeqeq: [
		'error',
		'always',
	],
	/**
	 * Require grouped accessor pairs in object literals and classes.
	 */
	'grouped-accessor-pairs': 'error',
	/**
	 * Make sure for-in loops have an if statement.
	 */
	'guard-for-in': 'error',
	/**
	 * Enforce a maximum number of classes per file.
	 */
	'max-classes-per-file': [
		'error',
		1,
	],
	/**
	 * Disallow use of `alert()`.
	 */
	'no-alert': 'error',
	/**
	 * Disallow use of `arguments.caller` and `arguments.callee`.
	 */
	'no-caller': 'error',
	/**
	 * Disallow lexical declarations in case/default clauses.
	 */
	'no-case-declarations': 'error',
	/**
	 * Disallow return statements in constructors.
	 */
	'no-constructor-return': 'error',
	/**
	 * Disallow division operators explicitly at beginning of regular expression.
	 */
	'no-div-regex': 'off',
	/**
	 * Disallow using an `else` if the `if` block contains a return.
	 */
	'no-else-return': [
		'error',
		{ allowElseIf: false },
	],
	/**
	 * Disallow empty functions, except for standalone funcs/arrows.
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
	 * Disallow empty static blocks
	 */
	'no-empty-static-block': 'off',
	/**
	 * Disallow comparisons to null without a type-checking operator.
	 */
	'no-eq-null': 'off',
	/**
	 * Disallow use of `eval()`.
	 */
	'no-eval': 'error',
	/**
	 * Disallow adding to native prototypes.
	 */
	'no-extend-native': 'error',
	/**
	 * Disallow unnecessary function binding.
	 */
	'no-extra-bind': 'error',
	/**
	 * Disallow unnecessary labels.
	 */
	'no-extra-label': 'error',
	/**
	 * Disallow fallthrough of case statements.
	 */
	'no-fallthrough': [
		'error',
		{ commentPattern: '.*intentional fallthrough.*' },
	],
	/**
	 * Disallow floating decimals
	 * @deprecated
	 */
	'no-floating-decimal': 'off',
	/**
	 * Disallow reassignments of native objects or read-only globals.
	 */
	'no-global-assign': [
		'error',
		{ exceptions: [] },
	],
	/**
	 *  Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`.
	 */
	'no-implicit-coercion': [
		'error',
		{ allow: ['!!'] },
	],
	/**
	 * disallow var and named functions in global scope
	 */
	'no-implicit-globals': 'off',
	/**
	 * Disallow use of `eval()`-like methods.
	 */
	'no-implied-eval': 'error',
	/**
	 * Disallow use of `this` keywords outside of classes or class-like objects.
	 */
	'no-invalid-this': 'off',
	/**
	 * Disallow usage of `__iterator__` property.
	 */
	'no-iterator': 'error',
	/**
	 * Disallow use of labels for anything other than loops and switches.
	 */
	'no-labels': [
		'error',
		{ allowLoop: false, allowSwitch: false },
	],
	/**
	 * Disallow unnecessary nested blocks.
	 */
	'no-lone-blocks': 'error',
	/**
	 * Disallow functions inside loops.
	 */
	'no-loop-func': 'error',
	/**
	 * Disallow magic numbers.
	 */
	'no-magic-numbers': [
		'off',
		{
			detectObjects: false,
			enforceConst: true,
			ignore: [],
			ignoreArrayIndexes: true,
		},
	],
	/**
	 * Disallow multiple spaces.
	 * @deprecated
	 */
	'no-multi-spaces': 'off',
	/**
	 * Disallow use of multiline strings.
	 */
	'no-multi-str': 'error',
	/**
	 * @deprecated in favor of no-global-assign
	 */
	'no-native-reassign': 'off',
	/**
	 * Disallow `new` for side effects.
	 */
	'no-new': 'error',
	/**
	 * Disallow `Function` constructor.
	 */
	'no-new-func': 'error',
	/**
	 * Disallow primitive wrapper instances, such as `new String('foo')`.
	 */
	'no-new-wrappers': 'error',
	/**
	 * Disallow \8 and \9 escape sequences in string literals
	 */
	'no-nonoctal-decimal-escape': 'error',
	/**
	 * Disallow calls to the Object constructor without an argument
	 */
	'no-object-constructor': 'off',
	/**
	 * disallow use of (old style) octal literals
	 */
	'no-octal': 'error',
	/**
	 * Disallow reassignment of function parameters.
	 */
	'no-octal-escape': 'error',
	/**
	 * Disallow reassignment of function parameters.
	 */
	'no-param-reassign': [
		'error',
		{
			ignorePropertyModificationsFor: [
				'acc' /* for reduce accumulators */,
				'accumulator' /* for reduce accumulators */,
				'e' /* for e.returnvalue */,
				'ctx' /* for Koa routing */,
				'context' /* for Koa routing */,
				'req' /* for Express requests */,
				'request' /* for Express requests */,
				'res' /* for Express responses */,
				'response' /* for Express responses */,
				'$scope' /* for Angular 1 scopes */,
				'staticContext' /* for ReactRouter context */,
			],
			props: true,
		},
	],
	/**
	 * Disallow usage of the deprecated `__proto__` property.
	 */
	'no-proto': 'error',
	/**
	 * Disallow declaring the same variable more than once.
	 */
	'no-redeclare': 'error',
	/**
	 * Disallow certain object properties.
	 */
	'no-restricted-properties': [
		'error',
		...bestPracticesNoRestrictedProperties,
	],
	/**
	 * Disallow assignment in `return` statement.
	 */
	'no-return-assign': [
		'error',
		'always',
	],
	/**
	 * Disallow redundant `return await`
	 * @deprecated
	 */
	'no-return-await': 'off',
	/**
	 * Disallow usage of `javascript:` pseudo protocol.
	 */
	'no-script-url': 'error',
	/**
	 * Disallow self assignment.
	 */
	'no-self-assign': [
		'error',
		{
			props: true,
		},
	],
	/**
	 * Disallow comparisons where both sides are exactly the same.
	 */
	'no-self-compare': 'error',
	/**
	 * Disallow comma operator.
	 */
	'no-sequences': 'error',
	/**
	 * Restrict what can be thrown as an exception
	 */
	'no-throw-literal': 'error',
	/**
	 * Disallow unmodified conditions of loops.
	 */
	'no-unmodified-loop-condition': 'off',
	/**
	 * Disallow usage of expressions in statement position.
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
	 * Disallow unnecessary `.call()` and `.apply()`.
	 */
	'no-useless-call': 'error',
	/**
	 * Disallow unnecessary catch clauses.
	 */
	'no-useless-catch': 'error',
	/**
	 * Disallow unnecessary concatenation of strings.
	 */
	'no-useless-concat': 'error',
	/**
	 * Disallow unnecessary string escaping.
	 */
	'no-useless-escape': 'error',
	/**
	 * Disallow redundant return statements.
	 */
	'no-useless-return': 'error',
	/**
	 * Disallow usage of `void`.
	 */
	'no-void': 'error',
	/**
	 * Disallow usage of `TODO` and `FIXME` comments.
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
	 * Suggest using named capture group in regular expression.
	 */
	'prefer-named-capture-group': 'off',
	/**
	 * Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call().
	 */
	'prefer-object-has-own': 'error',
	/**
	 * Require using Error objects as Promise rejection reasons.
	 */
	'prefer-promise-reject-errors': [
		'error',
		{ allowEmptyReject: true },
	],
	/**
	 * Require using regular expressions instead of String.prototype.match and RegExp.prototype.exec.
	 */
	'prefer-regex-literals': [
		'error',
		{
			disallowRedundantWrapping: true,
		},
	],
	/**
	 * Require use of the second argument for parseInt()
	 */
	radix: 'error',
	/**
	 * Require `await` in `async function` (note: this is a horrible rule that should never be used)
	 */
	'require-await': 'off',
	/**
	 * Enforce the use of u flag on RegExp.
	 */
	'require-unicode-regexp': 'off',
	/**
	 * Requires to declare all vars on top of their containing scope.
	 */
	'vars-on-top': 'error',
	/**
	 * Require immediate function invocation to be wrapped in parentheses.
	 * @deprecated
	 */
	'wrap-iife': 'off',
	/**
	 * Disallow "Yoda conditions", ensuring the comparison.
	 */
	yoda: 'error',
};

export { bestPractice };
