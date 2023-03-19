const testFilePatterns = require('@isfawwaz/eslint-config-base/lib/test-patterns');

module.exports = {
  overrides: [
    {
      files: testFilePatterns,
      plugins: ['jest'],
      extends: ['./rules/jest'].map(require.resolve),
      env: {
        'jest/globals': true,
      },
      rules: {
        // Allow `require` as it's needed for when we are using `jest.doMock` and friends
        'import/no-commonjs': 0,
      },
    },
  ],
};
