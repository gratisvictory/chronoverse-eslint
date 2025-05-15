import { functionalTs } from '@chronoverse-eslint/functional';
import { javascript } from '@chronoverse-eslint/javascript';
import { stylisticJs, stylisticPlus, stylisticTs } from '@chronoverse-eslint/stylistic';
import { typescript } from '@chronoverse-eslint/typescript';
import { defineConfig } from 'eslint/config';
import { comments } from '../presets/comments.js';
import { dependency } from '../presets/dependency.js';
import { jsdocTs } from '../presets/jsdoc.js';
import { json } from '../presets/json.js';
import { mutation } from '../presets/mutation.js';
import { node } from '../presets/node.js';
import { perfectionist } from '../presets/perfectionist.js';
import { promise } from '../presets/promise.js';
import { regexp } from '../presets/regexp.js';
import { security } from '../presets/security.js';
import { unicornX } from '../presets/unicorn-x.js';

const vanillaTs = defineConfig([
	javascript,
	typescript,
	stylisticJs,
	stylisticPlus,
	perfectionist,
	functionalTs,
	stylisticTs,
	comments,
	dependency,
	jsdocTs,
	mutation,
	promise,
	regexp,
	security,
	unicornX,
	node,
	json,
]);

export { vanillaTs };
