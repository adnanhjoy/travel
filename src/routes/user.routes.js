const express = require('express');
const { register, login, allUser, singleUser } = require('../controllers/user.controller');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all', allUser);
router.get('/:email', singleUser)

module.exports = router;
