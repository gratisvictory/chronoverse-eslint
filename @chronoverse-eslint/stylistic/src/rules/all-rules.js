import { bracketsRules } from './brackets-rules.js';
import { commasRules } from './commas-rules.js';
import { commentsRules } from './comments-rules.js';
import { disallowRules } from './disallow-rules.js';
import { indentRules } from './indent-rules.js';
import { jsxRules } from './jsx-rules.js';
import { lineBreaksRules } from './line-breaks-rules.js';
import { miscRules } from './misc-rules.js';
import { operatorsRules } from './operators-rules.js';
import { quotesRules } from './quotes-rules.js';
import { semisRules } from './semis-rules.js';
import { spacingRules } from './spacing-rules.js';
import { typesRules } from './types-rules.js';

/**
 * All stylistic rules for ESLint, migrated from eslint core.
 * @see https://eslint.style/rules?
 * @type {import('eslint').Linter.Config['rules']}
 */
const allRules = {
	...spacingRules,
	...lineBreaksRules,
	...bracketsRules,
	...indentRules,
	...quotesRules,
	...commasRules,
	...semisRules,
	...operatorsRules,
	...commentsRules,
	...jsxRules,
	...typesRules,
	...disallowRules,
	...miscRules,
};

export { allRules };
