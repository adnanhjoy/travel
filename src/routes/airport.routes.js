const express = require('express');
const { createAirport, getAllAirport, updateAirport, deleteAirport } = require('../controllers/airport.controller');
const router = express.Router();


router.post('/', createAirport);
router.get('/', getAllAirport);
router.put('/:id', updateAirport);
router.delete('/:id', deleteAirport)

module.exports = router