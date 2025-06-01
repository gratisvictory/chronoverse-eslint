# @chronoverse-eslint/functional

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/functional.svg)](https://www.npmjs.com/package/@chronoverse-eslint/functional)
[![ESLint](https://img.shields.io/badge/ESLint-v9.28.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## Installation

```bash
npm install -D @chronoverse-eslint/functional eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/functional eslint
pnpm add -D @chronoverse-eslint/functional eslint
bun add -D @chronoverse-eslint/functional eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
import { functionalTs } from '@chronoverse-eslint/functional/functional-ts';

import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';

const eslintConfig = [
	...functionalJs,
	...functionalTs,
];

export default eslintConfig;
```

Or with `defineConfig`:

```javascript
import { functionalJs } from '@chronoverse-eslint/functional/functional-js';
import { functionalTs } from '@chronoverse-eslint/functional/functional-ts';

import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	functionalJs,
	functionalTs,
]);

export default eslintConfig;
```

## Requirements

- ESLint >=9.28.0
- Bun >=1.2.14
- Node.js >=23.11.0

---

MIT © Chronoverse
