const lintStagedConfig = {
	'**/*.{js,json,json5,jsonc}': [
		'bun run format:fix',
		'bun run lint:fix',
	],
	'*': () => 'bunx sherif@latest',
};

export default lintStagedConfig;
