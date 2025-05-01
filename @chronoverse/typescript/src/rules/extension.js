import { variablesNoUnusedVariables } from '@chronoverse-eslint/shared';

/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const extension = {
	/**
	 * Require default parameters to be last.
	 */
	'@typescript-eslint/default-param-last': 'error',
	/**
	 * Disallow creation of functions within loops.
	 */
	'@typescript-eslint/no-loop-func': 'error',
	/**
	 *  Disallow variable declarations from shadowing variables declared in the
	 * outer scope.
	 */
	'@typescript-eslint/no-shadow': 'error',
	/**
	 * Disallow unused variables.
	 */
	'@typescript-eslint/no-unused-vars': [
		'error',
		...variablesNoUnusedVariables,
	],
	/**
	 * Disallow unnecessary constructors.
	 */
	'@typescript-eslint/no-useless-constructor': 'error',
};

export { extension };
