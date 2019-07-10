// dependencies
const express = require('express');
const helmet = require('helmet');

// custom middleware
const logger = require('./middleware/logger');
const {
  validateUserId,
  validateUser,
  validatePost
} = require('./middleware/validation');

// express
const server = express();

// server
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
