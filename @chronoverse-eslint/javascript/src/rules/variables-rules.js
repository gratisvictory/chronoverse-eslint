import { variablesNoRestrictedGlobals, variablesNoUnusedVariables } from '@chronoverse-shared/utilities/rule-options';

/**
 * ESLint rules related to variable declarations, shadowing, and usage.
 * @see https://eslint.org/docs/latest/rules/
 * @type {import('eslint').Linter.Config['rules']}
 */
const variablesRules = {
	/**
	 * Enforce or disallow variable initializations at definition.
	 */
	'init-declarations': 'off',

	/**
	 * Disallow catch clause variable shadowing outer scope variables.
	 */
	'no-catch-shadow': 'off',

	/**
	 * Disallow `delete` on variables.
	 */
	'no-delete-var': 'error',

	/**
	 * Disallow label names that shadow variables.
	 */
	'no-label-var': 'error',

	/**
	 * Disallow specific confusing or unsafe global variables.
	 * @see variablesNoRestrictedGlobals
	 */
	'no-restricted-globals': ['error', ...variablesNoRestrictedGlobals],

	/**
	 * Disallow variable declarations from shadowing variables in outer scope.
	 */
	'no-shadow': 'error',

	/**
	 * Disallow shadowing of names such as `undefined`, `NaN`, etc.
	 */
	'no-shadow-restricted-names': 'error',

	/**
	 * Disallow use of undeclared variables unless declared in a `/*global` comment.
	 */
	'no-undef': 'error',

	/**
	 * Disallow initializing variables to `undefined`.
	 */
	'no-undef-init': 'error',

	/**
	 * Allow usage of `undefined` as a variable name (not recommended, but allowed here).
	 */
	'no-undefined': 'off',

	/**
	 * Disallow unused variables.
	 * @see variablesNoUnusedVariables
	 */
	'no-unused-vars': ['error', ...variablesNoUnusedVariables],

	/**
	 * Disallow use of variables before they are defined.
	 */
	'no-use-before-define': [
		'error',
		{
			classes: false,
			functions: false,
			variables: true,
		},
	],
};

export { variablesRules };
