/** @type {import('lint-staged').Config} */
const config = {
	'*.{js,ts,json,md,yml,yaml}': [
		'prettier --write --cache --cache-location=node_modules/.cache/.prettiercache --log-level=warn',
	],
	'*/**': () => 'bunx sherif@latest',
};

export default config;
