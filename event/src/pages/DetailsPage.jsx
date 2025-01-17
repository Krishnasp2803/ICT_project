import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();  // Get the event ID from the URL parameter
  
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Event ID from URL:", id);  // Log the event ID for debugging
    if (!id) {
      console.error("Event ID is missing!");
      return;
    }

    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/event/${id}`);  // Use the actual ID
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);  // Set event data if fetched successfully
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not logged in. Please log in to book tickets.");
      }

      const response = await fetch(`http://localhost:5000/api/event/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ eventId: id, tickets }),
      });

      if (!response.ok) {
        throw new Error("Failed to book tickets");
      }

      const data = await response.json();
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking tickets:", error);
      alert(error.message);
    }
  };

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (!event) {
    return <div>No event details found.</div>;
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
