import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';
import { javascript } from '@chronoverse-eslint/javascript/javascript-base';
import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
import { comments } from '@chronoverse-eslint/presets/comments';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
import { eslintIgnores, disables } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,
	javascript,
	functionalJs,
	stylistic,
	comments,
	dependency,
	jsdoc,
	json,
	mutation,
	perfectionist,
	promise,
	regexp,
	unicorn,
	disables,
]);

export default eslintConfig;
