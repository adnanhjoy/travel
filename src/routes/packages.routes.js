const express = require('express');
const { createPackages, getAllPackages } = require('../controllers/packages.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();

router.post('/', createPackages);
router.get('/', authGuard, getAllPackages)

module.exports = router;
