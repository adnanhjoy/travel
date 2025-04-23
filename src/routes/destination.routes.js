const express = require('express');
const { createDestination, getAllDestination, updateDestination, deleteDestination } = require('../controllers/destination.controller');
const router = express.Router();


router.post('/', createDestination);
router.get('/', getAllDestination);
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination)

module.exports = router