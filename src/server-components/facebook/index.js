const fetch = require('node-fetch');
const express = require('express');
const chalk = require('chalk');

const router = express.Router();
const prefix = chalk.blue.bold('[FACEBOOK]');
const graphURL = 'https://graph.facebook.com/';

const print = msg => require('../../../util').print(prefix, msg);

const groupID = '148498079028819';
const postsURL = `${graphURL}${groupID}/posts?access_token=${process.env.FACEBOOK_ACCESS}`;


router.get('/posts', async (req, res) => {
  const rawPosts = await fetch(postsURL);
  const posts = await rawPosts.json();
  print(`Returning ${posts.data.length} posts @ /api/facebook/posts`);
  res.json(posts.data);
});

module.exports = router;
