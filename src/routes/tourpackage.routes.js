const express = require('express');
const { createTourPackage, searchTourPackage, getAllTourPackage } = require('../controllers/tourpack.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();


router.post('/', authGuard, createTourPackage);
router.post('/search', searchTourPackage);
router.get('/', getAllTourPackage)

module.exports = router