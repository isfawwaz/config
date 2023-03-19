# @isfawwaz/eslint-config-react

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/eslint-config-react-a11y
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/eslint-config-react-a11y
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/eslint-config-react-a11y

Shared [ESLint](http://eslint.org/) configuration for projects that use [React](https://reactjs.org).

## Installation

```bash
npm install --save-dev @isfawwaz/eslint-config-react-a11y
# or
pnpm add -D @isfawwaz/eslint-config-react-a11y
# or
yarn add -D @isfawwaz/eslint-config-react-a11y
```

## Usage

Create a `.eslintrc.json` file in the project root and extend `@isfawwaz/eslint-config-react`.

This package should be used in conjunction with [`@isfawwaz/eslint-config-base`](../eslint-config-base) and [`@isfawwaz/eslint-config-react`](../eslint-config-react).

### Example

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": [
    "@isfawwaz/eslint-config-base/esm",
    "@isfawwaz/eslint-config-react",
    "@isfawwaz/eslint-config-react-a11y"
  ]
}
```
