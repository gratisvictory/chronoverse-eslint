/**
 * ESLint rules related to Node.js environment and core modules.
 * Most of these are turned off due to ESM usage or modern practices.
 * @type {import('eslint').Linter.Config['rules']}
 */
const node = {
	/**
	 * Enforce return after a callback (e.g., in error-first callbacks).
	 * Often redundant with modern async/await.
	 */
	'callback-return': 'off',

	/**
	 * Require all `require()` calls to be at the top-level module scope.
	 * @deprecated in ESM — use `import` instead.
	 */
	'global-require': 'off',

	/**
	 * Require error handling in callbacks (e.g., `if (err) throw err`).
	 * Often superseded by try/catch and async/await.
	 */
	'handle-callback-err': 'off',

	/**
	 * Disallow use of the `Buffer` constructor (`new Buffer()`).
	 * @deprecated — modern APIs use `Buffer.from()` or `Buffer.alloc()`.
	 */
	'no-buffer-constructor': 'off',

	/**
	 * Disallow mixing `require` with other variable declarations.
	 * Not relevant in ESM.
	 */
	'no-mixed-requires': 'off',

	/**
	 * Disallow `new require(...)`.
	 * @deprecated — uncommon and misused pattern.
	 */
	'no-new-require': 'off',

	/**
	 * Disallow string concatenation with `__dirname` and `__filename`.
	 * @deprecated — use `path.join()` or `import.meta.url` in ESM.
	 */
	'no-path-concat': 'off',

	/**
	 * Disallow usage of `process.env`.
	 * Often turned off to allow environment-based config.
	 */
	'no-process-env': 'off',

	/**
	 * Disallow `process.exit()` — can be unsafe in larger apps or libraries.
	 * Off by default; use with caution.
	 */
	'no-process-exit': 'off',

	/**
	 * Disallow requiring specific modules.
	 * Used to ban legacy modules, but not needed here.
	 */
	'no-restricted-modules': 'off',

	/**
	 * Disallow synchronous methods like `fs.readFileSync()`.
	 * Usually discouraged in async apps, but allowed here.
	 */
	'no-sync': 'off',
};

export { node };
