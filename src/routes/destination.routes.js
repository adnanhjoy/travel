const express = require('express');
const { createDestination, getAllDestination, updateDestination } = require('../controllers/destination.controller');
const router = express.Router();


router.post('/', createDestination);
router.get('/', getAllDestination);
router.put('/:id', updateDestination)

module.exports = router