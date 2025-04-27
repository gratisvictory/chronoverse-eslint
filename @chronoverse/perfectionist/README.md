<h1 style="display: flex; align-items: center; gap: 8px;">
  @chronoverse-eslint/perfectionist <img src="./assets/perfectionist.svg" width="28" alt="Perfectionist">
</h1>

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/perfectionist.svg)](https://www.npmjs.com/package/@chronoverse-eslint/perfectionist)
[![ESLint](https://img.shields.io/badge/ESLint-v9.25.1-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-8A2BE2)](https://gratisvictory.github.io/chronoverse-eslint)

## English

Advanced ESLint configuration for code organization and sorting, powered by eslint-plugin-perfectionist.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)

### Features ✨

- Natural sorting for imports, exports, and object properties
- Smart grouping for object properties (IDs, types, metadata, etc.)
- Consistent ordering of array includes, enums, and JSX props
- Support for custom grouping patterns
- Partition sorting by comments and newlines

### Installation 📦

```bash
npm install -D @chronoverse-eslint/perfectionist eslint
# or
yarn add -D @chronoverse-eslint/perfectionist eslint
# or
pnpm add -D @chronoverse-eslint/perfectionist eslint
# or
bun add -D @chronoverse-eslint/perfectionist eslint
```

### Usage 🛠️

Add to your `.eslintrc.js` or `eslint.config.js`:

```javascript
import { perfectionist } from '@chronoverse-eslint/perfectionist';

export default [
  ...perfectionist,
  /**
   * Your custom rules here
   */
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { perfectionist } from '@chronoverse-eslint/perfectionist';

export default defineConfig(perfectionist);
/**
 * or
 */
export default defineConfig([
  perfectionist,
  /* Your custom rules here */
]);
```

### Requirements 📋

- ESLint >=9.25.1
- Bun >=1.2.10
- Node.js >=23.11.0

---

## Русский

Продвинутая конфигурация ESLint для организации и сортировки кода, основанная на eslint-plugin-perfectionist.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)

### Возможности ✨

- Естественная сортировка импортов, экспортов и свойств объектов
- Умная группировка свойств объектов (ID, типы, метаданные и т.д.)
- Согласованное упорядочивание массивов, перечислений и JSX свойств
- Поддержка пользовательских шаблонов группировки
- Разделение сортировки по комментариям и новым строкам

### Установка 📦

```bash
npm install -D @chronoverse-eslint/perfectionist eslint
# or
yarn add -D @chronoverse-eslint/perfectionist eslint
# or
pnpm add -D @chronoverse-eslint/perfectionist eslint
# or
bun add -D @chronoverse-eslint/perfectionist eslint
```

### Использование 🛠️

Добавьте в ваш `.eslintrc.js` или `eslint.config.js`:

```javascript
import { perfectionist } from '@chronoverse-eslint/perfectionist';

export default [
  ...perfectionist,
  /*
   * Ваши собственные правила здесь
   */
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { perfectionist } from '@chronoverse-eslint/perfectionist';

export default defineConfig(perfectionist);
/**
 * Или
 */
export default defineConfig([
  perfectionist,
  /* Ваши собственные правила здесь */
]);
```

### Требования 📋

- ESLint >=9.25.1
- Bun >=1.2.10
- Node.js >=23.11.0

---

MIT © Chronoverse
