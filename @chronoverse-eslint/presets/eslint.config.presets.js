import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { next } from '@chronoverse-eslint/presets/next';
import { node } from '@chronoverse-eslint/presets/node';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettier } from '@chronoverse-eslint/presets/prettier';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { security } from '@chronoverse-eslint/presets/security';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfigPresets = defineConfig([
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
	promise,
	regexp,
	security,
	unicorn,
	prettier,
]);

export default eslintConfigPresets;
