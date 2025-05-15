# @chronoverse-shared/builder

[![License](https://img.shields.io/badge/license-MIT-4B32C3.svg)](LICENSE)

Internal build tool for the Chronoverse ESLint configuration packages. This package is used to build all the ESLint configurations but is not published to npm.

## Role in the Chronoverse Ecosystem

This builder provides:

- 🚀 Fast, consistent builds for all Chronoverse ESLint packages
- 📦 TypeScript compilation and bundling
- 🔄 Development workflow with watch mode
- 🧩 JSDoc types generation

## Features

- 🚀 Fast builds with esbuild
- 🔄 Watch mode for development
- 📘 TypeScript support with JSDoc types
- 🔧 CLI and programmatic API
- 🔀 Works with both Bun and Node.js
- 🛠️ Configurable build options

## Usage

The builder is used internally in all package.json build scripts:

```js
// build.js (in each package)
import { build } from '@chronoverse-shared/builder';

await build({
  entryPoints: ['src/index.js'],
  outdir: 'dist',
  minify: true,
  format: 'esm',
  platform: 'node',
  target: 'esnext'
});
```

## Note

This package is intended for internal use in the Chronoverse ESLint ecosystem and is not published to npm. It's included in the workspace to provide consistent build processes across all configuration packages.

---

MIT © Chronoverse
