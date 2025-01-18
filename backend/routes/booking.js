//Book Tickets
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Event = require('../models/event');
const authenticateUser = require('../middleware/authenticateUser');

router.post('/book', authenticateUser, async (req, res) => {
  const { eventId, tickets } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const booking = await Booking.create({ 
      userId: req.user._id, // Extracted from the authenticated user (should be available via authenticateUser)
      eventId,
      tickets,
      bookingDate: new Date(), // You may want to include the current date and time of the booking
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error booking tickets', error: error.message });
  }
});



//Get Registered Events for a User

  router.get('/bookings/me', authenticateUser, async (req, res) => {
    try {
      const bookings = await Booking.find({ userId: req.user._id }).populate('eventId');
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
  });
  

  module.exports = router;
  
  