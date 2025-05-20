import { CHRONOVERSE_STYLISTIC } from '@chronoverse-eslint/stylistic';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,
	CHRONOVERSE_STYLISTIC.stylisticJs,
	CHRONOVERSE_STYLISTIC.stylisticPlus,
	CHRONOVERSE_STYLISTIC.stylisticJsx,
	CHRONOVERSE_STYLISTIC.stylisticTs,
]);

export default eslintConfig;
