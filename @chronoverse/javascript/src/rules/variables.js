import { variablesNoUnusedVars } from '@chronoverse-eslint/shared';

const confusingBrowserGlobals = [
	'addEventListener',
	'blur',
	'close',
	'closed',
	'confirm',
	'defaultStatus',
	'defaultstatus',
	'event',
	'external',
	'find',
	'focus',
	'frameElement',
	'frames',
	'history',
	'innerHeight',
	'innerWidth',
	'length',
	'location',
	'locationbar',
	'menubar',
	'moveBy',
	'moveTo',
	'name',
	'onblur',
	'onerror',
	'onfocus',
	'onload',
	'onresize',
	'onunload',
	'open',
	'opener',
	'opera',
	'outerHeight',
	'outerWidth',
	'pageXOffset',
	'pageYOffset',
	'parent',
	'print',
	'removeEventListener',
	'resizeBy',
	'resizeTo',
	'screen',
	'screenLeft',
	'screenTop',
	'screenX',
	'screenY',
	'scroll',
	'scrollbars',
	'scrollBy',
	'scrollTo',
	'scrollX',
	'scrollY',
	'self',
	'status',
	'statusbar',
	'stop',
	'toolbar',
	'top',
];

const variablesNoRestrictedGlobals = [
	{
		name: '__filename',
		message: 'Use import.meta.url instead.',
	},
	{
		name: '__dirname',
		message: 'Not available in ESM.',
	},
	{
		name: 'exports',
		message: 'Not available in ESM.',
	},
	{
		name: 'module',
		message: 'Not available in ESM.',
	},
	{
		name: 'require',
		message: 'Use import instead.',
	},
	{
		name: 'Buffer',
		message: "Import 'Buffer' instead of using the global.",
	},
	{
		name: 'process',
		message: "Import 'process' instead of using the global.",
	},
	{
		name: 'isFinite',
		message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
	},
	{
		name: 'isNaN',
		message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
	},
	{
		name: 'global',
		message: 'Use `globalThis` instead.',
	},
	{
		name: 'self',
		message: 'Use `globalThis` instead.',
	},
	...confusingBrowserGlobals.map(g => ({
		name: g,
		message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
	})),
];

/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const variables = {
	/**
	 * Enforce or disallow variable initializations at definition.
	 */
	'init-declarations': 'off',
	/**
	 * Disallow the catch clause parameter name being the same as a variable in the outer scope.
	 */
	'no-catch-shadow': 'off',
	/**
	 * Disallow deleting variables.
	 */
	'no-delete-var': 'error',
	/**
	 * disallow labels that share a name with a variable
	 */
	'no-label-var': 'error',
	/**
	 * Disallow specific global variables.
	 */
	'no-restricted-globals': [
		'error',
		...variablesNoRestrictedGlobals,
	],
	/**
	 * Disallow variable shadowing.
	 */
	'no-shadow': 'error',
	/**
	 * Disallow shadowing of restricted names.
	 */
	'no-shadow-restricted-names': 'error',
	/**
	 * disallow use of undeclared variables unless mentioned in a /*global
	 */
	'no-undef': 'error',
	/**
	 * Disallow initializing to `undefined`.
	 */
	'no-undef-init': 'error',
	/**
	 * Disallow `undefined` as a variable name.
	 */
	'no-undefined': 'off',
	/**
	 * Disallow declaration of variables that are not used in the code.
	 */
	'no-unused-vars': [
		'error',
		...variablesNoUnusedVars,
	],
	/**
	 * Disallow use of variables before they are defined.
	 */
	'no-use-before-define': [
		'error',
		{ functions: false, classes: false, variables: true },
	],
};

export { variables };
