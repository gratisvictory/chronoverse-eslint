/**
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 * @type {import('eslint').Linter.Config['rules']}
 */
const a11yRules = {
	/**
	 * Enforce emojis are wrapped in `<span>` and provide screen reader access.
	 * @deprecated
	 */
	'jsx-a11y/accessible-emoji': 'off',

	/**
	 * Enforce all elements that require alternative text have meaningful information to relay back to end user.
	 */
	'jsx-a11y/alt-text': [
		'error',
		{
			area: [],
			elements: [
				'img',
				'object',
				'area',
				'input[type="image"]',
			],
			img: [],
			'input[type="image"]': [],
			object: [],
		},
	],

	/**
	 * Enforce all anchors to contain accessible content.
	 */
	'jsx-a11y/anchor-has-content': ['error', { components: [] }],

	/**
	 * Enforce all anchors are valid, navigable elements
	 */
	'jsx-a11y/anchor-is-valid': [
		'error',
		{
			aspects: [
				'noHref',
				'invalidHref',
				'preferButton',
			],
			components: ['Link'],
			specialLink: ['to'],
		},
	],

	/**
	 * Enforce elements with aria-activedescendant are tabbable.
	 */
	'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

	/**
	 * Enforce all `aria-*` props are valid.
	 */
	'jsx-a11y/aria-props': 'error',

	/**
	 * Enforce ARIA state and property values are valid.
	 */
	'jsx-a11y/aria-proptypes': 'error',

	/**
	 * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
	 */
	'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],

	/**
	 * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
	 */
	'jsx-a11y/aria-unsupported-elements': 'error',

	/**
	 * Enforce that autocomplete attributes are used correctly.
	 */
	'jsx-a11y/autocomplete-valid': [
		'off',
		{
			inputComponents: [],
		},
	],

	/**
	 * Enforce a clickable non-interactive element has at least one keyboard event listener.
	 */
	'jsx-a11y/click-events-have-key-events': 'error',

	/**
	 * Enforce that a control (an interactive element) has a text label.
	 */
	'jsx-a11y/control-has-associated-label': [
		'error',
		{
			controlComponents: [],
			depth: 5,
			ignoreElements: [
				'audio',
				'canvas',
				'embed',
				'input',
				'textarea',
				'tr',
				'video',
			],
			ignoreRoles: [
				'grid',
				'listbox',
				'menu',
				'menubar',
				'radiogroup',
				'row',
				'tablist',
				'toolbar',
				'tree',
				'treegrid',
			],
			labelAttributes: ['label'],
		},
	],

	/**
	 * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
	 */
	'jsx-a11y/heading-has-content': [
		'error',
		{
			components: [''],
		},
	],

	/**
	 * Enforce `<html>` element has `lang` prop.
	 */
	'jsx-a11y/html-has-lang': 'error',

	/**
	 * Enforce iframe elements have a title attribute.
	 */
	'jsx-a11y/iframe-has-title': 'error',

	/**
	 * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
	 */
	'jsx-a11y/img-redundant-alt': 'error',

	/**
	 * Enforce that elements with interactive handlers like `onClick` must be focusable.
	 */
	'jsx-a11y/interactive-supports-focus': 'error',

	/**
	 * Enforce that a `label` tag has a text label and an associated control.
	 */
	'jsx-a11y/label-has-associated-control': [
		'error',
		{
			assert: 'both',
			controlComponents: [],
			depth: 25,
			labelAttributes: [],
			labelComponents: [],
		},
	],

	/**
	 * Enforce lang attribute has a valid value.
	 */
	'jsx-a11y/lang': 'error',

	/**
	 * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
	 */
	'jsx-a11y/media-has-caption': [
		'error',
		{
			audio: [],
			track: [],
			video: [],
		},
	],

	/**
	 * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
	 */
	'jsx-a11y/mouse-events-have-key-events': 'error',

	/**
	 * Prevent use of `accessKey`
	 */
	'jsx-a11y/no-access-key': 'error',

	/**
	 * Enforce autoFocus prop is not used.
	 */
	'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

	/**
	 * Enforce distracting elements are not used.
	 */
	'jsx-a11y/no-distracting-elements': [
		'error',
		{
			elements: ['marquee', 'blink'],
		},
	],

	/**
	 * Interactive elements should not be assigned non-interactive roles.
	 */
	'jsx-a11y/no-interactive-element-to-noninteractive-role': [
		'error',
		{
			tr: ['none', 'presentation'],
		},
	],

	/**
	 * Non-interactive elements should not be assigned mouse or keyboard event listeners.
	 */
	'jsx-a11y/no-noninteractive-element-interactions': [
		'error',
		{
			handlers: [
				'onClick',
				'onMouseDown',
				'onMouseUp',
				'onKeyPress',
				'onKeyDown',
				'onKeyUp',
			],
		},
	],

	/**
	 * Non-interactive elements should not be assigned interactive roles.
	 */
	'jsx-a11y/no-noninteractive-element-to-interactive-role': [
		'error',
		{
			li: [
				'menuitem',
				'option',
				'row',
				'tab',
				'treeitem',
			],
			ol: [
				'listbox',
				'menu',
				'menubar',
				'radiogroup',
				'tablist',
				'tree',
				'treegrid',
			],
			table: ['grid'],
			td: ['gridcell'],
			ul: [
				'listbox',
				'menu',
				'menubar',
				'radiogroup',
				'tablist',
				'tree',
				'treegrid',
			],
		},
	],

	/**
	 * `tabIndex` should only be declared on interactive elements.
	 */
	'jsx-a11y/no-noninteractive-tabindex': [
		'error',
		{
			allowExpressionValues: true,
			roles: ['tabpanel'],
			tags: [],
		},
	],

	/**
	 * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
	 * @deprecated
	 */
	'jsx-a11y/no-onchange': 'off',

	/**
	 * Enforce explicit role property is not the same as implicit/default role property on element.
	 */
	'jsx-a11y/no-redundant-roles': [
		'error',
		{
			nav: ['navigation'],
		},
	],

	/**
	 * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
	 */
	'jsx-a11y/no-static-element-interactions': [
		'error',
		{
			handlers: [
				'onClick',
				'onMouseDown',
				'onMouseUp',
				'onKeyPress',
				'onKeyDown',
				'onKeyUp',
			],
		},
	],

	/**
	 * Enforce that elements with ARIA roles must have all required attributes for that role.
	 */
	'jsx-a11y/role-has-required-aria-props': 'error',

	/**
	 * Enforce that elements with explicit or implicit roles defined contain
	 * only aria-* properties supported by that role.
	 */
	'jsx-a11y/role-supports-aria-props': 'error',

	/**
	 * Enforce `scope` prop is only used on `<th>` elements.
	 */
	'jsx-a11y/scope': 'error',

	/**
	 * Enforce `tabIndex` value is not greater than zero.
	 */
	'jsx-a11y/tabindex-no-positive': 'error',

	/**
	 * Enforce that `<label>` elements have the `htmlFor` prop.
	 * @deprecated
	 */
	'jsx-a11y/label-has-for': [
		'off',
		{
			allowChildren: false,
			components: [],
			required: {
				every: ['nesting', 'id'],
			},
		},
	],

	/**
	 * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
	 */
	'jsx-a11y/anchor-ambiguous-text': 'off',

	/**
	 * Disallow `aria-hidden="true"` from being set on focusable elements.
	 */
	'jsx-a11y/no-aria-hidden-on-focusable': 'off',

	/**
	 * Enforces using semantic DOM elements over the ARIA `role` property.
	 */
	'jsx-a11y/prefer-tag-over-role': 'off',
};

export { a11yRules };
