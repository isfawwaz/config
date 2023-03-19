# @isfawwaz/jest-config-base

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://npmjs.org/package/@isfawwaz/jest-config-base
[npm-image]: https://img.shields.io/npm/v/@isfawwaz/jest-config-base
[downloads-image]: https://img.shields.io/npm/dm/@isfawwaz/jest-config-base

Shared [Jest](https://jest.io) **base** configuration for my projects.

## Installation

```bash
npm install --save-dev @isfawwaz/jest-config-base
# or
pnpm add -D @isfawwaz/jest-config-base
# or
yarn add -D @isfawwaz/jest-config-base
```

## Usage

Create `jest.config.js` at the root of your project:

```js
const { baseConfig } = require('@isfawwaz/jest-config-base');
module.exports = baseConfig();
```

The `baseConfig` function accepts an optional parameter that allows to specify the Jest environment, which can be `jsdom` (default) or `node`. As an example, for Node.js projects you would use like so:

```js
const { baseConfig } = require('@isfawwaz/jest-config-base');
module.exports = baseConfig('node');
```

If you want to modify the base config, you may change the config imperatively like so:

```js
'use strict';
const { baseConfig } = require('@isfawwaz/jest-config-base');
const config = baseConfig();
// Do not test `.data.js` files
config.testPathIgnorePatterns = [...config.testPathIgnorePatterns, '/.*.data.js$/'];
module.exports = config;
```
