const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Signup Route
router.post('/newevent', async (req, res) => {
  const { eventname,eventtype, venue,time,hostname,ticketprice,imgURL,description,city,date} = req.body;

  try {
    // Check if Event already exists
    const existingEvent = await Event.findOne({ eventname,hostname,venue });
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    if (existingEvent) {
      return res.status(400).json({ message: 'Event already exists' });
    }

    // Create new Event
    const newEvent = await Event.create({ eventname,eventtype, venue,time,hostname,ticketprice,imgURL,description,city,date});

    res.status(201).json({
      _id: newEvent._id,
      eventname: newEvent.eventname,
      eventtype: newEvent.eventtype,
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




// Get eventlist by city, sorted by event type
// Fetch all eventlist sorted by event type
// In your routes file (e.g., event.js)

// Fetch eventlist filtered by eventtype
router.get('/eventlist', async (req, res) => {
  const { eventtype, city } = req.query; // Get eventtype and city from the query string

  try {
    let query = {};
    
    // Add filters to the query based on the provided parameters
    if (eventtype) {
      query.eventtype = eventtype;
    }
    if (city) {
      query.city = city;
    }

    // Fetch and sort events based on the query
    const eventlist = await Event.find(query).sort({ eventtype: 1 });

    res.status(200).json(eventlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching eventlist', error: error.message });
  }
});



module.exports = router;