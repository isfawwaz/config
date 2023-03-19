# `@isfawwaz/tsconfig`

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/tsconfig
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/tsconfig
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/tsconfig

Fawwaz's personal [Typescript](https://typescript.org) **base** configuration.

## Installation

```sh
npm install --save-dev @isfawwaz/tsconfig
# or
pnpm add -D @isfawwaz/tsconfig
# or
yarn add -D @isfawwaz/tsconfig
```

## Usage

Create `tsconfig.json` at the root of your project:

```json
{
    "extends": "@isfawwaz/tsconfig/react-library.json",
    # or
    "extends": "@isfawwaz/tsconfig/nextjs.json",
    # ...
}
```
