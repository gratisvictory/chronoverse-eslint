# @chronoverse-eslint/stylistic

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/stylistic.svg)](https://www.npmjs.com/package/@chronoverse-eslint/stylistic)
[![ESLint](https://img.shields.io/badge/ESLint-v9.28.0-4B32C3.svg)](https://eslint.org)
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
import { stylisticJs } from '@chronoverse-eslint/stylistic/stylistic-js';
import { stylisticTs } from '@chronoverse-eslint/stylistic/stylistic-ts';
import { stylisticJsx } from '@chronoverse-eslint/stylistic/stylistic-jsx';
import { stylisticPlus } from '@chronoverse-eslint/stylistic/stylistic-plus';

import { stylisticJs, stylisticTs, stylisticJsx, stylisticPlus } from '@chronoverse-eslint/stylistic';

const eslintConfig = [
	...stylisticJs,
	...stylisticTs,
	...stylisticJsx,
	...stylisticPlus,
];

export default eslintConfig;
```

Or use `defineConfig` with all stylistic rules:

```javascript
import { stylisticJs } from '@chronoverse-eslint/stylistic/stylistic-js';
import { stylisticTs } from '@chronoverse-eslint/stylistic/stylistic-ts';
import { stylisticJsx } from '@chronoverse-eslint/stylistic/stylistic-jsx';
import { stylisticPlus } from '@chronoverse-eslint/stylistic/stylistic-plus';

import { stylisticJs, stylisticTs, stylisticJsx, stylisticPlus } from '@chronoverse-eslint/stylistic';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	stylisticJs,
	stylisticTs,
	stylisticJsx,
	stylisticPlus,
]);

export default eslintConfig;
```

Or `only-rules`:

```javascript
import { javascript } from '@chronoverse-eslint/stylistic/javascript';
import { jsx } from '@chronoverse-eslint/stylistic/jsx';
import { plus } from '@chronoverse-eslint/stylistic/plus';
import { typescript } from '@chronoverse-eslint/stylistic/typescript';

import { javascript, jsx, plus, typescript } from '@chronoverse-eslint/stylistic';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	{
		rules: {
			...javascript,
			...jsx,
			...plus,
			...typescript,
		},
	},
]);

export default eslintConfig;
```

## Available Rule Sets

- **stylisticJs** - JavaScript code formatting and style rules
- **stylisticTs** - TypeScript-specific style rules
- **stylisticJsx** - JSX/React syntax style rules
- **stylisticPlus** - Additional style enhancements

## Requirements

- ESLint ≥ 9.28.0
- TypeScript >=5.8.3
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.14

---

MIT © Chronoverse
