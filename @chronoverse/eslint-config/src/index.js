import { javascript } from '@chronoverse-eslint/javascript';
import { perfectionist } from '@chronoverse-eslint/perfectionist';
import { EXCLUDE_PATTERNS } from '@chronoverse-eslint/shared';
import gitignore from 'eslint-config-flat-gitignore';
import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
const eslint = defineConfig([
	globalIgnores(EXCLUDE_PATTERNS, '@chronoverse/ignores'),
	gitignore({
		name: '@chronoverse/gitignore',
	}),
	javascript,
	perfectionist,
]);

export { eslint };
