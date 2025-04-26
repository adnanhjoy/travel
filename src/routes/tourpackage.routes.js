const express = require('express');
const { createTourPackage } = require('../controllers/tourpack.controller');
const router = express.Router();


router.post('/', createTourPackage);

module.exports = router