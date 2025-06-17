import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { javascript } from './src/javascript-base.js';

const eslintConfigJavascript = defineConfig([
	eslintIgnores,
	javascript,
]);

export default eslintConfigJavascript;
