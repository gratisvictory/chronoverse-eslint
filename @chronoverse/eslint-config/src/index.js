import { defineConfig, globalIgnores } from 'eslint/config';
import { javascript } from '@chronoverse-eslint/javascript';
import gitignore from 'eslint-config-flat-gitignore';
import { EXCLUDE_PATTERNS } from '@chronoverse-eslint/shared';

/** @type {import('eslint').Linter.Config[]} */
const eslint = defineConfig([
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
	gitignore({
		name: '@chronoverse/gitignore',
	}),
	javascript,
]);

export { eslint };
