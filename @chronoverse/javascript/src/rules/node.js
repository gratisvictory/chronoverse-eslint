/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const node = {
	/**
	 * Enforce return after a callback.
	 */
	'callback-return': 'off',
	/**
	 * Require all requires be top-level.
	 * @deprecated
	 */
	'global-require': 'off',
	/**
	 * Handle callback errors.
	 */
	'handle-callback-err': 'off',
	/**
	 * Disallow the `Buffer` constructor.
	 * @deprecated
	 */
	'no-buffer-constructor': 'off',
	/**
	 * Disallow mixing regular variable and require declarations.
	 */
	'no-mixed-requires': 'off',
	/**
	 * Disallow `new require`.
	 * @deprecated
	 */
	'no-new-require': 'off',
	/**
	 * Disallow string concatenation with `__dirname` and `__filename`.
	 * @deprecated
	 */
	'no-path-concat': 'off',
	/**
	 * Disallow use of `process.env`.
	 */
	'no-process-env': 'off',
	/**
	 * Disallow use of `process.exit`.
	 */
	'no-process-exit': 'off',
	/**
	 * Disallow use of `require`.
	 */
	'no-restricted-modules': 'off',
	/**
	 * Disallow use of `sync` methods.
	 */
	'no-sync': 'off',
};

export { node };
