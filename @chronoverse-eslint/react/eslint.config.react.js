import { eslintReactJsx, eslintReactTsx, jsxA11y, react, reactCompiler, reactHooks } from '@chronoverse-eslint/react';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfigReact = defineConfig([
	eslintIgnores,
	jsxA11y,
	reactHooks,
	reactCompiler,
	eslintReactJsx,
	eslintReactTsx,
	react,
]);

export default eslintConfigReact;
