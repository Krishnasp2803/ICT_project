import React, { useState, useEffect } from "react";
//import EventDetails from "../components/EventDetails";

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching event details from an API
    const fetchEvent = async () => {
      setLoading(true);
      try {
        // Simulated API response
        const eventData = {
          name: "Tech Conference 2025",
          date: "January 15, 2025",
          time: "10:00 AM - 5:00 PM",
          organizer: "Tech Innovations Inc.",
          location: "Tech Hub Auditorium, Silicon Valley",
          description:
            "Join us for a day of insightful talks and networking with tech leaders.",
        };

        // Simulate API delay
        setTimeout(() => {
          setEvent(eventData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div style={styles.page}>
      {loading ? (
        <p>Loading event details...</p>) 
        : (    
        //<EventDetails event={event}/>
            <p>event details</p>
        )}
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
};

export default EventPage;
