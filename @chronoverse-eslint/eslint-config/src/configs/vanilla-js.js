import { functionalJs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { stylisticJs, stylisticPlus } from '@chronoverse-eslint/stylistic';
import { defineConfig } from 'eslint/config';
import { comments } from '../presets/comments.js';
import { dependency } from '../presets/dependency.js';
import { jsdocJs } from '../presets/jsdoc.js';
import { json } from '../presets/json.js';
import { mutation } from '../presets/mutation.js';
import { node } from '../presets/node.js';
import { perfectionist } from '../presets/perfectionist.js';
import { promise } from '../presets/promise.js';
import { regexp } from '../presets/regexp.js';
import { security } from '../presets/security.js';
import { unicornX } from '../presets/unicorn-x.js';

const vanillaJs = defineConfig([
	javascript,
	stylisticJs,
	stylisticPlus,
	perfectionist,
	functionalJs,
	comments,
	dependency,
	jsdocJs,
	mutation,
	promise,
	regexp,
	security,
	unicornX,
	node,
	json,
]);

export { vanillaJs };
