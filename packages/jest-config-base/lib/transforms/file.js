const path = require('path');

module.exports = {
  process(_, sourcePath) {
    const basename = path.basename(sourcePath);

    return {
      code: `module.exports = ${JSON.stringify(basename)};`,
    };
  },
};
