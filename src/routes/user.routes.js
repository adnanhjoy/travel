const express = require('express');
const { register, login, allUser, singleUser } = require('../controllers/user.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all', authGuard(['admin']), allUser);
router.get('/:email', authGuard(['admin','user']), singleUser)

module.exports = router;
