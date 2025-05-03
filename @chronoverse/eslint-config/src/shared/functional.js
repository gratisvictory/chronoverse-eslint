import functional from 'eslint-plugin-functional';
import { defineConfig } from 'eslint/config';

const functionalJS = defineConfig([
	{
		name: '@chronoverse/functional/rules',
		extends: [
			// @ts-expect-error
			functional.configs.externalVanillaRecommended,
			// @ts-expect-error
			functional.configs.recommended,
			// @ts-expect-error
			functional.configs.stylistic,
			// @ts-expect-error
			functional.configs.disableTypeChecked,
		],
	},
]);

export { functionalJS };
