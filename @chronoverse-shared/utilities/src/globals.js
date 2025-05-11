import globals from 'globals';

/**
 * Shared global variables for all environments.
 * @type {import('eslint').Linter.Globals}
 */
const sharedGlobals = {
	/** Browser environment globals (e.g., window, document, etc.) */
	...globals.browser,

	/** Node.js environment globals (e.g., process, __dirname, etc.) */
	...globals.node,

	/** ECMAScript 2022 globals (e.g., globalThis, atob, etc.) */
	...globals.es2022,

	/** Service Worker API globals (e.g., self, caches, etc.) */
	...globals.serviceworker,

	/** Built-in JavaScript objects (e.g., Object, Array, Promise, etc.) */
	...globals.builtin,

	/** The console object for logging/debugging */
	console: 'readonly',

	/** The document object representing the HTML document */
	document: 'readonly',

	/** The navigator object for browser environment info */
	navigator: 'readonly',

	/** The global window object in browsers */
	window: 'readonly',

	/** The globalThis object — standard global object across environments */
	globalThis: 'readonly',

	/** The fetch API for making HTTP requests */
	fetch: 'readonly',

	/** The structuredClone function for deep cloning objects (ES2021+) */
	structuredClone: 'readonly',

	/** The queueMicrotask function for scheduling microtasks */
	queueMicrotask: 'readonly',

	/** The setTimeout function for scheduling delayed execution */
	setTimeout: 'readonly',

	/** The clearTimeout function to cancel timeouts */
	clearTimeout: 'readonly',

	/** The setInterval function for repeated execution */
	setInterval: 'readonly',

	/** The clearInterval function to cancel intervals */
	clearInterval: 'readonly',

	/** The AbortController class used to cancel async operations */
	AbortController: 'readonly',

	/** The AbortSignal interface for controlling abortable operations */
	AbortSignal: 'readonly',

	/** The TextEncoder class for encoding strings into Uint8Arrays */
	TextEncoder: 'readonly',

	/** The TextDecoder class for decoding Uint8Arrays into strings */
	TextDecoder: 'readonly',

	/** The URL and URLSearchParams classes for URL handling */
	URL: 'readonly',
	URLSearchParams: 'readonly',

	/** The crypto API for secure random values, etc. */
	crypto: 'readonly',
};

export { sharedGlobals };
