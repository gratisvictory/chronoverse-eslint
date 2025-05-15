# @chronoverse-eslint/react

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/react.svg)](https://www.npmjs.com/package/@chronoverse-eslint/react)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![React](https://img.shields.io/badge/React-v19.1.0-61DAFB.svg)](https://reactjs.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Comprehensive ESLint configuration for React projects, supporting both JavaScript and TypeScript, with a focus on best practices, accessibility, and performance.

## Features

- ✨ React and React Hooks best practices
- ♿ Accessibility (a11y) rules
- 🚀 React Compiler integration
- 📝 TypeScript support
- 🔄 Modern JavaScript features
- 🌐 Browser and Service Worker globals
- 🧩 JSX syntax support
- ⚡ Performance optimization rules

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
import {
  react,
  jsxA11y,
  reactHooks,
  reactCompiler,
  eslintReactJsx,
  eslintReactTsx
} from '@chronoverse-eslint/react';

export default [
  // Core React rules
  ...react,
  // Accessibility rules
  ...jsxA11y,
  // React Hooks rules
  ...reactHooks,
  // React Compiler support
  ...reactCompiler,
  // For React JavaScript projects
  ...eslintReactJsx,
  // For React TypeScript projects
  ...eslintReactTsx,
];
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import {
  react,
  jsxA11y,
  reactHooks,
  reactCompiler,
  eslintReactJsx,
  eslintReactTsx
} from '@chronoverse-eslint/react';

export default defineConfig([
  react,
  jsxA11y,
  reactHooks,
  reactCompiler,
  eslintReactJsx,
  eslintReactTsx,
  // Your custom rules here
]);
```

## Requirements

- ESLint >=9.26.0
- React >=19.1.0
- TypeScript >=5.8.3 (for TypeScript support)
- Bun >=1.2.13
- Node.js >=23.11.0

---

MIT © Chronoverse
