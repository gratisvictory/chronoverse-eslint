/**
 * @see https://github.com/microsoft/tsdoc/tree/main/eslint-plugin
 * @type {import('eslint').Linter.Config['rules']}
 */
const tsdocRules = {
	/**
	 * Require TSDoc comments conform to the TSDoc specification.
	 */
	'tsdoc/syntax': 'error',
};

export { tsdocRules };
