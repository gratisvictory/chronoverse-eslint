/**
 * @see https://github.com/jsx-eslint/eslint-plugin-react
 * @type {import('eslint').Linter.Config['rules']}
 */
const react = {
	/**
	 * Enforce using `onChange` or `readonly` attribute when `checked` is used
	 */
	'react/checked-requires-onchange-or-readonly': [
		'off',
		{
			ignoreExclusiveCheckedAttribute: false,
			ignoreMissingProperties: false,
		},
	],

	/**
	 * Disallow missing displayName in a React component definition
	 */
	'react/display-name': [
		'off',
		{ ignoreTranspilerName: false },
	],

	/**
	 * Disallow certain propTypes
	 */
	'react/forbid-prop-types': [
		'error',
		{
			checkChildContextTypes: true,
			checkContextTypes: true,
			forbid: [
				'any',
				'array',
				'object',
			],
		},
	],

	/**
	 * Disallow certain props on DOM Nodes
	 */
	'react/forbid-dom-props': [
		'off',
		{ forbid: [] },
	],

	/**
	 * Enforce boolean attributes notation in JSX
	 */
	'react/jsx-boolean-value': [
		'error',
		'never',
		{ always: [] },
	],

	/**
	 * Enforce closing bracket location in JSX
	 */
	'react/jsx-closing-bracket-location': [
		'error',
		'line-aligned',
	],

	/**
	 * Enforce closing tag location for multiline JSX
	 */
	'react/jsx-closing-tag-location': 'error',

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	 */
	'react/jsx-curly-spacing': [
		'error',
		'never',
		{ allowMultiline: true },
	],

	/**
	 * Enforce event handler naming conventions in JSX
	 */
	'react/jsx-handler-names': [
		'off',
		{
			eventHandlerPrefix: 'handle',
			eventHandlerPropPrefix: 'on',
		},
	],

	/**
	 * Enforce props indentation in JSX
	 */
	'react/jsx-indent-props': [
		'error',
		'tab',
	],

	/**
	 * Disallow missing `key` props in iterators/collection literals
	 */
	'react/jsx-key': 'off',

	/**
	 * Enforce maximum of props on a single line in JSX
	 */
	'react/jsx-max-props-per-line': [
		'error',
		{ maximum: 1, when: 'multiline' },
	],

	/**
	 * Disallow `.bind()` or arrow functions in JSX props
	 */
	'react/jsx-no-bind': [
		'error',
		{
			allowArrowFunctions: true,
			allowBind: false,
			allowFunctions: false,
			ignoreDOMComponents: true,
			ignoreRefs: true,
		},
	],

	/**
	 * Disallow duplicate properties in JSX
	 */
	'react/jsx-no-duplicate-props': [
		'error',
		{ ignoreCase: true },
	],

	/**
	 * Disallow usage of string literals in JSX
	 */
	'react/jsx-no-literals': [
		'off',
		{ noStrings: true },
	],

	/**
	 * Disallow undeclared variables in JSX
	 */
	'react/jsx-no-undef': 'error',

	/**
	 * Enforce PascalCase for user-defined JSX components
	 */
	'react/jsx-pascal-case': [
		'error',
		{
			allowAllCaps: true,
			ignore: [],
		},
	],

	/**
	 * Enforce propTypes declarations alphabetical sorting
	 */
	'react/sort-prop-types': [
		'off',
		{
			callbacksLast: false,
			ignoreCase: true,
			requiredFirst: false,
			sortShapeProp: true,
		},
	],

	/**
	 * Enforce props alphabetical sorting
	 */
	'react/jsx-sort-props': [
		'off',
		{
			callbacksLast: false,
			ignoreCase: true,
			noSortAlphabetically: false,
			reservedFirst: true,
			shorthandFirst: false,
			shorthandLast: false,
		},
	],

	/**
	 * Enforce defaultProps declarations alphabetical sorting
	 * @deprecated
	 */
	'react/jsx-sort-default-props': [
		'off',
		{
			ignoreCase: true,
		},
	],

	/**
	 * Disallow React to be incorrectly marked as unused
	 */
	'react/jsx-uses-react': 'error',

	/**
	 * Disallow variables used in JSX to be incorrectly marked as unused
	 */
	'react/jsx-uses-vars': 'error',

	/**
	 * Disallow usage of dangerous JSX properties
	 */
	'react/no-danger': 'warn',

	/**
	 * Disallow usage of deprecated methods
	 */
	'react/no-deprecated': 'error',

	/**
	 * Disallow usage of setState in componentDidMount
	 */
	'react/no-did-mount-set-state': 'off',

	/**
	 * Disallow usage of setState in componentDidUpdate
	 */
	'react/no-did-update-set-state': 'error',

	/**
	 * Disallow usage of setState in componentWillUpdate
	 */
	'react/no-will-update-set-state': 'error',

	/**
	 * Disallow direct mutation of this.state
	 */
	'react/no-direct-mutation-state': 'off',

	/**
	 * Disallow usage of isMounted
	 */
	'react/no-is-mounted': 'error',

	/**
	 * Disallow multiple component definition per file
	 */
	'react/no-multi-comp': 'off',

	/**
	 * Disallow usage of setState
	 */
	'react/no-set-state': 'off',

	/**
	 * Disallow using string references
	 */
	'react/no-string-refs': 'error',

	/**
	 * Disallow usage of unknown DOM property
	 */
	'react/no-unknown-property': 'error',

	/**
	 * Enforce ES5 or ES6 class for React Components
	 */
	'react/prefer-es6-class': [
		'error',
		'always',
	],

	/**
	 * Enforce stateless components to be written as a pure function
	 */
	'react/prefer-stateless-function': [
		'error',
		{ ignorePureComponents: true },
	],

	/**
	 * Disallow missing props validation in a React component definition
	 */
	'react/prop-types': [
		'error',
		{
			customValidators: [],
			ignore: [],
			skipUndeclared: false,
		},
	],

	/**
	 * Disallow missing React when using JSX
	 */
	'react/react-in-jsx-scope': 'error',

	/**
	 * Enforce ES5 or ES6 class for returning value in render function
	 */
	'react/require-render-return': 'error',

	/**
	 * Disallow extra closing tags for components without children
	 */
	'react/self-closing-comp': 'error',

	/**
	 * Enforce component methods order
	 */
	'react/sort-comp': [
		'error',
		{
			groups: {
				lifecycle: [
					'displayName',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'mixins',
					'statics',
					'defaultProps',
					'constructor',
					'getDefaultProps',
					'getInitialState',
					'state',
					'getChildContext',
					'getDerivedStateFromProps',
					'componentWillMount',
					'UNSAFE_componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'UNSAFE_componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'UNSAFE_componentWillUpdate',
					'getSnapshotBeforeUpdate',
					'componentDidUpdate',
					'componentDidCatch',
					'componentWillUnmount',
				],
				rendering: [
					'/^render.+$/',
					'render',
				],
			},
			order: [
				'static-variables',
				'static-methods',
				'instance-variables',
				'lifecycle',
				'/^handle.+$/',
				'/^on.+$/',
				'getters',
				'setters',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'instance-methods',
				'everything-else',
				'rendering',
			],
		},
	],

	/**
	 * Disallow missing parentheses around multiline JSX
	 */
	'react/jsx-wrap-multilines': [
		'error',
		{
			arrow: 'parens-new-line',
			assignment: 'parens-new-line',
			condition: 'parens-new-line',
			declaration: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
			return: 'parens-new-line',
		},
	],

	/**
	 * Enforce proper position of the first property in JSX
	 */
	'react/jsx-first-prop-new-line': [
		'error',
		'multiline-multiprop',
	],

	/**
	 * Enforce or disallow spaces around equal signs in JSX attributes
	 */
	'react/jsx-equals-spacing': [
		'error',
		'never',
	],

	/**
	 * Enforce JSX indentation
	 * @deprecated
	 */
	'react/jsx-indent': [
		'off',
		'tab',
	],

	/**
	 * Disallow `target="_blank"` attribute without `rel="noreferrer"`
	 */
	'react/jsx-no-target-blank': [
		'error',
		{ enforceDynamicLinks: 'always' },
	],

	/**
	 * Disallow file extensions that may contain JSX
	 */
	'react/jsx-filename-extension': [
		'error',
		{
			extensions: [
				'.jsx',
				'.tsx',
			],
		},
	],

	/**
	 * Disallow comments from being inserted as text nodes
	 */
	'react/jsx-no-comment-textnodes': 'error',

	/**
	 * Disallow usage of the return value of ReactDOM.render
	 */
	'react/no-render-return-value': 'error',

	/**
	 * Enforce React components to have a shouldComponentUpdate method
	 */
	'react/require-optimization': [
		'off',
		{ allowDecorators: [] },
	],

	/**
	 * Disallow usage of findDOMNode
	 */
	'react/no-find-dom-node': 'error',

	/**
	 * Disallow certain props on components
	 */
	'react/forbid-component-props': [
		'off',
		{ forbid: [] },
	],

	/**
	 * Disallow certain elements
	 */
	'react/forbid-elements': [
		'off',
		{ forbid: [] },
	],

	/**
	 * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
	 */
	'react/no-danger-with-children': 'error',

	/**
	 * Disallow definitions of unused propTypes
	 */
	'react/no-unused-prop-types': [
		'error',
		{
			customValidators: [],
			skipShapeProps: true,
		},
	],

	/**
	 * Enforce style prop value is an object
	 */
	'react/style-prop-object': 'error',

	/**
	 * Disallow unescaped HTML entities from appearing in markup
	 */
	'react/no-unescaped-entities': 'error',

	/**
	 * Disallow passing of children as props
	 */
	'react/no-children-prop': 'error',

	/**
	 * Enforce whitespace in and around the JSX opening and closing brackets
	 */
	'react/jsx-tag-spacing': [
		'error',
		{
			afterOpening: 'never',
			beforeClosing: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		},
	],

	/**
	 * Enforce spacing before closing bracket in JSX DEPRECATED
	 * @deprecated
	 */
	'react/jsx-space-before-closing': [
		'off',
		'always',
	],

	/**
	 * Disallow usage of Array index in keys
	 */
	'react/no-array-index-key': 'error',

	/**
	 * Enforce a defaultProps definition for every prop that is not a required prop
	 */
	'react/require-default-props': [
		'error',
		{
			forbidDefaultForRequired: true,
		},
	],

	/**
	 * Disallow using another component's propTypes
	 */
	'react/forbid-foreign-prop-types': [
		'warn',
		{ allowInPropTypes: true },
	],

	/**
	 * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children
	 */
	'react/void-dom-elements-no-children': 'error',

	/**
	 * Enforce all defaultProps have a corresponding non-required PropType
	 */
	'react/default-props-match-prop-types': [
		'error',
		{ allowRequiredDefaults: false },
	],

	/**
	 * Disallow usage of shouldComponentUpdate when extending React.PureComponent
	 */
	'react/no-redundant-should-component-update': 'error',

	/**
	 * Disallow definitions of unused state
	 */
	'react/no-unused-state': 'error',

	/**
	 * Enforces consistent naming for boolean props
	 */
	'react/boolean-prop-naming': [
		'off',
		{
			message: '',
			propTypeNames: [
				'bool',
				'mutuallyExclusiveTrueProps',
			],
			rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
		},
	],

	/**
	 * Disallow common typos
	 */
	'react/no-typos': 'error',

	/**
	 * Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
	 */
	'react/jsx-curly-brace-presence': [
		'error',
		{ children: 'never', props: 'never' },
	],

	/**
	 * Require one JSX element per line
	 */
	'react/jsx-one-expression-per-line': [
		'error',
		{ allow: 'single-child' },
	],

	/**
	 * Enforce consistent usage of destructuring assignment of props, state, and context
	 */
	'react/destructuring-assignment': [
		'error',
		'always',
	],

	/**
	 * Disallow when this.state is accessed within setState
	 */
	'react/no-access-state-in-setstate': 'error',

	/**
	 * Disallow usage of `button` elements without an explicit `type` attribute
	 */
	'react/button-has-type': [
		'error',
		{
			button: true,
			reset: false,
			submit: true,
		},
	],

	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	 */
	'react/jsx-child-element-spacing': 'off',

	/**
	 * Disallow `this` from being used in stateless functional components
	 */
	'react/no-this-in-sfc': 'error',

	/**
	 * Enforce JSX maximum depth
	 */
	'react/jsx-max-depth': 'off',

	/**
	 * Disallow multiple spaces between inline JSX props
	 */
	'react/jsx-props-no-multi-spaces': 'error',

	/**
	 * Disallow usage of unsafe lifecycle methods
	 */
	'react/no-unsafe': 'off',

	/**
	 * Enforce shorthand or standard form for React fragments
	 */
	'react/jsx-fragments': [
		'error',
		'syntax',
	],

	/**
	 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
	 */
	'react/jsx-curly-newline': [
		'error',
		{
			multiline: 'consistent',
			singleline: 'consistent',
		},
	],

	/**
	 * Enforce class component state initialization style
	 */
	'react/state-in-constructor': [
		'error',
		'always',
	],

	/**
	 * Enforces where React component static properties should be positioned.
	 */
	'react/static-property-placement': [
		'error',
		'property assignment',
	],

	/**
	 * Disallow JSX prop spreading
	 */
	'react/jsx-props-no-spreading': [
		'error',
		{
			custom: 'enforce',
			exceptions: [],
			explicitSpread: 'ignore',
			html: 'enforce',
		},
	],

	/**
	 * Enforce that props are read-only
	 */
	'react/prefer-read-only-props': 'off',

	/**
	 * Disallow usage of `javascript:` URLs
	 */
	'react/jsx-no-script-url': [
		'error',
		[
			{
				name: 'Link',
				props: [
					'to',
				],
			},
		],
	],

	/**
	 * Disallow unnecessary fragments
	 */
	'react/jsx-no-useless-fragment': 'error',

	/**
	 * Prevent adjacent inline elements not separated by whitespace
	 */
	'react/no-adjacent-inline-elements': 'off',

	/**
	 * Enforce a specific function type for function components
	 */
	'react/function-component-definition': [
		'error',
		{
			namedComponents: [
				'arrow-function',
				'arrow-function',
			],
			unnamedComponents: 'arrow-function',
		},
	],

	/**
	 *  Enforce a new line after jsx elements and expressions
	 */
	'react/jsx-newline': 'off',

	/**
	 * Prevent react contexts from taking non-stable values
	 */
	'react/jsx-no-constructed-context-values': 'error',

	/**
	 * Disallow creating unstable components inside components
	 */
	'react/no-unstable-nested-components': 'error',

	/**
	 * Enforce that namespaces are not used in React elements
	 */
	'react/no-namespace': 'error',

	/**
	 * Prefer exact proptype definitions
	 */
	'react/prefer-exact-props': 'error',

	/**
	 * Lifecycle methods should be methods on the prototype, not class fields
	 */
	'react/no-arrow-function-lifecycle': 'error',

	/**
	 * Prevent usage of invalid attributes
	 */
	'react/no-invalid-html-attribute': 'error',

	/**
	 * Prevent declaring unused methods of component class
	 */
	'react/no-unused-class-component-methods': 'error',

	/**
	 * Ensure destructuring and symmetric naming of useState hook value and setter variables
	 */
	'react/hook-use-state': 'off',

	/**
	 * Enforce sandbox attribute on iframe elements
	 */
	'react/iframe-missing-sandbox': 'off',

	/**
	 * Prevent problematic leaked values from being rendered
	 */
	'react/jsx-no-leaked-render': 'off',

	/**
	 * Disallow usage of referential-type variables as default param in functional component
	 */
	'react/no-object-type-as-default-prop': 'off',

	/**
	 * Enforce defaultProps declarations alphabetical sorting
	 */
	'react/sort-default-props': [
		'off',
		{
			ignoreCase: false,
		},
	],

	/**
	 * Require all forwardRef components include a ref parameter
	 */
	'react/forward-ref-uses-ref': 'off',

	/**
	 * Disallow JSX prop spreading the same identifier multiple times
	 */
	'react/jsx-props-no-spread-multi': 'off',
};

export { react };
