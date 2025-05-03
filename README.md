# Chronoverse ESLint

[English](#english) | [Русский](#русский)

[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/🛠️-Config%20Inspector-4B32C3)](https://gratisvictory.github.io/chronoverse-eslint)

## English

A comprehensive suite of ESLint configurations for modern JavaScript and TypeScript projects, supporting React, Next.js, and various best practices.

### Table of Contents

- [Packages](#packages-)
- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Requirements](#requirements-)
- [Development](#development-)

### Packages 📦

- [@chronoverse-eslint/eslint-config](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/eslint-config) - Main ESLint configuration
- [@chronoverse-eslint/javascript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/javascript) - JavaScript configuration
- [@chronoverse-eslint/typescript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/typescript) - TypeScript configuration
- [@chronoverse-eslint/react](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/react) - React configuration
- [@chronoverse-eslint/prettier](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/prettier) - Prettier integration
- [@chronoverse-eslint/shared](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/shared) - Shared utilities

### Features ✨

- Modern JavaScript and TypeScript support
- React and Next.js configurations
- Prettier integration
- Comprehensive best practices
- Performance-focused rules
- Security rules
- Functional programming style
- Code quality and maintainability
- Git integration
- CSS and Tailwind CSS support
- JSDoc documentation rules
- Accessibility rules
- Type safety

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
import { js, jsx, ts, tsx, nextJSX, nextTSX } from '@chronoverse-eslint/eslint-config';

export default [
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
];
```

### Requirements 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Комплексный набор конфигураций ESLint для современных JavaScript и TypeScript проектов с поддержкой React, Next.js и различных лучших практик.

### Содержание

- [Пакеты](#пакеты-)
- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Требования](#требования-)
- [Разработка](#разработка-)

### Пакеты 📦

- [@chronoverse-eslint/eslint-config](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/eslint-config) - Основная конфигурация ESLint
- [@chronoverse-eslint/javascript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/javascript) - Конфигурация JavaScript
- [@chronoverse-eslint/typescript](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/typescript) - Конфигурация TypeScript
- [@chronoverse-eslint/react](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/react) - Конфигурация React
- [@chronoverse-eslint/prettier](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/prettier) - Интеграция с Prettier
- [@chronoverse-eslint/shared](https://github.com/gratisvictory/chronoverse-eslint/tree/main/@chronoverse/shared) - Общие утилиты

### Возможности ✨

- Поддержка современного JavaScript и TypeScript
- Конфигурации для React и Next.js
- Интеграция с Prettier
- Комплексные лучшие практики
- Правила, ориентированные на производительность
- Правила безопасности
- Функциональный стиль программирования
- Качество и поддерживаемость кода
- Интеграция с Git
- Поддержка CSS и Tailwind CSS
- Правила документации JSDoc
- Правила доступности
- Безопасность типов

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
import { js, jsx, ts, tsx, nextJSX, nextTSX } from '@chronoverse-eslint/eslint-config';

export default [
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
];
```

### Требования 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
