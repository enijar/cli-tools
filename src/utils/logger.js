const chalk = require('chalk');

const logger = (rgb = [], ...args) => {
  for (let i = 0, length = args.length; i < length; i++) {
    console.log(chalk.bold.rgb(...rgb)(args[i]));
  }
};

module.exports = {
  log(...args) {
    console.log(...args);
  },
  warn(...args) {
    logger([255, 255, 0], args);
  },
  error(...args) {
    logger([255, 0, 0], args);
  },
  success(...args) {
    logger([0, 255, 0], args);
  },
};
