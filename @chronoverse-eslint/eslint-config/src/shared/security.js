import pluginSecurity from 'eslint-plugin-security';
import { defineConfig } from 'eslint/config';

const security = defineConfig([
	{
		name: '@chronoverse/security/rules',
		plugins: {
			security: pluginSecurity,
		},
		rules: {
			...pluginSecurity.configs.recommended.rules,
		},
	},
]);

export { security };
