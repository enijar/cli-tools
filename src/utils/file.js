const os = require('os');
const fs = require('fs');
const logger = require('./logger');

module.exports = {
  exits(filePath, errorMessage) {
    if (!fs.existsSync(filePath)) {
      logger.error(errorMessage);
      process.exit(1);
    }
  },
  resolvePath(filePath) {
    return filePath.startsWith('~') ? filePath.replace('~', os.homedir()) : filePath;
  }
};
