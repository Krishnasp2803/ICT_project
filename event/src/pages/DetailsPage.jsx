import React, { useEffect, useState } from 'react';

function EventDetails({ eventId }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/event/events/${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        setEvent(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching event details');
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div style={{ padding: '20px', color: 'black' }}>
      <h1>{event.eventname}</h1>
      <p><strong>Type:</strong> {event.eventtype}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Host:</strong> {event.hostname}</p>
      <p><strong>Ticket Price:</strong> {event.ticketprice}</p>
      <img src={event.imgURL} alt={event.eventname} style={{ width: '100%' }} />
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>City:</strong> {event.city}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
    </div>
  );
}

export default EventDetails;
