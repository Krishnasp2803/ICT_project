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




// Fetch eventlist filtered by eventtype
router.get('/eventlist', async (req, res) => {
  const { eventtype } = req.query;  // Get the eventtype from the query string

  try {
    let eventlist;
    
    if (eventtype) {
      // If eventtype is provided, filter eventlist by eventtype
      eventlist = await Event.find({ eventtype }).sort({ eventtype: 1 });  // Sort eventlist by eventtype
    } else {
      // If no eventtype is provided, fetch all eventlist
      eventlist = await Event.find().sort({ eventtype: 1 });
    }
    
    res.status(200).json(eventlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching eventlist', error: error.message });
  }
});



module.exports = router;