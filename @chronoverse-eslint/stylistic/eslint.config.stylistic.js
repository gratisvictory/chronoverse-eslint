import { stylisticJs, stylisticJsx, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const eslintConfigStylistic = defineConfig([
	eslintIgnores,
	stylisticJs,
	stylisticPlus,
	stylisticJsx,
	stylisticTs,
]);

export default eslintConfigStylistic;
