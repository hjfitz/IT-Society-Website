const fetch = require('node-fetch');
const express = require('express');
const chalk = require('chalk');

// Does something
// const config = require('../../../config').facebook;
const util = require('../util');

const router = express.Router();
const prefix = chalk.blue.bold(' [FACEBOOK]\t');
const graphURL = 'https://graph.facebook.com/';

console.log(`${prefix}${chalk.green('Module loaded')}`);

// util.checkConfig(prefix, ['accessToken'], 'facebook');


const groupID = '148498079028819';
const postsURL = `${graphURL}${groupID}/posts?access_token=${process.env.FACEBOOK_ACCESS}`;


router.get('/posts', (req, res) => {
  fetch(postsURL).then(data => {
    return data.json();
  }).then(data => {
    res.json(data.data);
  });
});

module.exports = router;
