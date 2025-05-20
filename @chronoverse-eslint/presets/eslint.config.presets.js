import { CHRONOVERSE_PRESETS } from '@chronoverse-eslint/presets';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,
	CHRONOVERSE_PRESETS.comments,
	CHRONOVERSE_PRESETS.css,
	CHRONOVERSE_PRESETS.dependency,
	CHRONOVERSE_PRESETS.jsdoc,
	CHRONOVERSE_PRESETS.json,
	CHRONOVERSE_PRESETS.mutation,
	CHRONOVERSE_PRESETS.next,
	CHRONOVERSE_PRESETS.node,
	CHRONOVERSE_PRESETS.perfectionist,
	CHRONOVERSE_PRESETS.promise,
	CHRONOVERSE_PRESETS.regexp,
	CHRONOVERSE_PRESETS.security,
	CHRONOVERSE_PRESETS.unicorn,
	CHRONOVERSE_PRESETS.prettier,
	CHRONOVERSE_PRESETS.prettierConfig,
]);

export default eslintConfig;
