const express = require('express');
const authGuard = require('../middleware/auth');
const { createBooking, getAllBooking, getBookingByUser } = require('../controllers/booking.controller');
const router = express.Router();

router.post('/', authGuard, createBooking);
router.get('/', authGuard(['admin', 'user']), getAllBooking);
router.get('/list', authGuard(['admin', 'user']), getBookingByUser)

module.exports = router