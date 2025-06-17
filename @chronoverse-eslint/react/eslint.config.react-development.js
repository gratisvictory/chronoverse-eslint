import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';
import { jsxA11y } from './src/jsx-a11y';
import { reactBase } from './src/react-base';
import { reactCompiler } from './src/react-compiler';
import { reactHooks } from './src/react-hooks';
import { reactJsx } from './src/react-jsx';
import { reactRefresh } from './src/react-refresh';
import { reactRefreshVite } from './src/react-refresh-vite';
import { reactTsx } from './src/react-tsx';

const eslintConfigReactDevelopment = defineConfig([
	eslintIgnores,
	reactBase,
	reactHooks,
	reactCompiler,
	reactRefresh,
	reactRefreshVite,
	reactJsx,
	reactTsx,
	jsxA11y,
]);

export default eslintConfigReactDevelopment;
