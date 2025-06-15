import { bracketsRules } from './brackets-rules';
import { commasRules } from './commas-rules';
import { commentsRules } from './comments-rules';
import { disallowRules } from './disallow-rules';
import { indentRules } from './indent-rules';
import { jsxRules } from './jsx-rules';
import { lineBreaksRules } from './line-breaks-rules';
import { miscRules } from './misc-rules';
import { operatorsRules } from './operators-rules';
import { quotesRules } from './quotes-rules';
import { semisRules } from './semis-rules';
import { spacingRules } from './spacing-rules';
import { typesRules } from './types-rules';

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
