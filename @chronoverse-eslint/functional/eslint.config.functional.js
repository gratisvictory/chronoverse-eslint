import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const functionalEslintConfig = defineConfig([
	eslintIgnores,
	functionalJs,
	functionalTs,
]);

export default functionalEslintConfig;
