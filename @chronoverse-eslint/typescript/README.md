# @chronoverse-eslint/typescript

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/typescript.svg)](https://www.npmjs.com/package/@chronoverse-eslint/typescript)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.8.3-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

## English

A comprehensive ESLint configuration for TypeScript projects, focusing on type safety, code quality, and best practices.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)

### Features ✨

- TypeScript type checking and safety
- Functional programming style
- TSDoc documentation rules
- Strict type checking
- Stylistic rules
- Safe TypeScript practices
- Modern TypeScript features
- Code consistency rules
- Extension rules
- Comprehensive best practices

### Installation 📦

```bash
npm install -D @chronoverse-eslint/typescript eslint typescript
# or
yarn add -D @chronoverse-eslint/typescript eslint typescript
# or
pnpm add -D @chronoverse-eslint/typescript eslint typescript
# or
bun add -D @chronoverse-eslint/typescript eslint typescript
```

### Usage 🛠️

Add to your `eslint.config.js`:

```javascript
import { typescript } from '@chronoverse-eslint/typescript';

export default [
  // For TypeScript projects
  ...typescript,
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { typescript } from '@chronoverse-eslint/typescript';

export default defineConfig(typescript);
/**
 * or
 */
export default defineConfig([
  typescript,
  /*
   * Your custom rules here
   */
]);
```

### Requirements 📋

- ESLint >=9.26.0
- TypeScript >=5.8.3
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Комплексная конфигурация ESLint для TypeScript проектов с фокусом на безопасность типов, качество кода и лучшие практики.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)

### Возможности ✨

- Проверка типов и безопасность TypeScript
- Функциональный стиль программирования
- Правила документации TSDoc
- Строгая проверка типов
- Стилистические правила
- Безопасные практики TypeScript
- Современные возможности TypeScript
- Правила согласованности кода
- Правила расширений
- Комплексные лучшие практики

### Установка 📦

```bash
npm install -D @chronoverse-eslint/typescript eslint typescript
# or
yarn add -D @chronoverse-eslint/typescript eslint typescript
# or
pnpm add -D @chronoverse-eslint/typescript eslint typescript
# or
bun add -D @chronoverse-eslint/typescript eslint typescript
```

### Использование 🛠️

Добавьте в ваш `eslint.config.js`:

```javascript
import { typescript } from '@chronoverse-eslint/typescript';

export default [
  // Для TypeScript проектов
  ...typescript,
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { typescript } from '@chronoverse-eslint/typescript';

export default defineConfig(typescript);
/**
 * Или
 */
export default defineConfig([
  typescript,
  /*
   * Ваши собственные правила здесь
   */
]);
```

### Требования 📋

- ESLint >=9.26.0
- TypeScript >=5.8.3
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
