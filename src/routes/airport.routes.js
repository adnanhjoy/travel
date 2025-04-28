const express = require('express');
const { createAirport, getAllAirport, updateAirport, deleteAirport } = require('../controllers/airport.controller');
const authGuard = require('../middleware/auth');
const router = express.Router();


router.post('/', authGuard(['admin']), createAirport);
router.get('/', getAllAirport);
router.put('/:id', authGuard(['admin']), updateAirport);
router.delete('/:id', authGuard(['admin']), deleteAirport)

module.exports = router