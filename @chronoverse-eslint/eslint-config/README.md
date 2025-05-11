# @chronoverse-eslint/eslint-config

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/eslint-config.svg)](https://www.npmjs.com/package/@chronoverse-eslint/eslint-config)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## English

A comprehensive ESLint configuration for modern JavaScript and TypeScript projects, supporting React, Next.js, and various best practices.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Presets](#presets-)
- [Requirements](#requirements-)

### Features ✨

- Modern JavaScript and TypeScript support
- React and Next.js configurations
- Comprehensive best practices
- Performance-focused rules
- Security rules
- Functional programming style
- Code quality and maintainability
- Git integration
- CSS support
- JSDoc documentation rules

### Installation 📦

```bash
npm install -D @chronoverse-eslint/eslint-config eslint
# or
yarn add -D @chronoverse-eslint/eslint-config eslint
# or
pnpm add -D @chronoverse-eslint/eslint-config eslint
# or
bun add -D @chronoverse-eslint/eslint-config eslint
```

### Usage 🛠️

Add to your `eslint.config.js`:

```javascript
import { js, jsx, ts, tsx, nextJSX, nextTSX, ...presets } from '@chronoverse-eslint/eslint-config';

export default [
  // For JavaScript projects
  ...js,
  // For React JavaScript projects
  ...jsx,
  // For TypeScript projects
  ...ts,
  // For React TypeScript projects
  ...tsx,
  // For Next.js JavaScript projects
  ...nextJSX,
  // For Next.js TypeScript projects
  ...nextTSX,
];
```

#### or

```javascript
import { defineConfig } from 'eslint/config';
import { js, jsx, ts, tsx, nextJSX, nextTSX, ...presets } from '@chronoverse-eslint/eslint-config';

export default defineConfig([
  // For JavaScript projects
  js,
  // For React JavaScript projects
  jsx,
  // For TypeScript projects
  ts,
  // For React TypeScript projects
  tsx,
  // For Next.js JavaScript projects
  nextJSX,
  // For Next.js TypeScript projects
  nextTSX,
]);
```

### Presets 📚

The package provides several presets that you can use individually:

- `js` - Base JavaScript configuration
- `jsx` - React JavaScript configuration
- `ts` - TypeScript configuration
- `tsx` - React TypeScript configuration
- `nextJSX` - Next.js JavaScript configuration
- `nextTSX` - Next.js TypeScript configuration
- `css` - CSS configuration
- `tailwindcss` - Tailwind CSS configuration (https://github.com/tailwindlabs/tailwindcss/discussions/15945)
- `functionalJS` - Functional programming rules
- `jsdocForJs` - JSDoc rules for JavaScript
- `jsdocForTs` - JSDoc rules for TypeScript
- `ignores` - Add EXCLUDE_PATTERNS (at the very beginning)

### Requirements 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Комплексная конфигурация ESLint для современных JavaScript и TypeScript проектов с поддержкой React, Next.js и различных лучших практик.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Пресеты](#пресеты-)
- [Требования](#требования-)

### Возможности ✨

- Поддержка современного JavaScript и TypeScript
- Конфигурации для React и Next.js
- Комплексные лучшие практики
- Правила, ориентированные на производительность
- Правила безопасности
- Функциональный стиль программирования
- Качество и поддерживаемость кода
- Интеграция с Git
- Поддержка CSS
- Правила документации JSDoc

### Установка 📦

```bash
npm install -D @chronoverse-eslint/eslint-config eslint
# or
yarn add -D @chronoverse-eslint/eslint-config eslint
# or
pnpm add -D @chronoverse-eslint/eslint-config eslint
# or
bun add -D @chronoverse-eslint/eslint-config eslint
```

### Использование 🛠️

Добавьте в ваш `eslint.config.js`:

```javascript
import { js, jsx, ts, tsx, nextJSX, nextTSX, ...presets } from '@chronoverse-eslint/eslint-config';

export default [
  // Для JavaScript проектов
  ...js,
  // Для React JavaScript проектов
  ...jsx,
  // Для TypeScript проектов
  ...ts,
  // Для React TypeScript проектов
  ...tsx,
  // Для Next.js JavaScript проектов
  ...nextJSX,
  // Для Next.js TypeScript проектов
  ...nextTSX,
];
```

#### Или

```javascript
import { defineConfig } from 'eslint/config';
import { js, jsx, ts, tsx, nextJSX, nextTSX, ...presets } from '@chronoverse-eslint/eslint-config';

export default defineConfig([
  // Для JavaScript проектов
  js,
  // Для React JavaScript проектов
  jsx,
  // Для TypeScript проектов
  ts,
  // Для React TypeScript проектов
  tsx,
  // Для Next.js JavaScript проектов
  nextJSX,
  // Для Next.js TypeScript проектов
  nextTSX,
]);
```

### Пресеты 📚

Пакет предоставляет несколько пресетов, которые можно использовать по отдельности:

- `js` - Базовая конфигурация JavaScript
- `jsx` - Конфигурация React JavaScript
- `ts` - Конфигурация TypeScript
- `tsx` - Конфигурация React TypeScript
- `nextJSX` - Конфигурация Next.js JavaScript
- `nextTSX` - Конфигурация Next.js TypeScript
- `css` - Конфигурация CSS
- `tailwindcss` - Tailwind CSS Конфигурация (https://github.com/tailwindlabs/tailwindcss/discussions/15945)
- `functionalJS` - Правила функционального программирования
- `jsdocForJs` - Правила JSDoc для JavaScript
- `jsdocForTs` - Правила JSDoc для TypeScript
- `ignores` - добавить EXCLUDE_PATTERNS (в самое начало)

### Требования 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
