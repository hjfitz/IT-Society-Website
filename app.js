const express = require('express');
const chalk = require('chalk');
const path = require('path');

const prefix = chalk.white.bold(' [SERVER]\t');
console.log(`${prefix}Initialising server...`);

const util = require('./util');

const contentfulAPI = require('./src/server-components/contentful');
const facebookAPI = require('./src/server-components/facebook');

const app = express();

// setup global vars
const PORT = process.env.PORT || 8080;
const pub = `${__dirname}/build/public`;
const serverLocation = chalk.bold(`localhost:${PORT}`);

// host contentful on the API route
app.use('/api/contentful', contentfulAPI);
app.use('/api/facebook', facebookAPI);

// every time the server gets hit, log it nicely.
app.use('/', (req, res, next) => {
  const method = util.formatMethod(req.method);
  console.log(`${chalk.bold(prefix)}${new Date()} :: ${method} ${req.url}`);
  next();
});

// keep all of the resources on /pub
app.use('/pub', express.static(pub));

// but stick the html pages under the root.
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/public/index.html'));
});

console.log(`${chalk.yellow(prefix)}Attempting to listen on ${serverLocation}`);

app.listen(PORT);

console.log(chalk.green(`${prefix}Success! Server running on ${serverLocation}`));
