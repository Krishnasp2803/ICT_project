import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button'; 

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
            {/*<Link to>*/}
            <img
              src={event.imgURL}
              alt={event.eventname}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            
            <h2>{event.eventname}</h2>
            <p style={{
              fontSize:'140%',
              marginRight:'70%',

            }}> Type: {event.eventtype}</p>
            <p style={{
              fontSize:'140%',
              marginRight:'60%',

            }}>Venue: {event.venue}</p>
            <p style={{
              fontSize:'140%',
              marginRight:'40%',

            }}>Date: {event.date}</p>
            <Button 
              sx={{
                
                padding: "10px 20px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: 'lightblue', // Hover color
                },

              
              }}>
            
              Register

            </Button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
