# @chronoverse-eslint/javascript

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/javascript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/javascript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.28.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## Installation

```bash
npm install -D @chronoverse-eslint/javascript eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/javascript eslint
pnpm add -D @chronoverse-eslint/javascript eslint
bun add -D @chronoverse-eslint/javascript eslint
```

## Usage

Add to your ESLint configuration:

```javascript
import { javascript } from '@chronoverse-eslint/javascript';

import { javascript } from '@chronoverse-eslint/javascript/javascript-base';

const eslintConfig = [
	...javascript,
];

export default eslintConfig
```

Or with `defineConfig`:

```javascript
import { javascript } from '@chronoverse-eslint/javascript';

import { javascript } from '@chronoverse-eslint/javascript/javascript-base';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig(javascript);

export default eslintConfig;

const eslintConfig = defineConfig([
	javascript,
]);

export default eslintConfig;
```

Or `only-rules`:

```javascript
import { bestPractice } from '@chronoverse-eslint/javascript/best-practice';
import { errors } from '@chronoverse-eslint/javascript/errors';
import { es6 } from '@chronoverse-eslint/javascript/es6';
import { node } from '@chronoverse-eslint/javascript/node';
import { strict } from '@chronoverse-eslint/javascript/strict';
import { stylistic } from '@chronoverse-eslint/javascript/stylistic';
import { variables } from '@chronoverse-eslint/javascript/variables';

import { bestPractice, errors, es6, node, strict, stylistic, variables } from '@chronoverse-eslint/javascript';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	{
		rules: {
			...bestPractice,
			...errors,
			...es6,
			...node,
			...strict,
			...stylistic,
			...variables,
		},
	},
]);

export default eslintConfig;
```

## Requirements

- ESLint ≥ 9.28.0
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.14

---

MIT © Chronoverse
