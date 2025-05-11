/**
 * Returns the `rules` object from the ESLint config that matches the given `configName`.
 * If multiple configs match, their rules are merged, with later ones taking precedence.
 * @param {string} configName - The name of the config to search for
 * @param {import('eslint').Linter.Config[]} configs - An array of ESLint config objects
 * @returns {import('eslint').Linter.Config['rules']} The merged rules from matching configs
 */
const getRulesByConfigName = (configName, configs) =>
	configs.reduce((accumulator, config) => {
		if (config.name === configName && config.rules) return { ...accumulator, ...config.rules };
		return accumulator;
	}, /** @type {import('eslint').Linter.Config['rules']} */ ({}));

/**
 * Returns a rules object where all keys starting with `unicorn/`
 * are renamed to `unicorn-x/`. All other keys remain unchanged.
 * @param {Record<string, unknown>} rules - The rules object to reformat
 * @returns {import('eslint').Linter.Config['rules']} The reformatted rules object
 */
const reformattedRules = rules =>
	Object.keys(rules).reduce((accumulator, rule) => {
		const newKeys = rule.replace('unicorn/', 'unicorn-x/');
		// eslint-disable-next-line security/detect-object-injection
		return { ...accumulator, [newKeys]: rules[rule] };
	}, {});

export { getRulesByConfigName, reformattedRules };
