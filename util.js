const chalk = require('chalk');

/**
 * Colorise our CRUD based on the request
 * @param {String} method The method used with the server
 */
const formatMethod = method => {
  switch (method) {
    case 'GET':
      return chalk.green('GET');
    case 'POST':
      return chalk.yellow('POST');
    case 'DELETE':
      return chalk.bold('DELETE');
    case 'PATCH':
      return chalk.blue('PATCH');
    default:
      return method;
  }
};

/**
 * Pretty print, used to let us know which module is logging
 * @param {String} prefix What we want to prepend
 * @param {String} msg Message to print
 */
const print = prefix => msg => console.log(`${prefix} ${msg}`);

// pretty printer for this file
const utilPrint = msg => print('[UTIL]')(msg);
utilPrint('Module loaded');

/**
 * Go through the vars we need to make the site work
 * Output if any are missing
 */
const checkEnv = () => {
  const requiredVars = [
    'FACEBOOK_ACCESS',
    'CONTENTFUL_SPACE',
    'CONTENTFUL_ACCESS',
  ];
  const missingVars = [];
  requiredVars.forEach(reqVar => {
    if (!process.env[reqVar]) missingVars.push(reqVar);
  });
  if (missingVars.length > 0) {
    utilPrint(chalk.red('The following .env variables are missing!'));
    missingVars.forEach(missingVar => {
      utilPrint(`  ${missingVar}`);
    });
    process.exit(1);
  } else {
    utilPrint(chalk.green('.env loaded successfully'));
  }
};

module.exports = {
  formatMethod,
  print,
  checkEnv,
};
