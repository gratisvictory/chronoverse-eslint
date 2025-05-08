import { JAVASCRIPT_FILES, JSON_FILES } from '@chronoverse-eslint/shared';

const config = {
	[JAVASCRIPT_FILES]: [
		'prettier --write --cache --cache-location=node_modules/.cache/.prettiercache --log-level=warn',
		'eslint --fix --cache --cache-location=node_modules/.cache/.eslintcache',
	],
	[JSON_FILES]: ['prettier --write --cache --cache-location=node_modules/.cache/.prettiercache --log-level=warn'],
	'*': () => 'bunx sherif@latest',
};
export default config;
