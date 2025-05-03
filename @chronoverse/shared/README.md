# @chronoverse-eslint/shared

[English](#english) | [Русский](#русский)

[![npm version](https://img.shields.io/npm/v/@chronoverse-eslint/shared.svg)](https://www.npmjs.com/package/@chronoverse-eslint/shared)
[![ESLint](https://img.shields.io/badge/ESLint-v9.26.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

## English

Shared utilities and constants for @chronoverse-eslint packages, providing common configurations and helper functions.

### Table of Contents

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-️)
- [Exports](#exports-)
- [Requirements](#requirements-)

### Features ✨

- Common file patterns and exclusions
- Shared ESLint rule configurations
- Utility functions for ESLint configs
- TypeScript and JavaScript file patterns
- CSS file patterns
- Helper functions for rule management
- Default options for common rules
- Interoperability utilities
- Rule reformatting utilities

### Installation 📦

```bash
npm install -D @chronoverse-eslint/shared
# or
yarn add -D @chronoverse-eslint/shared
# or
pnpm add -D @chronoverse-eslint/shared
# or
bun add -D @chronoverse-eslint/shared
```

### Usage 🛠️

```javascript
import {
  EXCLUDE_PATTERNS,
  JAVASCRIPT_FILES,
  TYPESCRIPT_FILES,
  CSS_FILES,
  variablesNoUnusedVariables,
  getRulesByConfigName,
  interopDefault,
  reformattedRules
} from '@chronoverse-eslint/shared';

// Use in your ESLint config
export default [
  {
    files: JAVASCRIPT_FILES,
    ignores: EXCLUDE_PATTERNS,
    rules: {
      'no-unused-vars': ['error', ...variablesNoUnusedVariables]
    }
  }
];
```

### Exports 📚

#### Constants
- `EXCLUDE_PATTERNS` - Common patterns for files and directories to exclude from linting

#### File Patterns
- `JAVASCRIPT_FILES` - Glob patterns for JavaScript files
- `TYPESCRIPT_FILES` - Glob patterns for TypeScript files
- `CSS_FILES` - Glob patterns for CSS files

#### Options
- `variablesNoUnusedVariables` - Pre-configured options for ESLint's no-unused-vars rule

#### Utilities
- `getRulesByConfigName` - Helper to get rules from ESLint configs
- `interopDefault` - Utility for handling default exports
- `reformattedRules` - Helper for reformatting ESLint rules

### Requirements 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

## Русский

Общие утилиты и константы для пакетов @chronoverse-eslint, предоставляющие общие конфигурации и вспомогательные функции.

### Содержание

- [Возможности](#возможности-)
- [Установка](#установка-)
- [Использование](#использование-️)
- [Экспорты](#экспорты-)
- [Требования](#требования-)

### Возможности ✨

- Общие шаблоны файлов и исключения
- Общие конфигурации правил ESLint
- Вспомогательные функции для конфигураций ESLint
- Шаблоны файлов TypeScript и JavaScript
- Шаблоны файлов CSS
- Вспомогательные функции для управления правилами
- Параметры по умолчанию для общих правил
- Утилиты для обеспечения совместимости
- Утилиты для переформатирования правил

### Установка 📦

```bash
npm install -D @chronoverse-eslint/shared
# or
yarn add -D @chronoverse-eslint/shared
# or
pnpm add -D @chronoverse-eslint/shared
# or
bun add -D @chronoverse-eslint/shared
```

### Использование 🛠️

```javascript
import {
  EXCLUDE_PATTERNS,
  JAVASCRIPT_FILES,
  TYPESCRIPT_FILES,
  CSS_FILES,
  variablesNoUnusedVariables,
  getRulesByConfigName,
  interopDefault,
  reformattedRules
} from '@chronoverse-eslint/shared';

// Использование в вашей конфигурации ESLint
export default [
  {
    files: JAVASCRIPT_FILES,
    ignores: EXCLUDE_PATTERNS,
    rules: {
      'no-unused-vars': ['error', ...variablesNoUnusedVariables]
    }
  }
];
```

### Экспорты 📚

#### Константы
- `EXCLUDE_PATTERNS` - Общие шаблоны для файлов и директорий, исключаемых из проверки

#### Шаблоны файлов
- `JAVASCRIPT_FILES` - Glob-шаблоны для JavaScript файлов
- `TYPESCRIPT_FILES` - Glob-шаблоны для TypeScript файлов
- `CSS_FILES` - Glob-шаблоны для CSS файлов

#### Параметры
- `variablesNoUnusedVariables` - Предварительно настроенные параметры для правила no-unused-vars ESLint

#### Утилиты
- `getRulesByConfigName` - Вспомогательная функция для получения правил из конфигураций ESLint
- `interopDefault` - Утилита для обработки экспортов по умолчанию
- `reformattedRules` - Вспомогательная функция для переформатирования правил ESLint

### Требования 📋

- ESLint >=9.26.0
- Bun >=1.2.11
- Node.js >=23.11.0

---

MIT © Chronoverse
