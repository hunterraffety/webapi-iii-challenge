// dependencies
const express = require('express');
const helmet = require('helmet');

// custom middleware 'imports'

// express
const server = express();

// middleware etc.
server.use(logger);
server.use(helmet());
server.use(express.json());

// server
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
