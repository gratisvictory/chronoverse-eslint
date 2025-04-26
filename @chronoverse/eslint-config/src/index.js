import { javascript } from '@chronoverse-eslint/javascript';
import { perfectionist } from '@chronoverse-eslint/perfectionist';
import { EXCLUDE_PATTERNS } from '@chronoverse-eslint/shared';
import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
const eslint = defineConfig([
	gitignore({
		name: '@chronoverse/gitignore',
	}),
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
	javascript,
	perfectionist,
]);

export { eslint };
