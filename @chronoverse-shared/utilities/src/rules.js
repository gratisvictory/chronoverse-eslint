/**
 * Returns the `rules` object from the ESLint config that matches the given `configName`.
 * If multiple configs match, their rules are merged, with later ones taking precedence.
 * @param {string} configName - The name of the config to search for
 * @param {import('eslint').Linter.Config[]} configs - An array of ESLint config objects
 * @returns {import('eslint').Linter.Config['rules']} The merged rules from matching configs
 */
const getRulesByConfigName = (configName, configs) =>
	// eslint-disable-next-line unicorn/no-array-reduce
	configs.reduce((accumulator, config) => {
		if (config.name === configName && config.rules) return { ...accumulator, ...config.rules };
		return accumulator;
	}, {});

export { getRulesByConfigName };
