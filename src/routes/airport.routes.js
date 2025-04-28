const express = require('express');
const { createAirport, getAllAirport, updateAirport, deleteAirport } = require('../controllers/airport.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();


router.post('/', authGuard, createAirport);
router.get('/', getAllAirport);
router.put('/:id', authGuard, updateAirport);
router.delete('/:id', authGuard, deleteAirport)

module.exports = router