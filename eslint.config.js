import { stylisticJs, stylisticPlus } from '@chronoverse-eslint/stylistic';
import { javascript } from '@chronoverse-eslint/javascript/config';
import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
// import { CHRONOVERSE_PRESETS } from '@chronoverse-eslint/presets';
import { eslintIgnores, disables } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,
	javascript,
	functionalJs,
	stylisticJs,
	stylisticPlus,
	disables,
	// CHRONOVERSE_JAVASCRIPT.javascript,
	// CHRONOVERSE_STYLISTIC.stylisticJs,
	// CHRONOVERSE_STYLISTIC.stylisticPlus,
	// CHRONOVERSE_FUNCTIONAL.functionalJs,
	// CHRONOVERSE_PRESETS.comments,
	// CHRONOVERSE_PRESETS.dependency,
	// CHRONOVERSE_PRESETS.jsdoc,
	// CHRONOVERSE_PRESETS.json,
	// CHRONOVERSE_PRESETS.mutation,
	// CHRONOVERSE_PRESETS.node,
	// CHRONOVERSE_PRESETS.perfectionist,
	// CHRONOVERSE_PRESETS.promise,
	// CHRONOVERSE_PRESETS.regexp,
	// CHRONOVERSE_PRESETS.unicorn,
	// CHRONOVERSE_PRESETS.prettier,
	// CHRONOVERSE_DISABLES.disables,
	// {
	// 	name: '@chronoverse/overrides',
	// 	rules: {
	// 		'@stylistic/js/object-curly-newline': 'off',
	// 		'n/no-process-exit': 'warn',
	// 		'unicorn/no-process-exit': 'warn',
	// 		'@stylistic/js/max-len': 'warn',
	// 	},
	// },
]);

export default eslintConfig;
