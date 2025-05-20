import { CHRONOVERSE_FUNCTIONAL } from '@chronoverse-eslint/functional';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,
	CHRONOVERSE_FUNCTIONAL.functionalJs,
	CHRONOVERSE_FUNCTIONAL.functionalTs,
]);

export default eslintConfig;
