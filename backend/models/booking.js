const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  bookingDate: { type: Date, default: Date.now },
  tickets: { type: Number, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);
