require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const packageRoutes = require('./routes/packages.routes');
const destinationRoutes = require('./routes/destination.routes')
const bookingRoutes = require('./routes/booking.routes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/package', packageRoutes);
app.use('/api/destination', destinationRoutes)
app.use('/api/bookings', bookingRoutes);

module.exports = app;
