const contentful = require('contentful');
const chalk = require('chalk');
const express = require('express');

const util = require('./util.js');


const contentfulApi = express.Router();
const prefix = chalk.yellow.bold('[CONTENTFUL]');
const print = msg => require('../../../util').print(prefix, msg);

print(chalk.green('Module loaded.'));
print('Attempting to create client using .env');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS,
});

print(chalk.green('Client successfully created'));

contentfulApi.get('/all', async (req, res) => {
  const entries = await getEntries();
  print(`Returning ${entries.items.length} entries @ /api/contentful/all in conentful/index.js`);
  res.json(entries.items);
});

/**
 * gets all committeeMembers, regardless of year
 */
contentfulApi.get('/committeeMembers', async (req, res) => {
  const entries = await client.getEntries();
  print('Returning all Committee Members @ /api/contentful/committeeMembers in contentful/index.js');
  const members = util.getByType('committeeMember', entries.items);
});

/**
 * returns all committee members of a specific year
 */
contentfulApi.get('/committee/:year', async (req, res) => {
  const year = req.params.year;
  const entries = await client.getEntries();
  const committee = util.getByType('committee', entries.items);
  const specificYear = committee.filter(specificCommittee => specificCommittee.fields.committeeYear === year);
  print(`Returning Committee Members of year ${year} @ /api/contentful/committee/:year in contentful/index.js`);
  res.json(specificYear);
});


contentfulApi.get('/events', async (req, res) => {
  const entries = await client.getEntries();
  const events = util.getByType('event', entries.items);
  print(`Returning ${events.length} events @ /api/contentful/events in contentful.index.js`);
  res.json(events);
});


module.exports = contentfulApi;
