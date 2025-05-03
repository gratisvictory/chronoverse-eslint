// @ts-expect-error @eslint-community/eslint-plugin-eslint-comments is not typed
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import { defineConfig } from 'eslint/config';
const comments = defineConfig([
	{
		name: '@chronoverse/comments/rules',
		plugins: {
			'@eslint-community/eslint-comments': eslintComments,
		},
		rules: {
			...eslintComments.configs.recommended.rules,
		},
	},
]);

export default comments;
