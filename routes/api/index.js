const express = require('express');
const admin = require('./admin')

const api = express.Router();

api.use('/admin', admin);

api.get('/', (req, res) => {
  res.send('Welcome to APIv1!');
});

module.exports = api;
