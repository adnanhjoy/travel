const express = require('express');
const { createDestination, getAllDestination } = require('../controllers/destination.controller');
const router = express.Router();


router.post('/', createDestination);
router.get('/', getAllDestination)

module.exports = router