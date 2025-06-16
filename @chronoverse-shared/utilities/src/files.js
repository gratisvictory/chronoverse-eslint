/**
 * Common glob patterns for different file types in the project.
 */
export const {
	config,
	css,
	documentation,
	javascript,
	json,
	json5,
	jsonc,
	less,
	lockfiles,
	markdown,
	mdx,
	onlyJavascript,
	onlyTypescript,
	react,
	sass,
	tests,
	types,
	typescript,
	yaml,
} = {
	/** JavaScript files: .js, .mjs, .cjs, .jsx */
	javascript: ['**/*.?([cm])js?(x)'],

	/** TypeScript files: .ts, .mts, .cts, .tsx */
	typescript: ['**/*.?([cm])ts?(x)'],

	/** Only .js, .cjs, and .mjs files (no jsx) */
	onlyJavascript: ['**/*.?([cm])js'],

	/** Only .ts, .cts, and .mts files (no tsx) */
	onlyTypescript: ['**/*.?([cm])ts'],

	/** JSX and TSX files only: .jsx, .tsx */
	react: ['**/*.{jsx,tsx}'],

	/** Style files: .css */
	css: ['**/*.css'],

	/** SCSS and Sass files */
	sass: ['**/*.{scss,sass}'],

	/** Less files */
	less: ['**/*.less'],

	/** JSON files */
	json: ['**/*.json'],

	/** JSON5 files */
	json5: ['**/*.json5'],

	/** JSONC (JSON with comments) files */
	jsonc: ['**/*.jsonc'],

	/** YAML and YML files */
	yaml: ['**/*.{yaml,yml}'],

	/** Markdown files */
	markdown: ['**/*.md'],

	/** MDX (Markdown + JSX) files */
	mdx: ['**/*.mdx'],

	/** Configuration files: .config.js/ts/json etc. */
	config: ['**/*.config.@(js|ts|cjs|cts|mjs|mts|json)'],

	/** Lockfiles for package managers */
	lockfiles: [
		'**/package-lock.json',
		'**/yarn.lock',
		'**/pnpm-lock.yaml',
		'**/bun.lockb',
	],

	/** Test files (unit, integration, etc.) */
	tests: ['**/*.{test,spec}.{js,ts,jsx,tsx}', '**/__tests__/**'],

	/** Markdown documentation like README, CHANGELOG, etc. */
	documentation: ['**/{README,CHANGELOG,CONTRIBUTING}.md'],

	/** Type declaration files */
	types: ['**/*.d.ts'],
};
