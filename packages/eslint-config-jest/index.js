const testFilePatterns = require('@isfawwaz/eslint-config-base/lib/test-patterns');
const semver = require('semver');

module.exports = {
  overrides: [
    {
      files: testFilePatterns,
      plugins: ['jest'],
      extends: ['./rules/jest'].map(require.resolve),
      env: {
        jest: semver.satisfies(process.version, '<14') || undefined,
        'jest/globals': semver.satisfies(process.version, '>=14') || undefined,
      },
      rules: {
        // Allow `require` as it's needed for when we are using `jest.doMock` and friends
        'import/no-commonjs': 0,
      },
    },
  ],
};
