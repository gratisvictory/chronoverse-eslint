# @chronoverse-shared/builder

A versatile build tool for JavaScript/TypeScript projects based on esbuild. Compatible with both Bun and Node.js runtimes.

## Features

- 🚀 Fast builds with esbuild
- 🔄 Watch mode for development
- 📘 TypeScript support with JSDoc types
- 🔧 CLI and programmatic API
- 🔀 Works with both Bun and Node.js
- 🛠️ Configurable build options

## Installation

```bash
# Using npm
npm install --save-dev @chronoverse-shared/builder

# Using Yarn
yarn add --dev @chronoverse-shared/builder

# Using pnpm
pnpm add --save-dev @chronoverse-shared/builder

# Using Bun
bun add --dev @chronoverse-shared/builder
```

## Usage

### Programmatic API

```js
// build.js
import { build } from '@chronoverse-shared/builder';

await build({
  entryPoints: ['src/index.js'],
  outdir: 'dist',
  minify: true,
  tsconfig: './tsconfig.json',
  format: 'esm',      // 'esm' or 'cjs'
  platform: 'node',   // 'node', 'browser', or 'neutral'
  target: 'esnext',   // JavaScript target
  watch: false,       // Enable watch mode
});
```

Then run:

```bash
# Using Node.js
node build.js

# Using Bun
bun build.js
```

### CLI Usage

You can use the builder directly from the command line:

```bash
# Using npx
npx @chronoverse-shared/builder --entry src/index.js --outdir dist --minify

# Using Bun
bunx @chronoverse-shared/builder -e src/index.js -o dist -w
```

Or add it to your package.json scripts:

```json
{
  "scripts": {
    "build": "builder --entry src/index.js --outdir dist",
    "dev": "builder --entry src/index.js --outdir dist --watch"
  }
}
```

## CLI Options

```
Usage: builder [options] [entry-files...]

Options:
  -e, --entry     Entry point files (can be specified multiple times)
  -o, --outdir    Output directory (default: "dist")
  -t, --tsconfig  Path to tsconfig.json (default: "./tsconfig.json")
  -m, --minify    Minify the output (default: true)
  -p, --platform  Build platform: "node", "browser", or "neutral" (default: "node")
  -f, --format    Module format: "esm" or "cjs" (default: "esm")
  --target        JavaScript target (default: "esnext")
  -w, --watch     Watch mode (default: false)
  -h, --help      Show this help message
```

## API Reference

### `build(options)`

Main build function to generate bundles and types.

#### Options

- `entryPoints`: Array of entry point files (default: `['src/index.js']`)
- `outdir`: Output directory (default: `'dist'`)
- `tsconfig`: Path to tsconfig.json (default: `'./tsconfig.json'`)
- `minify`: Whether to minify the output (default: `true`)
- `platform`: Build platform - 'node', 'browser', or 'neutral' (default: `'node'`)
- `format`: Module format - 'esm' or 'cjs' (default: `'esm'`)
- `target`: JavaScript target (default: `'esnext'`)
- `watch`: Enable watch mode (default: `false`)
- `external`: Array of package names to exclude from bundling (auto-detected from package.json by default)

### Advanced API

The package also exposes some utility functions:

- `buildBundle(options)`: Build only the bundle without generating types
- `buildTypes(tsconfigPath)`: Generate types only
- `isBun()`: Detect if running in Bun environment
- `getPackageJson(rootDir)`: Get package.json content

## License

MIT
