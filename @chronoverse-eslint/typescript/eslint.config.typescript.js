import { typescript } from '@chronoverse-eslint/typescript/config';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfigTypescript = defineConfig([
	eslintIgnores,
	typescript,
]);

export default eslintConfigTypescript;
