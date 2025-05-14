import { javascript } from '@chronoverse-eslint/javascript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	eslintIgnores,
	javascript,
]);
