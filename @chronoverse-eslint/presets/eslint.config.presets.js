import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { next } from '@chronoverse-eslint/presets/next';
import { node } from '@chronoverse-eslint/presets/node';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettierConfig } from '@chronoverse-eslint/presets/prettier-config';
import { prettierPlugin } from '@chronoverse-eslint/presets/prettier-plugin';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { security } from '@chronoverse-eslint/presets/security';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	eslintIgnores,
	comments,
	css,
	dependency,
	jsdoc,
	json,
	mutation,
	next,
	node,
	perfectionist,
	prettierPlugin,
	promise,
	regexp,
	security,
	unicorn,
	prettierConfig,
]);
