const fetch = require('node-fetch');
const express = require('express');
const chalk = require('chalk');

const router = express.Router();
const prefix = chalk.blue.bold('[FACEBOOK]');
const graphURL = 'https://graph.facebook.com/';
const access = `?access_token=${process.env.FACEBOOK_ACCESS}`;

const print = msg => require('../../../util').print(prefix, msg);

const groupID = '148498079028819';


router.get('/posts', async (req, res) => {
  const postsURL = `${graphURL}${groupID}${access}`;
  const rawPosts = await fetch(postsURL);
  const posts = await rawPosts.json();
  print('Returning posts @ /api/facebook/posts');
  res.json(posts.data);
});

router.get('/post/:id', async (req, res) => {
  const id = req.params.id;
  if (!id) res.status(404).send('Post not found!');
  const postURL = `${graphURL}/${id}${access}`;
  const rawPost = await fetch(postURL);
  const post = await rawPost.json();
  res.json(post);
});

module.exports = router;
