# @chronoverse-eslint/functional

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/functional.svg)](https://www.npmjs.com/package/@chronoverse-eslint/functional)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Modern ESLint configuration for functional programming best practices, enforcing immutability and side-effect free patterns.

## Features

- 🧩 Functional programming patterns
- 🛡️ Immutable data structures
- 🔍 Pure function enforcement
- ⚠️ Side-effect detection
- 🔄 No mutations rules
- 🚫 No loops or statements
- ✅ Expression-based coding
- 🔒 No object mutations

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
import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';

export default [
  // For JavaScript projects
  ...functionalJs,
  // For TypeScript projects
  ...functionalTs,
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import { functionalJs, functionalTs } from '@chronoverse-eslint/functional';

export default defineConfig([
  // Your custom rules here
  functionalJs,
  functionalTs,
]);
```

## Requirements

- ESLint >=9.26.0
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
