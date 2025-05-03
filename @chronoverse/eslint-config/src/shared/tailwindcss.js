import tailwind from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

const tailwindcss = defineConfig([
	{
		name: '@chronoverse/tailwindcss/setup',
		extends: [
			tailwind.configs['flat/recommended'],
		],
		settings: {
			tailwindcss: {
				callees: [
					'classnames',
					'clsx',
					'ctl',
					'cn',
					'cx',
					'cva',
				],
			},
		},
	},
]);

export { tailwindcss };
