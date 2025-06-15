import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const eslintConfigStylistic = defineConfig([
	eslintIgnores,
	stylistic,
]);

export default eslintConfigStylistic;
