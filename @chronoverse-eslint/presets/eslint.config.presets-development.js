import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { comments } from './src/presets/comments';
import { css } from './src/presets/css';
import { dependency } from './src/presets/dependency';
import { jsdoc } from './src/presets/jsdoc';
import { json } from './src/presets/json';
import { mutation } from './src/presets/mutation';
import { next } from './src/presets/next';
import { node } from './src/presets/node';
import { perfectionist } from './src/presets/perfectionist';
import { prettierConfig } from './src/presets/prettier-config';
import { prettierPlugin } from './src/presets/prettier-plugin';
import { promise } from './src/presets/promise';
import { regexp } from './src/presets/regexp';
import { security } from './src/presets/security';
import { unicorn } from './src/presets/unicorn';

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
