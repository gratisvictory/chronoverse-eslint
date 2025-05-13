import { disables } from './disables.js';

/**
 * JavaScript functional rules for ESLint.
 * @see https://github.com/eslint-functional/eslint-plugin-functional
 * @type {import('eslint').Linter.Config['rules']}
 */
const javascript = {
	...disables,

	/**
	 * Disallow inheritance in classes.
	 */
	'functional/no-class-inheritance': 'error',

	/**
	 * Disallow mutable variables.
	 */
	'functional/no-let': [
		'error',
		{
			allowInForLoopInit: true,
		},
	],

	/**
	 * Disallow imperative loops.
	 */
	'functional/no-loop-statements': 'error',

	/**
	 * Disallow this access.
	 */
	'functional/no-this-expressions': 'off',

	/**
	 * Disallow try-catch[-finally] and try-finally patterns.
	 */
	'functional/no-try-statements': 'off',
};

export { javascript };
