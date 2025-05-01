import { defineConfig } from 'eslint/config';
import { js } from '@chronoverse-eslint/eslint-config';

export default defineConfig([
	js,
	{
		rules: {
			'@eslint-community/eslint-comments/disable-enable-pair': 'off',
			'no-restricted-syntax': 'off',
		},
	},
]);
