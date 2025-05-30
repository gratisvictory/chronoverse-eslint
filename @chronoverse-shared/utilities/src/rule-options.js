/**
 * @typedef {Object} NoUnusedVarsOption
 * @property {'all'} vars - Check all variables.
 * @property {string} varsIgnorePattern - Regex pattern to ignore certain variables.
 * @property {'after-used'} args - Check arguments after they are used.
 * @property {string} argsIgnorePattern - Regex pattern to ignore certain arguments.
 * @property {boolean} ignoreRestSiblings - Whether to ignore unused rest siblings.
 */

/**
 * Restricted global variable entry.
 * @typedef {Object} RestrictedGlobal
 * @property {string} name - The name of the restricted global variable.
 * @property {string} message - A message explaining why it's restricted and what to use instead.
 */

/**
 * @typedef {Object} RestrictedProperty
 * @property {string} [object] - Object name (e.g., "assert", "arguments", "window").
 * @property {string} property - Property name to restrict (e.g., "equal", "callee").
 * @property {string} message - Explanation or alternative suggestion.
 */

/**
 * Variables that are restricted when using ESM.
 * @type {RestrictedGlobal[]}
 */
const esmRestrictedGlobals = [
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
];

/**
 * Node.js globals that should be explicitly imported.
 * @type {RestrictedGlobal[]}
 */
const nodeRestrictedGlobals = [
	{
		name: 'Buffer',
		message: "Import 'Buffer' instead of using the global.",
	},
	{
		name: 'process',
		message: "Import 'process' instead of using the global.",
	},
];

/**
 * JS built-ins that have safer alternatives.
 * @type {RestrictedGlobal[]}
 */
const standardLibraryReplacements = [
	{
		name: 'isFinite',
		message: 'Use Number.isFinite instead. https://github.com/airbnb/javascript#standard-library--isfinite',
	},
	{
		name: 'isNaN',
		message: 'Use Number.isNaN instead. https://github.com/airbnb/javascript#standard-library--isnan',
	},
	{
		name: 'global',
		message: 'Use `globalThis` instead.',
	},
	{
		name: 'self',
		message: 'Use `globalThis` instead.',
	},
];

/**
 * Confusing or dangerous browser globals.
 * These can conflict with local variables and cause bugs.
 * Inspired by create-react-app.
 * @see https://github.com/facebook/create-react-app/blob/main/packages/confusing-browser-globals/README.md
 * @type {RestrictedGlobal[]}
 */
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
].map(name => ({
	name,
	message: `Use window.${name} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
}));

/**
 * Restricted usage of deprecated or discouraged properties.
 * Used in the `no-restricted-properties` ESLint rule.
 * @type {RestrictedProperty[]}
 */
const RESTRICTED_PROPERTIES = [
	/** Assert API – prefer strict variants */
	{
		message: 'Use assert.strictEqual instead of assert.equal.',
		object: 'assert',
		property: 'equal',
	},
	{
		message: 'Use assert.notStrictEqual instead of assert.notEqual.',
		object: 'assert',
		property: 'notEqual',
	},
	{
		message: 'Use assert.deepStrictEqual instead of assert.deepEqual.',
		object: 'assert',
		property: 'deepEqual',
	},
	{
		message: 'Use assert.notDeepStrictEqual instead of assert.notDeepEqual.',
		object: 'assert',
		property: 'notDeepEqual',
	},

	/** Deprecated arguments.callee */
	{
		message: '`arguments.callee` is deprecated and forbidden in strict mode.',
		object: 'arguments',
		property: 'callee',
	},

	/** Prefer Number.isFinite / Number.isNaN */
	...[
		'global',
		'self',
		'window',
	].flatMap(object => [
		{
			message: 'Use Number.isFinite instead.',
			object,
			property: 'isFinite',
		},
		{
			message: 'Use Number.isNaN instead.',
			object,
			property: 'isNaN',
		},
	]),

	/** Deprecated legacy accessors */
	{
		message: 'Use Object.defineProperty instead.',
		property: '__defineGetter__',
	},
	{
		message: 'Use Object.defineProperty instead.',
		property: '__defineSetter__',
	},
	{
		message: 'Use Object.getOwnPropertyDescriptor instead.',
		property: '__lookupGetter__',
	},
	{
		message: 'Use Object.getOwnPropertyDescriptor instead.',
		property: '__lookupSetter__',
	},

	/** Crypto API */
	{
		message: 'Use globalThis.crypto instead.',
		property: 'webcrypto',
	},

	/** Prefer exponentiation operator */
	{
		message: 'Use the exponentiation operator (**) instead of Math.pow.',
		object: 'Math',
		property: 'pow',
	},
];

/**
 * Restricted syntax entries for the `no-restricted-syntax` rule.
 * Each entry disables or discourages a specific syntax pattern.
 * @type {(import('eslint').Rule.RuleMetaData & { selector: string, message?: string })[]}
 */
const RESTRICTED_SYNTAX = [
	/** Dangerous loops and outdated iteration methods */
	{
		message:
			'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries} instead.',
		selector: 'ForInStatement',
	},
	{
		message:
			'Avoid for..of loops. They require regenerator-runtime and are generally discouraged in favor of array iteration methods.',
		selector: 'ForOfStatement',
	},

	/** GOTO-like syntax */
	{
		message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain.',
		selector: 'LabeledStatement',
	},

	/** Strict mode issues */
	{
		message: '`with` is disallowed in strict mode because it makes code unpredictable and hard to optimize.',
		selector: 'WithStatement',
	},

	/** Misuse of timers */
	{
		message: '`setInterval()` must be invoked with at least two arguments.',
		selector: "CallExpression[callee.name='setInterval'][arguments.length<2]",
	},
	{
		message: '`setTimeout()` must be invoked with at least two arguments.',
		selector: "CallExpression[callee.name='setTimeout'][arguments.length<2]",
	},

	/** Prefer better error handling */
	{
		message: 'Use `new` keyword when throwing an `Error`.',
		selector: 'ThrowStatement > CallExpression[callee.name=/Error$/]',
	},

	/** Deprecated string methods */
	{
		message: 'Use String.prototype.slice() or String.prototype.substring() instead of deprecated substr().',
		selector: "CallExpression[callee.property.name='substr']",
	},

	/** TypeScript-specific restrictions */
	{
		message: 'Avoid `const enum` — it can cause issues with transpilation and tooling.',
		selector: 'TSEnumDeclaration[const=true]',
	},
	{
		message: 'Use ES module exports (`export default`) instead of `export =`.',
		selector: 'TSExportAssignment',
	},
];

/**
 * Preset shared options for ESLint rules.
 */
export const {
	bestPracticesNoRestrictedProperties,
	stylisticNoRestrictedSyntax,
	variablesNoRestrictedGlobals,
	variablesNoUnusedVariables,
} = {
	bestPracticesNoRestrictedProperties: RESTRICTED_PROPERTIES,
	stylisticNoRestrictedSyntax: RESTRICTED_SYNTAX,
	/**
	 * Final list of restricted global variables to be used in `no-restricted-globals` rule.
	 * @type {RestrictedGlobal[]}
	 */
	variablesNoRestrictedGlobals: [
		...esmRestrictedGlobals,
		...nodeRestrictedGlobals,
		...standardLibraryReplacements,
		...confusingBrowserGlobals,
	],
	/**
	 * Options for the `no-unused-vars` rule.
	 * Helps ignore variables or arguments that start with `_`.
	 * Useful in functional programming, destructuring, etc.
	 * @type {NoUnusedVarsOption[]}
	 */
	variablesNoUnusedVariables: [
		{
			args: 'after-used',
			argsIgnorePattern: '^_',
			ignoreRestSiblings: false,
			vars: 'all',
			varsIgnorePattern: '^_',
		},
	],
};
