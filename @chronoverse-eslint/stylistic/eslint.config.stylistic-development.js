import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { stylistic } from './src/index.js';

const eslintConfigStylistic = defineConfig([
	eslintIgnores,
	stylistic,
]);

export default eslintConfigStylistic;
