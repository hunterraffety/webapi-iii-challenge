const express = require('express');

const Users = require('./userDb');

const router = express.Router();

router.use(express.json());

// to add a user?
router.post('/', validateUser, async (req, res) => {});

// to add a post for a specific user
router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {});

// to get all users
router.get('/', async (req, res) => {
  try {
    const users = await Users.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'nope' });
  }
});

// to get a specific user
router.get('/:id', validateUserId, async (req, res) => {
  try {
    const user = await Users.getById(req.user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// to get posts by a specific user
router.get('/:id/posts', validateUserId, async (req, res) => {
  try {
    const posts = await Users.getUserPosts(req.user);
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
});

// to delete a user
router.delete('/:id', validateUserId, async (req, res) => {});

// to update a user
router.put('/:id', validateUserId, async (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;

  Users.getById(id)
    .then(user => {
      if (!user) {
        res.status(400).json({ message: 'Invalid user ID.' });
      } else {
        req.user = user.id;
        next();
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'User could not be retrieved.' });
    });
}

/* thx papa chris~ */

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
