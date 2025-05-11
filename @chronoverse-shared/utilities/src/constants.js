/**
 * Glob patterns for files and folders to exclude from linting.
 */
const EXCLUDE_PATTERNS = [
	/** Package managers and build artifacts */
	'**/node_modules/**',
	'**/{dist,build}/**',
	'**/.{next,nuxt,vercel,output,turbo,vite,vite-inspect,vitepress}/**',

	/** Caches and temp files */
	'**/.{cache,tmp,temp,.tmp,.temp}/**',
	'**/{tmp,temp}/**',
	'**/test/.tmp.*/**',

	/** Testing artifacts */
	'**/__{tests,snapshots,mocks}__/**',
	'**/fixtures/**',
	'**/coverage/**',
	'**/test-results/**',
	'**/.nyc_output/**',
	'**/cypress/{screenshots,videos}/**',

	/** Benchmark data */
	'benchmark/{fixtures,tmp}/**',

	/** Config and lockfiles */
	'**/*.{config,jest.config}.{js,cjs,mjs}',
	'**/auto-import?(s).d.ts',
	'**/components.d.ts',
	'**/exports-unused.ts',
	'**/package-lock.json',
	'**/{yarn.lock,pnpm-lock.yaml,bun.lockb}',

	/** Compressed/minified or large generated files */
	'**/*.min.*',
	'**/LICENSE*',
	'**/CHANGELOG*.md',

	/** OS and IDE files */
	'**/.DS_Store',
	'**/Thumbs.db',
	'**/.idea/**',
	'**/.vscode/**',
	'**/.log',
	'**/.node_repl_history',

	/** Monorepo / tooling-specific folders */
	'.nx/',
	'.storybook/**',
];

export { EXCLUDE_PATTERNS };
