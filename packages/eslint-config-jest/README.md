# @isfawwaz/eslint-config-jest

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/eslint-config-jest
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/eslint-config-jest
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/eslint-config-jest

Shared [ESLint](http://eslint.org/) configuration for projects that use [Jest](https://jestjs.io) for testing.

## Installation

```bash
npm install --save-dev @isfawwaz/eslint-config-jest
# or
pnpm add -D @isfawwaz/eslint-config-jest
# or
yarn add -D @isfawwaz/eslint-config-jest
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@isfawwaz/eslint-config-jest`.

This package should be used in conjunction with [`@isfawwaz/eslint-config-base`](../eslint-config-base).

ℹ️ Only test files will have Jest globals and rules activated. Please check the [test-patterns](../eslint-config-base/lib/test-patterns.js) to see how you should name your test files.

### Example

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": ["@isfawwaz/eslint-config-base/esm", "@isfawwaz/eslint-config-jest"]
}
```
