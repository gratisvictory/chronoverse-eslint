export default {
	'**/*.{js,json}': [
		'bun run format:fix',
		'bun run lint:fix',
	],
	'*': () => 'bunx sherif@latest',
};
