// @ts-ignore
const hasDefault = value => value && typeof value === 'object' && 'default' in value;

// @ts-ignore
const interopDefault = async m => {
	const resolved = await m;
	return hasDefault(resolved) ? resolved.default : resolved;
};

/**
 * @param {string} configName
 * @param {import('eslint').Linter.Config[]} configs
 * @returns {import('eslint').Linter.Config['rules']}
 */
const getRulesByConfigName = (configName, configs) => {
	let rules = {};
	for (const config of configs) {
		if (config.name === configName && config.rules) {
			rules = { ...rules, ...config.rules };
		}
	}
	return rules;
};

export { getRulesByConfigName, interopDefault };
