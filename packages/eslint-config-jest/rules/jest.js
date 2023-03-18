// Jest: https://github.com/jest-community/eslint-plugin-jest#readme

module.exports = {
  rules: {
    // Disallow disabled Tests
    'jest/no-disabled-tests': 'warn',
    // No focused tests
    'jest/no-focused-tests': 'error',
    // No identical title
    'jest/no-identical-title': 'error',
    // Prefer toHaveLength() over toBe()
    'jest/prefer-to-have-length': 'error',
    // Ensure expect is called correctly
    'jest/valid-expect': 'error',
  },
};
