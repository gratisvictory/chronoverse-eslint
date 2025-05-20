import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';
import { CHRONOVERSE_REACT } from './src/index.js';

export default defineConfig([
	eslintIgnores,
	CHRONOVERSE_REACT.jsxA11y,
	CHRONOVERSE_REACT.reactHooks,
	CHRONOVERSE_REACT.reactCompiler,
	CHRONOVERSE_REACT.eslintReactJsx,
	CHRONOVERSE_REACT.eslintReactTsx,
	CHRONOVERSE_REACT.react,
]);
