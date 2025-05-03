# @chronoverse-eslint/react

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/react.svg)](https://www.npmjs.com/package/@chronoverse-eslint/react)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![React](https://img.shields.io/badge/React-v19.1.0-61DAFB.svg)](https://reactjs.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

## English

A comprehensive ESLint configuration for React projects, supporting both JavaScript and TypeScript, with a focus on best practices, accessibility, and performance.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)

### Features ✨

- React and React Hooks best practices
- Accessibility (a11y) rules
- React Compiler integration
- TypeScript support
- Modern JavaScript features
- Browser and Service Worker globals
- JSX syntax support
- Performance optimization rules
- Code quality and maintainability
- Comprehensive React-specific rules

### Installation 📦

```bash
npm install -D @chronoverse-eslint/react eslint
# or
yarn add -D @chronoverse-eslint/react eslint
# or
pnpm add -D @chronoverse-eslint/react eslint
# or
bun add -D @chronoverse-eslint/react eslint
```

### Usage 🛠️

Add to your `eslint.config.js`:

```javascript
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';

export default [
  // For React JavaScript projects
  ...reactJSX,
  // For React TypeScript projects
  ...reactTSX,
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';

export default defineConfig(reactJSX);
/**
 * or
 */
export default defineConfig([
  reactJSX
  reactTSX,
  /*
   * Your custom rules here
   */
]);
```

### Requirements 📋

- ESLint >=9.26.0
- React >=19.1.0
- TypeScript >=5.8.3 (for TypeScript support)
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Комплексная конфигурация ESLint для React проектов с поддержкой JavaScript и TypeScript, ориентированная на лучшие практики, доступность и производительность.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)

### Возможности ✨

- Лучшие практики React и React Hooks
- Правила доступности (a11y)
- Интеграция с React Compiler
- Поддержка TypeScript
- Современные возможности JavaScript
- Глобальные переменные браузера и Service Worker
- Поддержка синтаксиса JSX
- Правила оптимизации производительности
- Качество и поддерживаемость кода
- Комплексные правила для React

### Установка 📦

```bash
npm install -D @chronoverse-eslint/react eslint
# or
yarn add -D @chronoverse-eslint/react eslint
# or
pnpm add -D @chronoverse-eslint/react eslint
# or
bun add -D @chronoverse-eslint/react eslint
```

### Использование 🛠️

Добавьте в ваш `eslint.config.js`:

```javascript
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';

export default [
  // Для React JavaScript проектов
  ...reactJSX,
  // Для React TypeScript проектов
  ...reactTSX,
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { reactJSX, reactTSX } from '@chronoverse-eslint/react';

export default defineConfig(reactJSX);
/**
 * Или
 */
export default defineConfig([
  reactJSX
  reactTSX,
  /*
   * Ваши собственные правила здесь
   */
]);
```

### Требования 📋

- ESLint >=9.26.0
- React >=19.1.0
- TypeScript >=5.8.3 (для поддержки TypeScript)
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
