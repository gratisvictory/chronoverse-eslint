import { JAVASCRIPT_FILES, JSON_FILES } from '@chronoverse-eslint/shared';

const config = {
	[JAVASCRIPT_FILES]: [
		'prettier --write --log-level=warn',
		'eslint --fix',
	],
	[JSON_FILES]: ['prettier --write --log-level=warn'],
	'*': () => 'bunx sherif@latest',
};

export default config;
