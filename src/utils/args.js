const logger = require('./logger');

module.exports = {
  get(argv, names = []) {
    let processArgs;
    if (argv[0].endsWith('node')) {
      processArgs = argv.slice(2);
    } else {
      processArgs = argv.slice(1);
    }
    const args = {};
    for (let i = 0, length = processArgs.length; i < length; i++) {
      const argumentName = names[i];
      if (argumentName !== undefined) {
        args[argumentName] = processArgs[i];
      }
    }
    return args;
  },
  constrainedNumber(args, argName, min, max, errorMessage) {
    if (args[argName] === undefined) {
      return;
    }
    if (isNaN(args[argName]) || args[argName] < min || args[argName] > max) {
      logger.error(errorMessage);
      process.exit(1);
    }
  },
  required(args, argName, errorMessage) {
    if (args[argName] === undefined) {
      logger.error(errorMessage);
      process.exit(1);
    }
  }
};
