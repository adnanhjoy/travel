const express = require('express');
const authGuard = require('../middleware/auth');
const { createBooking, getAllBooking, getBookingByUser } = require('../controllers/booking.controller');
const router = express.Router();

router.post('/', authGuard, createBooking);
router.get('/', authGuard, getAllBooking);
router.get('/list', authGuard, getBookingByUser)

module.exports = router