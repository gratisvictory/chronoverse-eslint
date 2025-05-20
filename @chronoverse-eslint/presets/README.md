# @chronoverse-eslint/presets

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/presets.svg)](https://www.npmjs.com/package/@chronoverse-eslint/presets)
[![ESLint](https://img.shields.io/badge/ESLint-v9.27.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

Comprehensive collection of ESLint presets for modern JavaScript and TypeScript projects, providing a robust foundation for code quality and best practices.

## Features

- ✨ 15+ specialized ESLint presets
- 🎯 Optimized for modern JavaScript/TypeScript
- 🔒 Enhanced security rules
- 📝 JSDoc documentation standards
- 🎨 CSS and JSON linting
- 🔄 Promise handling best practices
- 🦄 Unicorn plugin integration
- 🧩 Modular and composable presets
- ⚡ Performance-focused configurations
- 🔍 Comprehensive code quality checks

## Available Presets

- **node** - Node.js specific rules
- **comments** - ESLint comments management
- **css** - CSS linting rules
- **dependency** - Dependency management rules
- **jsdoc** - JSDoc documentation standards
- **json** - JSON file validation
- **mutation** - Immutability enforcement
- **next** - Next.js specific rules
- **perfectionist** - Code style perfection
- **prettier** - Prettier integration
- **prettierConfig** - Prettier disables list rules
- **promise** - Promise handling best practices
- **regexp** - Regular expression validation
- **security** - Security-focused rules
- **unicorn** - Unicorn plugin rules

## Installation

```bash
npm install -D @chronoverse-eslint/presets eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/presets eslint
pnpm add -D @chronoverse-eslint/presets eslint
bun add -D @chronoverse-eslint/presets eslint
```

## Usage

Add to your ESLint configuration:

```javascript
// eslint.config.js
import { CHRONOVERSE_PRESETS } from '@chronoverse-eslint/presets';

const eslintConfig = [
  CHRONOVERSE_PRESETS.node,
  CHRONOVERSE_PRESETS.prettier,
  // Add other presets as needed
  // Your custom rules here
];

export default eslintConfig;
```

Or with `defineConfig`:

```javascript
import { defineConfig } from 'eslint/config';
import { CHRONOVERSE_PRESETS } from '@chronoverse-eslint/presets';

const eslintConfig = defineConfig([
  CHRONOVERSE_PRESETS.node,
  CHRONOVERSE_PRESETS.prettier,
  // Add other presets as needed
  // Your custom rules here
]);

export default eslintConfig;
```

## Requirements

- ESLint ≥ 9.27.0
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.13

---

MIT © Chronoverse
