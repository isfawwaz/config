# @isfawwaz/eslint-config-base

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/eslint-config-base
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/eslint-config-base
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/eslint-config-base

Shared [ESLint](http://eslint.org/) **base** configuration for my projects.

## Installation

```bash
npm install --save-dev @isfawwaz/eslint-config-base
# or
pnpm add -D @isfawwaz/eslint-config-base
# or
yarn add -D @isfawwaz/eslint-config-base
```

## Usage

Create a `.eslintrc.json` file in the project root and extend from one of these base configurations:

- `@isfawwaz/eslint-config-base` - Latest ECMAScript version without modules.
- `@isfawwaz/eslint-config-base/esm` - Latest ECMAScript version with ECMAScript modules.
- `@isfawwaz/eslint-config-base/cjs` - Latest ECMAScript version with CommonJS modules.

Instead of the latest ECMAScript version (2020), you may target **specific versions** of ECMAScript by using their configurations instead.

<details>
  <summary>List of all base configurations</summary>

- `@isfawwaz/eslint-config-base/es2015` - ECMAScript 2015 (aka es6) without modules.
- `@isfawwaz/eslint-config-base/es2016` - ECMAScript 2016 (aka es7) without modules.
- `@isfawwaz/eslint-config-base/es2017` - ECMAScript 2017 (aka es8) without modules.
- `@isfawwaz/eslint-config-base/es2018` - ECMAScript 2018 (aka es9) without modules.
- `@isfawwaz/eslint-config-base/es2019` - ECMAScript 2019 (aka es10) without modules.
- `@isfawwaz/eslint-config-base/es2020` - ECMAScript 2020 (aka es11) without modules.
- `@isfawwaz/eslint-config-base/esm/es2015` - ECMAScript 2015 (aka es6) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/esm/es2016` - ECMAScript 2016 (aka es7) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/esm/es2017` - ECMAScript 2017 (aka es8) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/esm/es2018` - ECMAScript 2018 (aka es9) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/esm/es2019` - ECMAScript 2019 (aka es10) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/esm/es2020` - ECMAScript 2020 (aka es11) with ECMAScript modules.
- `@isfawwaz/eslint-config-base/cjs/es2015` - ECMAScript 2015 (aka es6) with CommonJS modules.
- `@isfawwaz/eslint-config-base/cjs/es2016` - ECMAScript 2016 (aka es7) with CommonJS modules.
- `@isfawwaz/eslint-config-base/cjs/es2017` - ECMAScript 2017 (aka es8) with CommonJS modules.
- `@isfawwaz/eslint-config-base/cjs/es2018` - ECMAScript 2018 (aka es9) with CommonJS modules.
- `@isfawwaz/eslint-config-base/cjs/es2019` - ECMAScript 2019 (aka es10) with CommonJS modules.
- `@isfawwaz/eslint-config-base/cjs/es2020` - ECMAScript 2020 (aka es11) with CommonJS modules.
</details>

All files that end in `.config.js` within your project root folder will **automatically be treated as Node.js** files as they relate to tooling, such as `babel.config.js` and `commitlint.config.js`.

### Examples

- Example of `.eslintrc.json` for Node.js projects:

  ```json
  {
    "root": true,
    "env": {
      "node": true
    },
    "extends": ["@isfawwaz/eslint-config-base/cjs/es2019"]
  }
  ```

- Example of `.eslintrc.json` for browser only projects that use ECMAScript modules:

  ```json
  {
    "root": true,
    "env": {
      "browser": true
    },
    "extends": ["@isfawwaz/eslint-config-base/esm"]
  }
  ```

- Example of `.eslintrc.json` for isomorphic / universal projects that use ECMAScript modules:

  ```json
  {
    "root": true,
    "env": {
      "browser": true,
      "node": true
    },
    "extends": ["@isfawwaz/eslint-config-base/esm"]
  }
  ```

ℹ️ Note that by setting `root` to true, we ensure that no ancestor configuration is used which also improves `ESLint` performance because no more file lookups need to be done.

## Shared functionality

This package contains functionality that may be used directly if necessary:

- [_rules_](./lib/rules)
- [_modules_](./lib/modules)
- [_test-patterns_](./lib/test-patterns.js)
