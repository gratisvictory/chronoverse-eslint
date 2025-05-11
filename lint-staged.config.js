import { FILE_PATTERNS } from '@chronoverse-shared/utilities';

const config = {
	[FILE_PATTERNS.javascript]: [
		'prettier --write --log-level=warn',
		'eslint --fix',
	],
	[FILE_PATTERNS.json]: ['prettier --write --log-level=warn'],
	'*': () => 'bunx sherif@latest',
};

export default config;
