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

router.get('/:id', (req, res) => {});

router.get('/:id/posts', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;
  if ((id = req.params.id)) {
    console.log(`test ${id}`);
  }
}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
