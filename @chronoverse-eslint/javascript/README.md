# @chronoverse-eslint/javascript

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/javascript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/javascript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## English

Modern ESLint configuration for JavaScript projects with focus on best practices and performance optimization.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)

### Features ✨

- Modern JavaScript (ES2022+) support
- Performance-focused rules
- Browser and Node.js environments support
- Functional programming style enforcement
- Comprehensive best practices

### Installation 📦

```bash
npm install -D @chronoverse-eslint/javascript eslint
# or
yarn add -D @chronoverse-eslint/javascript eslint
# or
pnpm add -D @chronoverse-eslint/javascript eslint
# or
bun add -D @chronoverse-eslint/javascript eslint
```

### Usage 🛠️

Add to your `.eslintrc.js` or `eslint.config.js`:

```javascript
import { javascript } from '@chronoverse-eslint/javascript';

export default [
 ...javascript,
 /**
  * Your custom rules here
  */
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { javascript } from '@chronoverse-eslint/javascript';

export default defineConfig(javascript);
/**
 * or
 */
export default defineConfig([
  javascript,
  /*
   * Your custom rules here
   */
]);
```

### Requirements 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Современная конфигурация ESLint для JavaScript проектов с фокусом на лучшие практики и оптимизацию производительности.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)

### Возможности ✨

- Поддержка современного JavaScript (ES2022+)
- Правила, ориентированные на производительность
- Поддержка браузерной и Node.js среды
- Принуждение к функциональному стилю программирования
- Комплексные лучшие практики

### Установка 📦

```bash
npm install -D @chronoverse-eslint/javascript eslint
# or
yarn add -D @chronoverse-eslint/javascript eslint
# or
pnpm add -D @chronoverse-eslint/javascript eslint
# or
bun add -D @chronoverse-eslint/javascript eslint
```

### Использование 🛠️

Добавьте в ваш `.eslintrc.js` или `eslint.config.js`:

```javascript
import { javascript } from '@chronoverse-eslint/javascript';

export default [
 ...javascript,
 /*
  * Ваши собственные правила здесь
  */
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { javascript } from '@chronoverse-eslint/javascript';

export default defineConfig(javascript);
/**
 * Или
 */
export default defineConfig([
  javascript,
  /*
   * Ваши собственные правила здесь
   */
]);
```

### Требования 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
