const chalk = require('chalk');

// const config = require('../../config');

module.exports = {

  // checks to see if the attributes we need are included in config.js
  // checkConfig: (prefix, attrs, configOption) => {
  //   const checkConfig = config[configOption];
  //   // keep anything in here that's not included in the keys of the config item
  //   const missingAttrs = attrs.filter(attr => {
  //     return Object.keys(checkConfig).indexOf(attr) === -1;
  //   });
  //   if (missingAttrs.length !== 0) {
  //     console.log(chalk.red(`${prefix}Configuration incorrect!`));
  //     // destructure the list of attributes so that we can print them
  //     console.log(chalk.red(`${prefix}You're missing:`), ...missingAttrs);
  //     console.log(chalk.red(`${prefix}Exiting with error code.`));
  //     process.exit(1);
  //   } else {
  //     console.log(chalk.green(`${prefix}Config loaded successfully`));
  //   }
  // },
};
