# @chronoverse-eslint/prettier

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/prettier.svg)](https://www.npmjs.com/package/@chronoverse-eslint/prettier)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-v3.5.3-F7B93E.svg)](https://prettier.io)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Seamless ESLint configuration for Prettier integration with automatic code formatting and consistent style for JavaScript and TypeScript projects.

## Features

- ✨ Seamless Prettier integration with ESLint
- 🔄 Automatic code formatting
- 🎨 Consistent code style across projects
- 🚫 Disables conflicting ESLint rules
- 🔍 Error reporting for formatting issues
- 📝 Works with both JavaScript and TypeScript
- 🔄 Compatible with modern JavaScript features

## Installation

```bash
npm install -D @chronoverse-eslint/prettier eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/prettier eslint
pnpm add -D @chronoverse-eslint/prettier eslint
bun add -D @chronoverse-eslint/prettier eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import { prettier } from '@chronoverse-eslint/prettier';

export default [
  // Your other ESLint configurations
  // Add Prettier at the very end
  ...prettier,
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import { prettier } from '@chronoverse-eslint/prettier';

export default defineConfig([
  // Your custom rules here
  // Add Prettier at the very end
  prettier,
]);
```

## Requirements

- ESLint >=9.26.0
- Prettier >=3.5.3
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
