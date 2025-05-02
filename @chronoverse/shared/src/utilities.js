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
	// eslint-disable-next-line no-restricted-syntax
	for (const config of configs) {
		if (config.name === configName && config.rules) {
			rules = { ...rules, ...config.rules };
		}
	}
	return rules;
};

/**
 * @param {Record<string, any>} rules
 * @returns {Record<string, any>}
 */
const reformattedRules = rules => {
	/** @type {Record<string, any>} */
	const accumulator = {};

	// eslint-disable-next-line no-restricted-syntax
	for (const rule of Object.keys(rules).filter(
		r =>
			!(
				r.startsWith('babel/')
				|| r.startsWith('@babel/')
				|| r.startsWith('vue/')
				|| r.startsWith('standard/')
				|| r.startsWith('flowtype/')
			),
	)) {
		const newKeys = rule.replace('unicorn/', 'unicorn-x/');
		accumulator[newKeys] = rules[rule];
	}

	return accumulator;
};

export { getRulesByConfigName, interopDefault, reformattedRules };
