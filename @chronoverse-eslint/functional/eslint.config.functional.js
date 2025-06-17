import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
import { functionalTs } from '@chronoverse-eslint/functional/functional-ts';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const functionalEslintConfig = defineConfig([
	eslintIgnores,
	functionalJs,
	functionalTs,
]);

export default functionalEslintConfig;
