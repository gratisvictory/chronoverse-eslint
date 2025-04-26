const p11tOptions = {
	type: 'natural',
	ignoreCase: false,
	partitionByComment: '^Part:.*',
	partitionByNewLine: true,
};

const p11tGroups = {
	customGroups: {
		id: [
			'^id$',
			'^_?id$',
			'^key$',
			'^self$',
			'^userId$',
			'^sessionId$',
			'^accountId$',
			'^organizationId$',
			'^projectId$',
			'^teamId$',
			'^roleId$',
		],
		type: [
			'^type$',
			'^kind$',
			'^category$',
		],
		meta: [
			'^name$',
			'^title$',
			'^description$',
			'^meta$',
			'^summary$',
			'^label$',
			'^caption$',
			'^slug$',
		],
		alias: [
			'^alias$',
			'^as$',
		],
		status: [
			'^status$',
			'^state$',
			'^phase$',
			'^is[A-Z]',
			'^has[A-Z]',
		],
		counts: [
			'^count$',
			'.*Count$',
			'^size$',
			'.*Size$',
			'^total$',
			'.*Total$',
		],
		flags: [
			'^is[A-Z]',
			'^has[A-Z]',
			'^can[A-Z]',
			'^should[A-Z]',
			'^needs[A-Z]',
		],
		rules: [
			'^node$',
			'^messageId$',
			'^ruleId$',
		],
		timestamps: [
			'^createdAt$',
			'^updatedAt$',
			'^deletedAt$',
			'^startedAt$',
			'^endedAt$',
			'^publishedAt$',
		],
	},
	groups: [
		'id',
		'type',
		'meta',
		'alias',
		'status',
		'timestamps',
		'counts',
		'flags',
		'rules',
		'unknown',
	],
};

/** @type {import('eslint').Linter.Config['rules']} */
const p11t = {
	'perfectionist/sort-array-includes': 'error',
	'perfectionist/sort-enums': 'error',
	'perfectionist/sort-exports': [
		'error',
		{ type: 'natural', order: 'asc' },
	],
	'perfectionist/sort-imports': [
		'error',
		{
			type: 'natural',
			groups: [
				'type',
				[
					'parent-type',
					'sibling-type',
					'index-type',
					'internal-type',
				],
				'builtin',
				'external',
				'internal',
				[
					'parent',
					'sibling',
					'index',
				],
				'side-effect',
				'object',
				'unknown',
			],
			newlinesBetween: 'ignore',
			order: 'asc',
		},
	],
	'perfectionist/sort-interfaces': [
		'error',
		{ ...p11tOptions, ...p11tGroups },
	],
	'perfectionist/sort-jsx-props': 'error',
	'perfectionist/sort-maps': 'error',
	'perfectionist/sort-named-exports': [
		'error',
		{ type: 'natural', order: 'asc' },
	],
	'perfectionist/sort-named-imports': [
		'error',
		{ type: 'natural', order: 'asc' },
	],
	'perfectionist/sort-object-types': [
		'error',
		{ ...p11tOptions, ...p11tGroups },
	],
	'perfectionist/sort-objects': [
		'error',
		{ ...p11tOptions, ...p11tGroups },
	],
	'perfectionist/sort-sets': 'error',
	'perfectionist/sort-switch-case': 'error',
	'perfectionist/sort-union-types': 'error',
	'perfectionist/sort-variable-declarations': 'error',
};

export { p11t };
