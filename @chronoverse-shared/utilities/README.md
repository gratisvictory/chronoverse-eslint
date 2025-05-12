# @chronoverse-shared/utilities

> Shared utilities and constants for [`@chronoverse-eslint`](https://github.com/gratisvictory/chronoverse-eslint) packages.

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/shared.svg)](https://www.npmjs.com/package/@chronoverse-eslint/shared)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

---

## Features

- 📁 Common file and exclude patterns
- ⚙️ ESLint rule presets and options
- 🔧 Rule transformation utilities
- 🤝 Default globals for Flat Config
- 📦 Type-safe utilities for ESLint configs

---

## Installation

```bash
bun add -D @chronoverse-shared/utilities
# or
npm install -D @chronoverse-shared/utilities
# or
pnpm add -D @chronoverse-shared/utilities
# or
yarn add -D @chronoverse-shared/utilities
```

### Usage

```javascript
import eslintConfigBase from 'eslint-config-eslint';
import {
  eslintIgnores,
  EXCLUDE_PATTERNS,
  FILE_PATTERNS,
  RULE_OPTIONS,
  sharedGlobals,
  getRulesByConfigName,
  reformattedRules
  // interopDefault,
} from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([

   eslintIgnores,

  {
    files: FILE_PATTERNS.javascript,
    ignores: EXCLUDE_PATTERNS,
    languageOptions: {
      globals: sharedGlobals
    },
    rules: {

      ...getRulesByConfigName('eslint-config-eslint/js', eslintConfigBase),

      'no-unused-vars': ['error', ...RULE_OPTIONS.variablesNoUnusedVariables],

      'no-restricted-properties': ['error', ...RULE_OPTIONS.bestPracticesNoRestrictedProperties],

      'no-restricted-syntax': ['error', ...RULE_OPTIONS.stylisticNoRestrictedSyntax],

      'no-restricted-globals': ['error', ...RULE_OPTIONS.variablesNoRestrictedGlobals],
    }
  }
]);
```

### Requirements

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
