# @chronoverse-eslint/typescript

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/typescript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/typescript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.3-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Comprehensive ESLint configuration for TypeScript projects, focusing on type safety, code quality, and best practices.

## Installation

```bash
npm install -D @chronoverse-eslint/typescript eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/typescript eslint
pnpm add -D @chronoverse-eslint/typescript eslint
bun add -D @chronoverse-eslint/typescript eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import { typescript } from '@chronoverse-eslint/typescript';

import { typescript } from '@chronoverse-eslint/typescript/config';

const eslintConfig = [
	...typescript,
];

export default eslintConfig
```

Or with `defineConfig`:

```javascript
import { typescript } from '@chronoverse-eslint/typescript';

import { typescript } from '@chronoverse-eslint/typescript/config';

import { defineConfig } from 'eslint/config';

export default defineConfig(typescript);

export default defineConfig([
	typescript,
]);
```

Or `only-rules`:

```javascript
import { consistent } from '@chronoverse-eslint/typescript/consistent';
import { extension } from '@chronoverse-eslint/typescript/extension';
import { safe } from '@chronoverse-eslint/typescript/safe';
import { tsdoc } from '@chronoverse-eslint/typescript/tsdoc';

import { consistent, extension, safe, tsdoc } from '@chronoverse-eslint/typescript';

import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		rules: {
			...consistent,
			...extension,
			...safe,
			...tsdoc,
		},
	},
]);
```

## Requirements

- ESLint >=9.28.0
- TypeScript >=5.8.3
- Bun >=1.2.14
- Node.js >=23.11.0

---

MIT © Chronoverse
