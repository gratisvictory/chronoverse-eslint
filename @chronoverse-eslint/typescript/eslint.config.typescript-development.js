import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { typescript } from './src/typescript-base.js';

export default defineConfig([
	eslintIgnores,
	typescript,
]);
