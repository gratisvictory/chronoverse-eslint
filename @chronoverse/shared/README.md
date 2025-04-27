# @chronoverse-eslint/shared

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/shared.svg)](https://www.npmjs.com/package/@chronoverse-eslint/shared)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Shared utilities and constants for @chronoverse-eslint packages.

## Features

- Common file patterns and exclusions
- Shared ESLint rule configurations
- Utility constants and options

## Installation

```bash
npm install -D @chronoverse-eslint/shared
# or
yarn add -D @chronoverse-eslint/shared
# or
pnpm add -D @chronoverse-eslint/shared
# or
bun add -D @chronoverse-eslint/shared
```

## Usage

```javascript
import { JAVASCRIPT_FILES, EXCLUDE_PATTERNS, variablesNoUnusedVars } from '@chronoverse-eslint/shared';

// Use in your ESLint config
export default [
  {
    files: JAVASCRIPT_FILES,
    ignores: EXCLUDE_PATTERNS,
    rules: {
      'no-unused-vars': ['error', ...variablesNoUnusedVars]
    }
  }
];
```

## Exports

### `JAVASCRIPT_FILES`

Glob patterns for JavaScript and TypeScript files.

### `EXCLUDE_PATTERNS`

Common patterns for files and directories to exclude from linting.

### `variablesNoUnusedVars`

Pre-configured options for ESLint's no-unused-vars rule.

## Requirements

- Bun >=1.2.10

---

MIT © Chronoverse
