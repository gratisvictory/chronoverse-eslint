# @chronoverse-eslint/eslint-config

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/eslint-config.svg)](https://www.npmjs.com/package/@chronoverse-eslint/eslint-config)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

All-in-one ESLint configuration for modern JavaScript, TypeScript, React, and Next.js projects with comprehensive best practices and security rules.

## Features

- ✨ Modern JavaScript and TypeScript support
- ⚛️ React and Next.js configurations
- 🛡️ Security rules
- 🧩 Functional programming style
- 📏 Code quality and maintainability
- 🔄 Git integration
- 🎨 CSS and Tailwind support
- 📚 JSDoc documentation rules
- 🔍 Comprehensive best practices
- ⚡ Performance optimization

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
  next,
  jsdocJs,
  jsdocTs,
  security,
  dependency,
  unicornX
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
  ...security,
  ...json
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import {
  vanillaJs,
  vanillaTs,
  reactJsx,
  reactTsx,
  css
} from '@chronoverse-eslint/eslint-config';

export default defineConfig([
  // Base JavaScript
  vanillaJs,
  // Base TypeScript
  vanillaTs,
  // React JSX
  reactJsx,
  // React TSX
  reactTsx,
  // CSS support
  css
]);
```

## Available Configs and Presets

The package provides several configs and presets:

### Main Configs

- `vanillaJs` - Base JavaScript configuration
- `vanillaTs` - Base TypeScript configuration
- `reactJsx` - React JavaScript configuration
- `reactTsx` - React TypeScript configuration

### Presets

- `css` - CSS configuration
- `json` - JSON configuration
- `next` - Next.js integration
- `jsdocJs` - JSDoc rules for JavaScript
- `jsdocTs` - JSDoc rules for TypeScript
- `security` - Security rules
- `dependency` - Dependency management rules
- `comments` - ESLint comments rules
- `mutation` - Better mutation rules
- `perfectionist` - Code organization rules
- `promise` - Promise handling rules
- `regexp` - Regular expression rules
- `unicornX` - Extended unicorn rules
- `node` - Node.js specific rules

## Requirements

- ESLint >=9.26.0
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
