# @chronoverse-eslint/presets

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/presets.svg)](https://www.npmjs.com/package/@chronoverse-eslint/presets)
[![ESLint](https://img.shields.io/badge/ESLint-v9.29.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## Available Presets

- **node** - Node.js specific rules
- **comments** - ESLint comments management
- **css** - CSS linting rules
- **dependency** - Dependency management rules
- **jsdoc** - JSDoc documentation standards
- **json** - JSON file validation
- **mutation** - Immutability enforcement
- **next** - Next.js specific rules
- **perfectionist** - Code style perfection
- **prettierPlugin** - Prettier integration
- **prettierConfig** - Prettier disabled
- **promise** - Promise handling best practices
- **regexp** - Regular expression validation
- **security** - Security-focused rules
- **unicorn** - Unicorn plugin rules

## Installation

```bash
npm install -D @chronoverse-eslint/presets eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/presets eslint
pnpm add -D @chronoverse-eslint/presets eslint
bun add -D @chronoverse-eslint/presets eslint
```

## Usage

Add to your ESLint configuration:

```javascript
import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { next } from '@chronoverse-eslint/presets/next';
import { node } from '@chronoverse-eslint/presets/node';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettierConfig } from '@chronoverse-eslint/presets/prettier-config';
import { prettierPlugin } from '@chronoverse-eslint/presets/prettier-plugin';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { security } from '@chronoverse-eslint/presets/security';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';

const eslintConfig = [
	...comments,
	...css,
	...dependency,
	...jsdoc,
	...json,
	...mutation,
	...next,
	...node,
	...perfectionist,
	...prettierPlugin,
	...promise,
	...regexp,
	...security,
	...unicorn,
	...prettierConfig,
];

export default eslintConfig;
```

Or with `defineConfig`:

```javascript
import { comments } from '@chronoverse-eslint/presets/comments';
import { css } from '@chronoverse-eslint/presets/css';
import { dependency } from '@chronoverse-eslint/presets/dependency';
import { jsdoc } from '@chronoverse-eslint/presets/jsdoc';
import { json } from '@chronoverse-eslint/presets/json';
import { mutation } from '@chronoverse-eslint/presets/mutation';
import { next } from '@chronoverse-eslint/presets/next';
import { node } from '@chronoverse-eslint/presets/node';
import { perfectionist } from '@chronoverse-eslint/presets/perfectionist';
import { prettierConfig } from '@chronoverse-eslint/presets/prettier-config';
import { prettierPlugin } from '@chronoverse-eslint/presets/prettier-plugin';
import { promise } from '@chronoverse-eslint/presets/promise';
import { regexp } from '@chronoverse-eslint/presets/regexp';
import { security } from '@chronoverse-eslint/presets/security';
import { unicorn } from '@chronoverse-eslint/presets/unicorn';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	comments,
	css,
	dependency,
	jsdoc,
	json,
	mutation,
	next,
	node,
	perfectionist,
	prettierPlugin,
	promise,
	regexp,
	security,
	unicorn,
	prettierConfig,
]);

export default eslintConfig;
```

## Requirements

- ESLint ≥ 9.29.0
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.16

---

MIT © Chronoverse
