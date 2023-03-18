# prettier-config

> Shared [Prettier](https://prettier.io) config for my projects.

## Install

```bash
npm install --save-dev @isfawwaz/prettier-config
# or
pnpm add -D @isfawwaz/prettier-config
# or
yarn add -D @isfawwaz/prettier-config
```

## Usage

### On package.json

Add this to your `package.json`:

```json
{
  "prettier": "@isfawwaz/prettier-config"
}
```

### Different files

If you don’t want to use package.json, you can use any of the supported extensions to export a string, e.g. .prettierrc.json:

```json
"@isfawwaz/prettier-config"
```

> Note: This method does not offer a way to extend the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a .prettierrc.js file and export the modifications, e.g:

```javascript
module.exports = {
  ...require('@isfawwaz/prettier-config'),
};
```
