# @isfawwaz/eslint-config-babel

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/eslint-config-babel
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/eslint-config-babel
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/eslint-config-babel

Shared [ESLint](http://eslint.org/) configuration for projects that use [Babel](https://babeljs.io/).

## Installation

```bash
npm install --save-dev @isfawwaz/eslint-config-babel
# or
pnpm add -D @isfawwaz/eslint-config-babel
# or
yarn add -D @isfawwaz/eslint-config-babel
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@isfawwaz/eslint-config-babel`.

This package should be used in conjunction with [`@isfawwaz/eslint-config-base`](../eslint-config-base).

### Example

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": ["@isfawwaz/eslint-config-base/esm", "@isfawwaz/eslint-config-babel"]
}
```

⚠️ If you are using a monorepo, you will need specify the `configFile` to point to the root:

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": ["@isfawwaz/eslint-config-base/esm", "@isfawwaz/eslint-config-babel"],
  "parserOptions": {
    "babelOptions": {
      "configFile": "./.babelrc.json"
    }
  }
}
```
