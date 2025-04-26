const express = require('express');
const { createTourPackage, searchTourPackage, getAllTourPackage } = require('../controllers/tourpack.controller');
const router = express.Router();


router.post('/', createTourPackage);
router.post('/search', searchTourPackage);
router.get('/', getAllTourPackage)

module.exports = router