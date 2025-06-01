# @chronoverse-eslint/react

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/react.svg)](https://www.npmjs.com/package/@chronoverse-eslint/react)
[![ESLint](https://img.shields.io/badge/ESLint-v9.28.0-4B32C3.svg)](https://eslint.org)
[![React](https://img.shields.io/badge/React-v19.1.0-61DAFB.svg)](https://reactjs.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## Installation

```bash
npm install -D @chronoverse-eslint/react eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/react eslint
pnpm add -D @chronoverse-eslint/react eslint
bun add -D @chronoverse-eslint/react eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import { eslintReactJsx } from '@chronoverse-eslint/react/eslint-react-jsx';
import { eslintReactTsx } from '@chronoverse-eslint/react/eslint-react-tsx';
import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';

import { eslintReactJsx, eslintReactTsx, jsxA11y, reactBase, reactCompiler, reactHooks } from '@chronoverse-eslint/react';

const eslintConfig = [
	...reactBase,
	...jsxA11y,
	...reactHooks,
	...reactCompiler,
	...eslintReactJsx,
	...eslintReactTsx,
];

export default eslintConfig;
```

Or with `defineConfig`:

```javascript
import { eslintReactJsx } from '@chronoverse-eslint/react/eslint-react-jsx';
import { eslintReactTsx } from '@chronoverse-eslint/react/eslint-react-tsx';
import { jsxA11y } from '@chronoverse-eslint/react/jsx-a11y';
import { reactBase } from '@chronoverse-eslint/react/react-base';
import { reactCompiler } from '@chronoverse-eslint/react/react-compiler';
import { reactHooks } from '@chronoverse-eslint/react/react-hooks';

import { eslintReactJsx, eslintReactTsx, jsxA11y, reactBase, reactCompiler, reactHooks } from '@chronoverse-eslint/react';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	reactBase,
	jsxA11y,
	reactHooks,
	reactCompiler,
	eslintReactJsx,
	eslintReactTsx,
]);

export default eslintConfig;
```

Or `only-rules`:

```javascript
import { reactRules } from '@chronoverse-eslint/react/react-rules';
import { a11y } from '@chronoverse-eslint/react/a11y-rules';

import { reactRules, a11y } from '@chronoverse-eslint/react';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	{
		rules: {
			...reactRules,
			...a11y,
		},
	},
]);

export default eslintConfig;
```

## Requirements

- ESLint >=9.28.0
- React >=19.1.0
- TypeScript >=5.8.3 (for TypeScript support)
- Bun >=1.2.14
- Node.js >=23.11.0

---

MIT © Chronoverse
