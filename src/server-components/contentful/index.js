const contentful = require('contentful');
const chalk = require('chalk');
const express = require('express');

const config = require('../../../config').contentful;

const router = express.Router();
const prefix = chalk.bold('[CONTENTFUL]\t');

console.log(chalk.green(`${prefix}Module loaded.`));
console.log(`${chalk.yellow(prefix)}${chalk.white('Attempting to create a client using config.js.')}`);

const client = contentful.createClient({
  space: config.space,
  accessToken: config.accessToken,
});

router.get('/fields', (req, res) => {
  const data = [];
  console.log('/fields get');
  client.getEntries().then((resp) => {
    console.log(resp.items);
    res.json(resp.items);
  });
});


module.exports = router;
