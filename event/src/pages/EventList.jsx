import React, { useEffect, useState } from "react";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEventType, setSelectedEventType] = useState("");

  // Get event type from the query parameters
  const searchParams = new URLSearchParams(window.location.search);
  const eventTypeFromUrl = searchParams.get("eventtype");

  useEffect(() => {
    console.log("Event type from URL:", eventTypeFromUrl);
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/event/eventlist?eventtype=${eventTypeFromUrl}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log("Fetched events:", data);
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    if (eventTypeFromUrl) {
      fetchEvents();
    }
  }, [eventTypeFromUrl]);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (events.length === 0) {
    return <div>No events available for {eventTypeFromUrl}.</div>;
  }

  return (
    <div>
      <h1 style={{textTransform:'uppercase'}}>{eventTypeFromUrl} Events</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {events.map((event) => (
          <div key={event._id} style={{ border: "1px solid #ccc", padding: "20px" }}>
            <img
              src={event.imgURL}
              alt={event.eventname}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h2>{event.eventname}</h2>
            <p>Type: {event.eventtype}</p>
            <p>Venue: {event.venue}</p>
            <p>Date: {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
