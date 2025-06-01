import { typescript } from '@chronoverse-eslint/typescript/typescript-base';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const eslintConfigTypescript = defineConfig([
	eslintIgnores,
	typescript,
]);

export default eslintConfigTypescript;
