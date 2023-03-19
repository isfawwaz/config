module.exports = {
  plugins: ['import', 'jsdoc', 'prettier'],
  extends: [
    './lib/rules/best-practices',
    './lib/rules/errors',
    './lib/rules/es6',
    './lib/rules/import',
    './lib/rules/jsdoc',
    './lib/rules/node',
    './lib/rules/strict',
    './lib/rules/style',
    './lib/rules/variables',
    './lib/rules/prettier',
  ].map(require.resolve),
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
  },
  overrides: [
    {
      files: ['./*.config.js', './.eslintrc.js'],
      env: {
        node: true,
      },
      extends: ['./lib/modules/cjs'],
    },
  ],
};
