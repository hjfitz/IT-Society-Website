const express = require('express');
const sqlite3 = require('sqlite3');

eventApi = express.Router();

eventApi.get('/', (req, res) => {
  res.send('Welcome to event API')
});

eventApi.post('/', (req, res) => {
  console.log(req.body);
  res.json({ 'cod':200 });
});

module.exports = eventApi;
