# Vanilla JavaScript ESLint Examples

This directory contains examples demonstrating the ESLint rules provided by `@chronoverse-eslint/javascript`.

## Purpose

These examples are designed to showcase:

- ✨ Common ESLint rules and their purpose
- ⚡ Examples of code that violates rules (marked with ❌)
- 🌐 Examples of code that follows rules (marked with ✅)
- 🧩 Different rule categories and their importance

## How to Use

The examples are categorized into sections:

1. **Best Practices** - Rules that enforce coding patterns for maintainability and bug prevention
2. **Variables** - Rules related to variable declaration and usage
3. **ES6 Features** - Rules encouraging modern JavaScript syntax
4. **Stylistic Issues** - Rules enforcing consistent code style
5. **Errors** - Rules preventing common mistakes and bugs
6. **Node.js & CommonJS** - Rules specific to Node.js development

## Running ESLint on Examples

To see the ESLint errors in action:

```bash
# Install dependencies
npm install

# Run ESLint on the examples
npm run lint
```

The `index.js` file intentionally contains ESLint violations to demonstrate how the linter identifies issues and what rules are being enforced by the configuration.

## Configuration

The ESLint configuration is defined in `eslint.config.js` and uses:

```javascript
import { javascript } from '@chronoverse-eslint/javascript';
import { eslintIgnores } from '@chronoverse-shared/utilities';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslintIgnores,
  javascript,
]);
```

This simple configuration applies all the recommended rules from the Chronoverse JavaScript ESLint preset.
