import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	eslintIgnores,
	functionalJs,
	functionalTs,
]);
