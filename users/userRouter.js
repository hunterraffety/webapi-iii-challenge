const express = require('express');

const Users = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {});

router.post('/:id/posts', (req, res) => {});

router.get('/', async (req, res) => {
  try {
    const users = await Users.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'nope' });
  }
});

router.get('/:id', validateUserId, (req, res) => {
  try {
    const user = Users.getById(req.user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:id/posts', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;
  console.log(`id from validateuserid`, id);
  if (!isNaN(id)) {
    req.user = id;
    next();
  } else {
    res.status(400).json({ message: 'invalid user id' });
  }
}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
