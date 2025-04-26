/**
 * @typedef {Object} NoUnusedVarsOption
 * @property {'all'} vars - Check all variables.
 * @property {string} varsIgnorePattern - Regex pattern to ignore certain variables.
 * @property {'after-used'} args - Check arguments after they are used.
 * @property {string} argsIgnorePattern - Regex pattern to ignore certain arguments.
 * @property {boolean} ignoreRestSiblings - Whether to ignore unused rest siblings.
 */

/**
 * Options for the `no-unused-vars` ESLint rule.
 * @type {NoUnusedVarsOption[]}
 */
export const variablesNoUnusedVars = [
	{
		args: 'after-used',
		argsIgnorePattern: '^_',
		ignoreRestSiblings: false,
		vars: 'all',
		varsIgnorePattern: '^_',
	},
];
