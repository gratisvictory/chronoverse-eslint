/**
 * @type {import('eslint').Linter.Config['rules']}
 */
const consistentRules = {
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			disallowTypeAnnotations: true,
			fixStyle: 'separate-type-imports',
			prefer: 'type-imports',
		},
	],
};

export { consistentRules };
