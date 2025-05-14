import { css, nextTsx } from '@chronoverse-eslint/eslint-config';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	eslintIgnores,
	nextTsx,
	css,
]);
