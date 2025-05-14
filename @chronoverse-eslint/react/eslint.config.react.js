import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { eslintReactJsx, eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from './src/index.js';

export default defineConfig([
	eslintIgnores,
	jsxA11y,
	reactHooks,
	reactCompiler,
	eslintReactJsx,
	eslintReactTsx,
	react,
]);
