import build from '@chronoverse-shared/builder';
await build({
	entryPoints: [
		'./src/stylistic-base.js',
		'./src/rules/spacing-rules',
		'./src/rules/line-breaks-rules',
		'./src/rules/brackets-rules',
		'./src/rules/indent-rules',
		'./src/rules/quotes-rules',
		'./src/rules/commas-rules',
		'./src/rules/semis-rules',
		'./src/rules/operators-rules',
		'./src/rules/comments-rules',
		'./src/rules/jsx-rules',
		'./src/rules/types-rules',
		'./src/rules/disallow-rules',
		'./src/rules/misc-rules',
		'./src/rules/all-rules',
		'./src/index.js',
	],
});
