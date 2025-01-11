const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Signup Route
router.post('/newevent', async (req, res) => {
  const { eventname, venue,time,hostname,ticketprice,imgURL,description,city,date} = req.body;

  try {
    // Check if Event already exists
    const existingEvent = await Event.findOne({ eventname,hostname,venue });
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    if (existingEvent) {
      return res.status(400).json({ message: 'Event already exists' });
    }

    // Create new Event
    const newEvent = await Event.create({ eventname, venue,time,hostname,ticketprice,imgURL,description,city,date});

    res.status(201).json({
      _id: newEvent._id,
      eventname: newEvent.eventname,
      venue: newEvent.venue,
      time: newEvent.time,
      hostname: newEvent.hostname,
      ticketprice: newEvent.ticketprice,
      imgURL: newEvent.imgURL,
      description: newEvent.description,
      city: newEvent.city,
      date: dateObject
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


module.exports = router;