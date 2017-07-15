const express = require('express');
const chalk = require('chalk');

const util = require('./util');

const app = express();

// setup global vars
const PORT = process.env.PORT || 8080;
const pub = `${__dirname}/build/public`;
const serverLocation = chalk.bold(`localhost:${PORT}`);

// every time the server gets hit, log it nicely.
app.use('/', (req, res, next) => {
  const method = util.formatMethod(req.method);
  console.log(`${new Date()} :: ${method} ${req.url}`);
  next();
});

console.log(__dirname);
console.log(pub);
// keep all of the resources on /pub
app.use('/pub', express.static(pub, {
  extensions: ['css', 'js', 'png', 'jpg'],
}));

// but stick the html pages under the root.
app.use('/', express.static(pub, { extensions: ['html'] }));

// we only want the user to see the predefined files, under pubic
// therefore, we send a 404 when they attempt to navigate elsewhere.
app.use('*', (req, res) => {
  res.status(404).send('404, page not found.');
});

console.log(chalk.yellow(`Attempting to listen on ...${serverLocation}`));

app.listen(PORT);

console.log(`${chalk.green('Success!')} Server running on ${serverLocation}\n`);
