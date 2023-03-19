# Personal Config

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![codecov](https://codecov.io/gh/isfawwaz/config/branch/main/graph/badge.svg?token=J2I8dIcRJD)](https://codecov.io/gh/isfawwaz/config)
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

ESLint, Jest, TSconfig and Prettier rules for all of my personal projects. Feel free to use these conventions :-)

## How it works

This repository contains set of _ESLint_, _Jest_, _Typescript_ & _Prettier_ configurations to be used in JavaScript and Typescript projects.

### ESLint

For _ESLint_ there are two set configurations to be used to:

- the **base** configuration, which defines the common ESLint rules, the ECMAScript version and the module system.
- the **enhancers**, which contain specific settings for different frameworks, like React or Vue.

By using one or more of these packages, you can enforce the desired code styles for each type of project.

For more information on how to use each package and their specific configurations, please read the package's README by following the links below. You may also check the examples listed in [Typical Configs](#typical-configs) to see how the packages may be combined for the most common scenarios.

For more information on how to use each package and their specific configurations, please read the package's README by following the links below. You may also check the examples listed in [Typical Configs](#typical-configs) to see how the packages may be combined for the most common scenarios.

#### Base config

The base config is published as [`@isfawwaz/eslint-config-base`](packages/eslint-config-base), check out its README to know how to use it.

#### Enhancer configs

There are several **enhancer** packages, which are intended to be used in conjunction with the **base** configuration:

- [`@isfawwaz/eslint-config-babel`](packages/eslint-config-babel/) - If you are going to use [Babel](https://babeljs.io/) to transpile source code.
- [`@isfawwaz/eslint-config-jest`](packages/eslint-config-jest/) - If you are going to use [Jest](https://facebook.github.io/jest/) to develop tests.

### Jest

For _Jest_ there are same with _ESLint_ which have two set configurations to be used to, but unfortunely on current version only **base** configuration available.

#### Base config

The base config is published as [`@isfawwaz/jest-config-base`](packages/jest-config-base), check out its README to know how to use it.

### Typescript Config

For _Typescript_ config there are two set configuration to be used to:

- [`@isfawwaz/tsconfig/react-library.json](packages/tsconfig/react-library.json) - If you want to detect accessibility issues on your library project which based on [React](https://reactjs.org/).
- [`@isfawwaz/tsconfig/nextjs.json](packages/tsconfig/react-library.json) - If you want to detect accessibility issues in web projects based on [NextJS](https://nextjs.org/).

### Prettier

For _Prettier_ config file, that only one config that can be used. check it out [`README.md`](packages/prettier-config) to know how to use it.

## Typical configs

<details>
  <summary>Standard JavaScript project</summary>

```json
{
  "root": true,
  "env": {
    "browser": true
  },
  "extends": [
    "@isfawwaz/eslint-config-base/esm",
    "@isfawwaz/eslint-config-babel",
    "@isfawwaz/eslint-config-jest"
  ]
}
```

ℹ️ If your project is isomorphic / universal, you may want to enable the `node` environment as well.

</details>

<details>
  <summary>Node.js project</summary>

```json
{
  "root": true,
  "env": {
    "node": true
  },
  "extends": ["@isfawwaz/eslint-config-base/cjs/es2019", "@isfawwaz/eslint-config-jest"]
}
```

⚠️ In the above example, we choose the `es2019` version instead of the latest ECMAScript version because there's no Babel compilation and we are restricted to what the Node.js runtime supports. Please check [node.green](https://node.green/) and select the most appropriate ECMAScript version based on the Node.js version you are targeting.

</details>

<details>
  <summary>Extend prettier config</summary>

> Note: This method only when you need to extend the configuration, import the file in a .prettierrc.js file and export the modifications, e.g:

```javascript
// .prettierrc.js

module.exports = {
  ...require('@isfawwaz/prettier-config'),
  singleQuote: false,
};
```

</details>

<details>
  <summary>React library tsconfig</summary>
  ```json
  {
    "extends": "@isfawwaz/tsconfig/react-library.json",
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
  }
  ```
</details>

## Special Thanks

Thanks to [@moxy/eslint-config](https://github.com/moxystudio/eslint-config/blob/master/README.md?plain=1) for such amazing inspiration for me to create my version of config.

## License

[MIT License](http://opensource.org/licenses/MIT)

<!-- prettier-ignore-start -->
[build-badge]: https://img.shields.io/github/actions/workflow/status/isfawwaz/config/ci.yml?branch=main
[version-badge]: https://img.shields.io/npm/v/isfawwaz/config.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/isfawwaz/config.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/config.svg?style=flat-square
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[all-contributors-badge]: https://img.shields.io/github/all-contributors/isfawwaz/config?color=orange&style=flat-square

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build]: https://github.com/isfawwaz/eslint-config-isfawwaz/actions?query=workflow%3ACI
[package]: https://www.npmjs.com/package/isfawwaz/config
[npmtrends]: http://www.npmtrends.com/isfawwaz
[license]: https://github.com/isfawwaz/config/blob/master/LICENSE
[prs]: http://makeapullrequest.com
[coc]: https://github.com/isfawwaz/config/blob/master/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://g.all-contributorsrcithub.com/all-contributors/all-contributors
[bugs]: https://github.com/isfawwaz/config/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/isfawwaz/config/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/isfawwaz/config/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[eslint]: https://github.com/eslint/eslint
<!-- prettier-ignore-end -->
