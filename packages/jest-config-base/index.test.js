const jestConfig = require('.');

it('should export all functionality', () => {
  expect(jestConfig).toHaveProperty('baseConfig');
  expect(jestConfig).toHaveProperty('compose');
});
