const express = require('express');
const { createPackages, getAllPackages, getSinglePackage } = require('../controllers/packages.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();

router.post('/', createPackages);
router.get('/', authGuard, getAllPackages);
router.get('/:id', getSinglePackage)

module.exports = router;
