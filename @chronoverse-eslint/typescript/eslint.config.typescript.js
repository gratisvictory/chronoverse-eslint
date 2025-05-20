import { CHRONOVERSE_TYPESCRIPT } from '@chronoverse-eslint/typescript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([eslintIgnores, CHRONOVERSE_TYPESCRIPT.typescript]);

export default eslintConfig;
