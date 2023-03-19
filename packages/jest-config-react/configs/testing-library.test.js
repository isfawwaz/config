const withRTL = require('./testing-library');

describe('Testing Library', () => {
  const buildConfig = () => ({
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['foo'],
  });

  it('should match snapshot', () => {
    expect(withRTL()(buildConfig())).toMatchSnapshot();
  });

  it('should throw if testEnvironment is not jsdom', () => {
    const config = {
      ...buildConfig(),
      testEnvironment: 'node',
    };

    expect(() => withRTL()(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
  });
});
