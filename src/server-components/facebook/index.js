const fetch = require('node-fetch');
const express = require('express');
const chalk = require('chalk');

// Does something
const config = require('../../../config').facebook;

const router = express.Router();
const prefix = chalk.blue.bold('[FACEBOOK]\t');
const graphURL = 'https://graph.facebook.com/';

const groupID = '148498079028819';
const postsURL = `${graphURL}${groupID}/posts?access_token=${config.accessToken}`;

console.log(`${prefix}Module loaded`);

router.get('/posts', (req, res) => {
  fetch(postsURL).then(data => {
    return data.json();
  }).then(data => {
    res.json(data.data);
  });
});

module.exports = router;
