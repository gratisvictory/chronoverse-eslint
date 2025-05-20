# @chronoverse-eslint/stylistic

[![npm](https://img.shields.io/npm/v/@chronoverse-eslint/stylistic.svg)](https://www.npmjs.com/package/@chronoverse-eslint/stylistic)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

Comprehensive ESLint stylistic rules configuration for JavaScript, TypeScript, JSX and more.

## Features

- 🎨 Code formatting and style consistency
- ⚡ Multiple stylistic rule sets...
- 📏 JavaScript, TypeScript, JSX, and Plus style rules
- 🧩 Easy integration with other Chronoverse ESLint configs
- 🔧 Fully customizable preset configurations

## Installation

```bash
npm install -D @chronoverse-eslint/stylistic eslint
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-eslint/stylistic eslint
pnpm add -D @chronoverse-eslint/stylistic eslint
bun add -D @chronoverse-eslint/stylistic eslint
```

## Usage

Add to your ESLint configuration:

```javascript
// eslint.config.js
import { CHRONOVERSE_STYLISTIC } from '@chronoverse-eslint/stylistic';

const eslintConfig = [
  ...CHRONOVERSE_STYLISTIC.stylisticJs,
  ...CHRONOVERSE_STYLISTIC.stylisticTs,
  ...CHRONOVERSE_STYLISTIC.stylisticJsx,
  ...CHRONOVERSE_STYLISTIC.stylisticPlus,
  // Your custom rules here
];

export default eslintConfig;
```

Or use `defineConfig` with all stylistic rules:

```javascript
import { defineConfig } from 'eslint/config';
import { CHRONOVERSE_STYLISTIC } from '@chronoverse-eslint/stylistic';
import { eslintIgnores } from '@chronoverse-shared/utilities';

const eslintConfig = defineConfig([
  CHRONOVERSE_STYLISTIC.eslintIgnores,
  CHRONOVERSE_STYLISTIC.stylisticJs,
  CHRONOVERSE_STYLISTIC.stylisticPlus,
  CHRONOVERSE_STYLISTIC.stylisticJsx,
  CHRONOVERSE_STYLISTIC.stylisticTs,
  // Your custom rules here
]);

export default eslintConfig;
```

## Available Rule Sets

- **stylisticJs** - JavaScript code formatting and style rules
- **stylisticTs** - TypeScript-specific style rules
- **stylisticJsx** - JSX/React syntax style rules
- **stylisticPlus** - Additional style enhancements

## Requirements

- ESLint ≥ 9.27.0
- Node.js ≥ 23.11.0
- Bun ≥ 1.2.13

---

MIT © Chronoverse
