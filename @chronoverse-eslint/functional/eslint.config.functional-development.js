import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { functionalJs } from './src/functional-js.js';
import { functionalTs } from './src/functional-ts.js';

const functionalEslintConfigDevelopment = defineConfig([
	eslintIgnores,
	functionalJs,
	functionalTs,
]);

export default functionalEslintConfigDevelopment;
