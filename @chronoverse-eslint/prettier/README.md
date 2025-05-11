# @chronoverse-eslint/prettier

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/prettier.svg)](https://www.npmjs.com/package/@chronoverse-eslint/prettier)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-v3.5.3-F7B93E.svg)](https://prettier.io)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

## English

A comprehensive ESLint configuration for Prettier integration, ensuring consistent code formatting across your JavaScript and TypeScript projects.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)

### Features ✨

- Seamless Prettier integration with ESLint
- Automatic code formatting
- Consistent code style across projects
- Disables conflicting ESLint rules
- Error reporting for formatting issues
- Works with both JavaScript and TypeScript
- Compatible with modern JavaScript features

### Installation 📦

```bash
npm install -D @chronoverse-eslint/prettier eslint prettier
# or
yarn add -D @chronoverse-eslint/prettier eslint prettier
# or
pnpm add -D @chronoverse-eslint/prettier eslint prettier
# or
bun add -D @chronoverse-eslint/prettier eslint prettier
```

### Usage 🛠️

Add to your `eslint.config.js`:

```javascript
import { prettier } from '@chronoverse-eslint/prettier';

export default [
  /**
   * Your other ESLint configurations
   * at the very end
   */
  ...prettier,
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { prettier } from '@chronoverse-eslint/prettier';

export default defineConfig(prettier);
/**
 * or
 */
export default defineConfig([
  /**
   * Your custom rules here
   */
  prettier,
]);
```

### Requirements 📋

- ESLint >=9.26.0
- Prettier >=3.5.3
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Комплексная конфигурация ESLint для интеграции с Prettier, обеспечивающая единообразное форматирование кода в ваших JavaScript и TypeScript проектах.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)

### Возможности ✨

- Бесшовная интеграция Prettier с ESLint
- Автоматическое форматирование кода
- Единый стиль кода во всех проектах
- Отключение конфликтующих правил ESLint
- Отчеты об ошибках форматирования
- Работает с JavaScript и TypeScript
- Совместимость с современными возможностями JavaScript

### Установка 📦

```bash
npm install -D @chronoverse-eslint/prettier eslint prettier
# or
yarn add -D @chronoverse-eslint/prettier eslint prettier
# or
pnpm add -D @chronoverse-eslint/prettier eslint prettier
# or
bun add -D @chronoverse-eslint/prettier eslint prettier
```

### Использование 🛠️

Добавьте в ваш `eslint.config.js`:

```javascript
import { prettier } from '@chronoverse-eslint/prettier';

export default [
  /*
   * Ваши другие конфигурации ESLint
   * Добавить в самый конец конфигурации
   */
  ...prettier,
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { prettier } from '@chronoverse-eslint/prettier';

export default defineConfig(prettier);
/**
 * Или
 */
export default defineConfig([
  /**
   * Ваши собственные правила здесь
   */
  prettier,
]);
```

### Требования 📋

- ESLint >=9.26.0
- Prettier >=3.5.3
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
