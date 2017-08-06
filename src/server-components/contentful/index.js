const contentful = require('contentful');
const chalk = require('chalk');
const express = require('express');

const config = require('../../../config').contentful;

const router = express.Router();
const prefix = chalk.yellow.bold(' [CONTENTFUL]\t');

console.log(chalk.green(`${prefix}Module loaded`));
console.log(`${prefix}Attempting to create a client using config.js`);

const client = contentful.createClient({
  space: config.space,
  accessToken: config.accessToken,
});

console.log(chalk.green(`${prefix}Client successfully created`));

router.get('/fields', (req, res) => {
  client.getEntries().then(resp => {
    res.json(resp.items);
  });
});


module.exports = router;
