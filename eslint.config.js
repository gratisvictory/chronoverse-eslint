import { javascript } from '@chronoverse-eslint/javascript/javascript-base';
import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettierPlugin } from '@chronoverse-eslint/presets/prettier-plugin';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';
import { eslintIgnores, disablesPrettierRules } from '@chronoverse-shared/utilities';

import { defineConfig } from 'eslint/config';

const js = [...javascript];

const presets = [
	...comments,
	...css,
	...dependency,
	...jsdoc,
	...json,
	...mutation,
	...perfectionist,
	...prettierPlugin,
	...promise,
	...regexp,
	...unicorn,
	...disablesPrettierRules,
];

const style = [...stylistic];

const eslintConfig = defineConfig([
	eslintIgnores,
	js,
	style,
	presets,
]);

export default eslintConfig;
