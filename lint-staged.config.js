/** @type {import('lint-staged').Config} */
const config = {
	'*': [
		'prettier --write --cache --cache-location=node_modules/.cache/.prettiercache --log-level=warn',
		'eslint --fix --cache --cache-location=node_modules/.cache/.eslintcache',
		() => 'bunx sherif@latest',
	],
};
export default config;
