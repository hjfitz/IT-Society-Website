const contentful = require('contentful');
const chalk = require('chalk');
const express = require('express');

const util = require('./util.js');


const contentfulApi = express.Router();
const prefix = chalk.yellow.bold(' [CONTENTFUL]\t');

console.log(chalk.green(`${prefix}Module loaded`));
console.log(`${prefix}Attempting to create a client using config.js`);

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS,
});

console.log(chalk.green(`${prefix}Client successfully created`));

contentfulApi.get('/all', (req, res) => {
  client.getEntries().then(resp => {
    res.json(resp.items);
  });
});

/**
 * gets all committeeMembers, regardless of year
 */
contentfulApi.get('/committeeMembers', (req, res) => {
  client.getEntries().then(resp => {
    res.json(util.getByType('committeeMember', resp.items));
  });
});

/**
 * returns all committee members of a specific year
 */
contentfulApi.get('/committee/:year', (req, res) => {
  const year = req.params.year;
  client.getEntries().then(resp => {
    // get the committee models
    return util.getByType('committee', resp.items);
  }).then(committee => {
    // filter the committee by year
    return committee.filter(specificCommittee => {
      return specificCommittee.fields.committeeYear === year;
    });
  }).then(specificCommittee => {
    res.json(specificCommittee);
  });
});


contentfulApi.get('/events', (req, res) => {
  client.getEntries().then(resp => {
    res.json(util.getByType('event', resp.items));
  });
});


module.exports = contentfulApi;
