const express = require('express');
const events = require('./events')

const adminApi = express.Router();

adminApi.use('/events', events);

adminApi.get('/', (req, res) => {
  res.send('welcome to administrative api');
});

module.exports = adminApi;
