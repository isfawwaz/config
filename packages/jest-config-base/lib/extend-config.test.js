const baseConfig = require('../lib/base-config');

const extend = require('./extend-config');

it('should extend enhancers and output accumulated returns', () => {
  const one = jest.fn(() => ({ foo: 'bar' }));
  const two = jest.fn(() => ({ foz: 'baz' }));

  // const expected = { ...baseConfig(), foo: 'bar', foz: 'baz' };

  expect(extend('jsdom', one, two)).toEqual({ foz: 'baz' });

  expect(one).toHaveBeenCalledTimes(1);
  expect(one).toHaveBeenLastCalledWith(baseConfig());
  expect(two).toHaveBeenCalledTimes(1);
  expect(two).toHaveBeenLastCalledWith({ foo: 'bar' });
});

it('should not fail if there no enhancers', () => {
  expect(extend('jsdom', {})).toEqual(baseConfig());
});

it('should throw when first argument is not an object', () => {
  const notAnObject = 'string';

  expect(() => extend('jsdom', notAnObject)).toThrow(/config to be object/i);
});

it('should throw when an enhancer does not return an object', () => {
  const enhancer = () => 1;

  expect(() => extend('jsdom', {}, enhancer)).toThrow(/to return the config/i);
});
