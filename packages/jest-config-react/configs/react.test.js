const withReact = require('./react');

const buildConfig = () => ({
  testEnvironment: 'jsdom',
  transform: {
    foo: 'bar',
  },
  moduleNameMapper: {
    foz: 'baz',
  },
});

it('should match snapshot', () => {
  expect(withReact()(buildConfig())).toMatchSnapshot();
});

it('should throw if testEnvironment is not jsdom', () => {
  const config = {
    ...buildConfig(),
    testEnvironment: 'node',
  };

  expect(() => withReact()(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
});
