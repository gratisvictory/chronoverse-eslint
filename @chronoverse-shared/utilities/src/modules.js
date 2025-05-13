/**
 * Checks if the given value is an object containing a `default` property.
 * @param {unknown} value - The value to check
 * @returns {value is { default: unknown }} Whether the value has a default property
 */
const hasDefault = value => !!value && typeof value === 'object' && 'default' in value;

/**
 * Resolves a module-like value (e.g. dynamic `import()` result)
 * and returns either the default export or the value itself.
 * @param {Promise<unknown>} m - The module to resolve
 * @returns {Promise<unknown>} The resolved module value
 */
const interopDefault = async m => {
	const resolved = await m;
	return hasDefault(resolved) ? resolved.default : resolved;
};

export { interopDefault };
