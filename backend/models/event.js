const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Admin Schema
const eventSchema = new mongoose.Schema({
  eventname: { type: String, required: true },
  eventtype: { type: String, required: true },
  venue: { type: String, required: true },
  time: { type: String, required: true },
  hostname:{ type: String, required: true },
  ticketprice:{ type: String, required: true },
  imgURL:{ type: String, required: true },
  description:{ type: String, required: true },
  city:{ type: String, required: true },
  date:{ type: Date, required: true }
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports=Event;