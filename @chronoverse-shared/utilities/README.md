# @chronoverse-shared/utilities

> Shared utilities and constants for [`@chronoverse-eslint`](https://github.com/gratisvictory/chronoverse-eslint) packages.

[![npm version](https://img.shields.io/npm/v/@chronoverse-shared/utilities.svg)](https://www.npmjs.com/package/@chronoverse-shared/utilities)
[![ESLint](https://img.shields.io/badge/ESLint-v9.29.0-4B32C3.svg)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

## Installation

```bash
npm install -D @chronoverse-shared/utilities
```

Or using alternative package managers:

```bash
yarn add -D @chronoverse-shared/utilities eslint
pnpm add -D @chronoverse-shared/utilities eslint
bun add -D @chronoverse-shared/utilities eslint
```

### Usage

```javascript
import eslintConfigBase from 'eslint-config-eslint';
import { variablesNoUnusedVariables, bestPracticesNoRestrictedProperties, stylisticNoRestrictedSyntax, variablesNoRestrictedGlobals } from '@chronoverse-shared/utilities/rule-options';
import { sharedGlobals } from '@chronoverse-shared/utilities/globals';
import { disablesPrettierRules } from '@chronoverse-shared/utilities/disables-prettier-rules';
import { eslintIgnores } from '@chronoverse-shared/utilities/ignores';
import { getRulesByConfigName } from '@chronoverse-shared/utilities/rules';
import { javascript, typescript, ... } from '@chronoverse-shared/utilities/files';
import { EXCLUDE_PATTERNS } from '@chronoverse-shared/utilities/constants';

import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([
	eslintIgnores,

	{
		files: [...javascript, ...typescript],
		ignores: EXCLUDE_PATTERNS,
		languageOptions: {
			globals: sharedGlobals,
		},
		rules: {
			...getRulesByConfigName('eslint-config-eslint/js', eslintConfigBase),

			'no-unused-vars': ['error', ...variablesNoUnusedVariables],

			'no-restricted-properties': ['error', ...bestPracticesNoRestrictedProperties],

			'no-restricted-syntax': ['error', ...stylisticNoRestrictedSyntax],

			'no-restricted-globals': ['error', ...variablesNoRestrictedGlobals],
		},
	},

	disablesPrettierRules,
]);

export default eslintConfig;
```

### Requirements

- ESLint >=9.29.0
- Bun >=1.2.16
- Node.js >=23.11.0

---

MIT © Chronoverse
