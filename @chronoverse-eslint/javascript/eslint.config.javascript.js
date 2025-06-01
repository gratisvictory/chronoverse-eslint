import { javascript } from '@chronoverse-eslint/javascript/javascript-base';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const eslintConfigJavascript = defineConfig([
	eslintIgnores,
	javascript,
]);

export default eslintConfigJavascript;
