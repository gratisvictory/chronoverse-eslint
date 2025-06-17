# @chronoverse-eslint/typescript

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/typescript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/typescript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.29.0-4B32C3.svg)](https://eslint.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.3-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

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
import { typescript } from '@chronoverse-eslint/typescript/typescript-base';

const eslintConfig = [
	...typescript,
];

export default eslintConfig
```

Or with `defineConfig`:

```javascript
import { typescript } from '@chronoverse-eslint/typescript/typescript-base';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig(typescript);

export default eslintConfig;

const eslintConfig = defineConfig([
	typescript,
]);

export default eslintConfig;
```

Or `only-rules`:

```javascript
import { consistentRules } from '@chronoverse-eslint/typescript/consistent-rules';
import { extensionRules } from '@chronoverse-eslint/typescript/extension-rules';
import { tsSafeRules } from '@chronoverse-eslint/typescript/safe-rules';
import { tsdocRules } from '@chronoverse-eslint/typescript/tsdoc-rules';
import { typescriptRules } from '@chronoverse-eslint/typescript/typescript-rules';
import { typescriptTypeCheckRules } from '@chronoverse-eslint/typescript/typescript-type-check-rules';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	{
		rules: {
			...consistentRules,
			...extensionRules,
			...tsSafeRules,
			...tsdocRules,
			...typescriptRules,
			...typescriptTypeCheckRules,
		},
	},
]);

export default eslintConfig;
```

## Requirements

- ESLint >=9.29.0
- TypeScript >=5.8.3
- Bun >=1.2.16
- Node.js >=23.11.0

---

MIT © Chronoverse
