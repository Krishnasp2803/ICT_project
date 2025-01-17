import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/event/${id}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBooking = async () => {
    try {
      const userId = "YOUR_USER_ID"; // Replace with actual user ID
      const response = await fetch(`http://localhost:5000/api/event/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, eventId: id, tickets }),
      });
      const data = await response.json();
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking tickets:", error);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.eventname}</h1>
      <img src={event.imgURL} alt={event.eventname} style={{ width: "100%" }} />
      <p>{event.description}</p>
      <p>Venue: {event.venue}</p>
      <p>Date: {event.date}</p>
      <p>Ticket Price: {event.ticketprice}</p>
      <input
        type="number"
        value={tickets}
        min="1"
        onChange={(e) => setTickets(e.target.value)}
      />
      <button onClick={handleBooking}>Book Your Tickets Now</button>
    </div>
  );
}

export default DetailsPage;
