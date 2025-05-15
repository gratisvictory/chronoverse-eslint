# Chronoverse ESLint

[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

Comprehensive suite of ESLint configurations for modern JavaScript and TypeScript projects, with support for React, Next.js, and various best practices.

## Packages

- [@chronoverse-eslint/eslint-config](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/eslint-config) - All-in-one ESLint configuration
- [@chronoverse-eslint/javascript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/javascript) - JavaScript configuration
- [@chronoverse-eslint/typescript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/typescript) - TypeScript configuration
- [@chronoverse-eslint/react](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/react) - React configuration
- [@chronoverse-eslint/functional](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/functional) - Functional programming rules
- [@chronoverse-eslint/stylistic](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/stylistic) - Code style and formatting
- [@chronoverse-eslint/prettier](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse-eslint/prettier) - Prettier integration

## Features

- ✨ Modern JavaScript and TypeScript support
- ⚛️ React and Next.js configurations
- 🧩 Functional programming style
- 🛡️ Security rules
- 📚 JSDoc documentation rules
- 🔍 Comprehensive best practices
- ⚡ Performance optimization
- ♿ Accessibility (a11y) rules
- 🎨 CSS and stylistic rules
- 🔄 Git integration

## Installation

```bash
npm install -D @chronoverse-eslint/eslint-config eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/eslint-config eslint
pnpm add -D @chronoverse-eslint/eslint-config eslint
bun add -D @chronoverse-eslint/eslint-config eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import {
  vanillaJs,
  vanillaTs,
  reactJsx,
  reactTsx,
  css,
  json,
  security
} from '@chronoverse-eslint/eslint-config';

export default [
  // For JavaScript projects
  ...vanillaJs,
  // For TypeScript projects
  ...vanillaTs,
  // For React JSX projects
  ...reactJsx,
  // For React TSX projects
  ...reactTsx,
  // Additional presets as needed
  ...css,
  ...json,
  ...security
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import {
  vanillaJs,
  vanillaTs,
  reactJsx,
  reactTsx
} from '@chronoverse-eslint/eslint-config';

export default defineConfig([
  // Base JavaScript
  vanillaJs,
  // Base TypeScript
  vanillaTs,
  // React JSX
  reactJsx,
  // React TSX
  reactTsx
]);
```

## Requirements

- ESLint >=9.26.0
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
