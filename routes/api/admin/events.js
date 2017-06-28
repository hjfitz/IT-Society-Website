const express = require('express');
const sqlite3 = require('sqlite3');

eventApi = express.Router();

eventApi.get('/', (req, res) => {
  res.send('welcome to admin api - events');
});

module.exports = eventApi;
