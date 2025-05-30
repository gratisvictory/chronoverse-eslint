import { javascript, json, json5, jsonc } from '@chronoverse-shared/utilities/files';

const jsonFiles = [...json, ...jsonc, ...json5];

const lintStagedConfig = {
	[javascript]: [
		'prettier --write --log-level=warn',
		'eslint --fix',
	],
	[jsonFiles]: ['prettier --write --log-level=warn'],
	'*': () => 'bunx sherif@latest',
};

export default lintStagedConfig;
