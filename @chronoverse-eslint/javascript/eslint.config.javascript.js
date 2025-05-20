import { CHRONOVERSE_JAVASCRIPT } from '@chronoverse-eslint/javascript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([eslintIgnores, CHRONOVERSE_JAVASCRIPT.javascript]);

export default eslintConfig;
