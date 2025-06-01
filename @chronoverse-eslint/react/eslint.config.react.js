import { eslintReactJsx } from '@chronoverse-eslint/react/eslint-react-jsx';
import { eslintReactTsx } from '@chronoverse-eslint/react/eslint-react-tsx';
import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';

import { defineConfig } from 'eslint/config';

const eslintConfigReact = defineConfig([
	eslintIgnores,
	jsxA11y,
	reactHooks,
	reactCompiler,
	eslintReactJsx,
	eslintReactTsx,
	reactBase,
]);

export default eslintConfigReact;
