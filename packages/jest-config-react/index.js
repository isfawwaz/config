const { extendConfig } = require('@isfawwaz/jest-config-base');

const configReact = require('./configs/react');
const configTestingLibrary = require('./configs/testing-library');

module.exports = extendConfig('jsdom', configReact(), configTestingLibrary());
