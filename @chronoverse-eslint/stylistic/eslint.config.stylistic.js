import { stylisticJs, stylisticJsx, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	eslintIgnores,
	stylisticJs,
	stylisticPlus,
	stylisticJsx,
	stylisticTs,
]);
