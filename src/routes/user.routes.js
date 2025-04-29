const express = require('express');
const { register, login, allUser, singleUser, updateUser } = require('../controllers/user.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/all', authGuard(['admin']), allUser);
router.get('/:email', authGuard(['admin', 'user']), singleUser);
router.put('/:emailId', authGuard(['admin', 'user']), updateUser)

module.exports = router;
