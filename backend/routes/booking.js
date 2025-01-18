//Book Tickets
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Event = require('../models/event');
const authenticateUser = require('../middleware/authenticateUser');

router.post('/book', authenticateUser, async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Authenticated user:", req.user);

  const { eventId, tickets } = req.body;
  if (!eventId || !tickets || isNaN(parseInt(tickets)) || parseInt(tickets) <= 0) {
    return res.status(400).json({ message: 'Invalid input data' });
  }


  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const booking = await Booking.create({
      userId: req.user._id,
      eventId,
      tickets,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error in booking route:", error);
    res.status(500).json({ message: 'Error booking tickets', error: error.message });
  }
});




//Get Registered Events for a User

  router.get('/booking/me', authenticateUser, async (req, res) => {
    
    try {
      const bookings = await Booking.find({ userId: req.user._id })
      .populate('eventId');
      //.lean();
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
  });
  

  module.exports = router;
  
  