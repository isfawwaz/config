const assert = require('assert');

const baseConfig = require('./base-config');

const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

/**
 *
 * @param {string} testEnvironment - Jest test environment.
 * @param  {...import('jest').Config} configs - Jest configuration.
 * @returns {import('jest').Config} - Jest configuration.
 */
module.exports = (testEnvironment = 'jsdom', ...configs) => {
  assert(
    typeof testEnvironment === 'string',
    new TypeError('Expected testEnvironment to be string. Example: jsdom or node'),
  );

  return configs.reduce((acumulator, currentConfig) => {
    assert(
      isObject(currentConfig) || typeof currentConfig === 'function',
      new TypeError('Expected config to be object or function'),
    );

    acumulator =
      typeof currentConfig === 'function'
        ? currentConfig(acumulator)
        : { ...acumulator, ...currentConfig };

    assert(isObject(acumulator), new TypeError('Expected enhancer to return the config.'));

    return acumulator;
  }, baseConfig(testEnvironment));
};
