const express = require('express');
const Event = require('../models/event');
const router = express.Router();
const { parseISO } = require('date-fns');


// Signup Route
router.post('/newevent', async (req, res) => {
  const {
    eventname,
    eventtype,
    venue,
    time,
    hostname,
    ticketprice,
    imgURL,
    description,
    city,
    date,
  } = req.body;

  try {
    // Check if Event already exists
    const existingEvent = await Event.findOne({
      eventname,
      hostname,
      venue,
    });
    if (existingEvent) {
      return res.status(400).json({ message: 'Event already exists' });
    }

    // Convert the received date to a Date object
    let eventDate = parseISO(date);

    // Add one day (if needed) to handle timezone issues
    eventDate.setDate(eventDate.getDate() + 1);

    // Create new Event with adjusted date
    const newEvent = await Event.create({
      eventname,
      eventtype,
      venue,
      time,
      hostname,
      ticketprice,
      imgURL,
      description,
      city,
      date: eventDate, // Use adjusted date here
    });

    res.status(201).json(newEvent); // Respond with the created event directly
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Fetch eventlist filtered by eventtype and city
router.get('/eventlist', async (req, res) => {
  const { eventtype, city,eventDate}=req.query;

  console.log('Query parameters received:', req.query); // Log the query parameters

  try {
    let query = {};
    if (eventtype) query.eventtype = eventtype;
    if (city) {
      // Case-insensitive matching for city
      query.city = { $regex: new RegExp(city, 'i') };
    }
    if (eventDate) {
      try {
        const startOfDay = new Date(eventDate);
        startOfDay.setUTCHours(0, 0, 0, 0); // Start of the day in UTC
        const endOfDay = new Date(eventDate);
        endOfDay.setUTCHours(23, 59, 59, 999); // End of the day in UTC
    
        query.date = { $gte: startOfDay, $lte: endOfDay }; // Match the full day
      } catch (error) {
        return res.status(400).json({ message: 'Invalid date format', error: error.message });
      }
    }
    

    console.log('MongoDB Query:', query); // Log the query before execution

    // Fetch events sorted by eventtype (alphabetically)
    const eventlist = await Event.find(query).sort({ eventtype: 1 });

    console.log('Fetched Events:', eventlist); // Log the fetched events
    res.json(eventlist);
  } catch (error) {
    console.error('Error in /eventlist route:', error);
    res.status(500).json({ message: 'Error fetching eventlist', error: error.message });
  }
});

// Correct route setup for fetching event details by ID
router.get('/:id', async (req, res) => {
  const eventId = req.params.id;  // Access the event ID from the URL parameter
  try {
    const event = await Event.findById(eventId);  // Fetch the event from the database
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);  // Send the event data back in the response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
});

module.exports = router;