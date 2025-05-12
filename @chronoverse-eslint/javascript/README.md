# @chronoverse-eslint/javascript

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/javascript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/javascript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

Modern ESLint configuration for JavaScript projects focused on best practices and performance optimization.

## Features

- Modern JavaScript (ES2022+) support
- Performance-focused rules
- Browser and Node.js environments
- Functional programming style
- Comprehensive best practices

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
// eslint.config.js
import { javascript } from '@chronoverse-eslint/javascript';

export default [
  ...javascript,
  // Your custom rules here
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import { javascript } from '@chronoverse-eslint/javascript';

export default defineConfig(javascript);
// or
export default defineConfig([
  javascript,
  // Your custom rules here
]);
```

## Requirements

- ESLint ≥ 9.26.0
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.11

---

MIT © Chronoverse
