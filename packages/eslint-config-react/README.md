# @isfawwaz/eslint-config-react

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/eslint-config-react
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/eslint-config-react
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/eslint-config-react

Shared [ESLint](http://eslint.org/) configuration for projects that use [React](https://reactjs.org).

## Installation

```bash
npm install --save-dev @isfawwaz/eslint-config-react
# or
pnpm add -D @isfawwaz/eslint-config-react
# or
yarn add -D @isfawwaz/eslint-config-react
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@isfawwaz/eslint-config-react`.

This package should be used in conjunction with [`@isfawwaz/eslint-config-base`](../eslint-config-base).

### Example

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": ["@isfawwaz/eslint-config-base/esm", "@isfawwaz/eslint-config-react"]
}
```
