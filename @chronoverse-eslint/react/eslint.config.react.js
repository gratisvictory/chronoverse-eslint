import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';
import { reactJsx } from '@chronoverse-eslint/react/react-jsx';
import { reactRefresh } from '@chronoverse-eslint/react/react-refresh';
import { reactRefreshVite } from '@chronoverse-eslint/react/react-refresh-vite';
import { reactTsx } from '@chronoverse-eslint/react/react-tsx';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { defineConfig } from 'eslint/config';

const eslintConfigReact = defineConfig([
	eslintIgnores,
	reactBase,
	reactCompiler,
	reactHooks,
	reactJsx,
	reactRefresh,
	reactRefreshVite,
	reactTsx,
	jsxA11y,
]);

export default eslintConfigReact;
