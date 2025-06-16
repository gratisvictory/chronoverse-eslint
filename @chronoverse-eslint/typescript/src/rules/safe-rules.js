/**
 * @see https://github.com/susisu/eslint-plugin-safe-typescript
 * @type {import('eslint').Linter.Config['rules']}
 */
const tsSafeRules = {
	/**
	 * Disallow the use of Object.assign()
	 */
	'@susisu/safe-typescript/no-object-assign': 'error',
	/**
	 * Disallow type assertions
	 */
	'@susisu/safe-typescript/no-type-assertion': 'error',
	/**
	 * Disallow possibly unsafe property enumeration methods of Object
	 */
	'@susisu/safe-typescript/no-unsafe-object-enum-method': 'error',
	/**
	 * Disallow possibly unsafe property checks of object
	 */
	'@susisu/safe-typescript/no-unsafe-object-property-check': 'error',
	/**
	 * Disallow possibly unsafe overwrites of object properties
	 */
	'@susisu/safe-typescript/no-unsafe-object-property-overwrite': 'error',
};

export { tsSafeRules };
