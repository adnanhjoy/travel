require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const packageRoutes = require('./routes/packages.routes');
const airportRoutes = require('./routes/airport.routes')
const bookingRoutes = require('./routes/booking.routes');
const tourPackage = require('./routes/tourpackage.routes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/package', packageRoutes);
app.use('/api/airport', airportRoutes)
app.use('/api/bookings', bookingRoutes);
app.use('/api/tour-package', tourPackage)

module.exports = app;
