const express = require('express');
const admin = express.Router();

admin.get('/events', (req, res) => {
  res.render('admin/events', {
    foo:'bar',
  });
})

module.exports = admin;
