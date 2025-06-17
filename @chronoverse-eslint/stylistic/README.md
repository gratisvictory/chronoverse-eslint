# @chronoverse-eslint/stylistic

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/stylistic.svg)](https://www.npmjs.com/package/@chronoverse-eslint/stylistic)
[![ESLint](https://img.shields.io/badge/ESLint-v9.29.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## Installation

```bash
npm install -D @chronoverse-eslint/stylistic eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/stylistic eslint
pnpm add -D @chronoverse-eslint/stylistic eslint
bun add -D @chronoverse-eslint/stylistic eslint
```

## Usage

Add to your ESLint configuration:

```javascript
import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';

const eslintConfig = [
	...stylistic,
];

export default eslintConfig;
```

Or use `defineConfig` with all stylistic rules:

```javascript
import { stylistic } from '@chronoverse-eslint/stylistic/stylistic-base';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	stylistic,
]);

export default eslintConfig;
```

Or `only-rules`:

```javascript
// rules separately
import { bracketsRules } from '@chronoverse-eslint/stylistic/brackets-rules';
import { commasRules } from '@chronoverse-eslint/stylistic/commas-rules';
import { commentsRules } from '@chronoverse-eslint/stylistic/comments-rules';
import { disallowRules } from '@chronoverse-eslint/stylistic/disallow-rules';
import { indentRules } from '@chronoverse-eslint/stylistic/indent-rules';
import { jsxRules } from '@chronoverse-eslint/stylistic/jsx-rules';
import { lineBreaksRules } from '@chronoverse-eslint/stylistic/line-breaks-rules';
import { miscRules } from '@chronoverse-eslint/stylistic/misc-rules';
import { operatorsRules } from '@chronoverse-eslint/stylistic/operators-rules';
import { quotesRules } from '@chronoverse-eslint/stylistic/quotes-rules';
import { semisRules } from '@chronoverse-eslint/stylistic/semis-rules';
import { spacingRules } from '@chronoverse-eslint/stylistic/spacing-rules';
import { typesRules } from '@chronoverse-eslint/stylistic/types-rules';
// all rules
import { allRules } from '@chronoverse-eslint/stylistic/all-rules';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	{
		rules: {
            // all rules
			...allRules,
            // rules separately
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
		},
	},
]);

export default eslintConfig;
```

## Requirements

- ESLint ≥ 9.29.0
- TypeScript >=5.8.3
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.16

---

MIT © Chronoverse
