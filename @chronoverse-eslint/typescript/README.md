# @chronoverse-eslint/typescript

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/typescript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/typescript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.3-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Comprehensive ESLint configuration for TypeScript projects, focusing on type safety, code quality, and best practices.

## Features

- 🛡️ TypeScript type checking and safety
- 🧩 Functional programming style
- 📚 TSDoc documentation rules
- ⚠️ Strict type checking
- 🎨 Stylistic rules
- 🔒 Safe TypeScript practices
- 🔄 Modern TypeScript features
- 📏 Code consistency rules

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

export default [
  // For TypeScript projects
  ...typescript,
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import { typescript } from '@chronoverse-eslint/typescript';

export default defineConfig([
  // Your custom rules here
  typescript,
]);
```

## Requirements

- ESLint >=9.26.0
- TypeScript >=5.8.3
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
