import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function DetailsPage() {
  const { id } = useParams(); // Get the event ID from the URL parameter
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const checkTokenExpiration = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Get current time in seconds
      if (decoded.exp < currentTime) {
        console.log("Token has expired");
        return false; // Token has expired
      }
      console.log("Token is valid");
      return true; // Token is valid
    } catch (error) {
      console.error("Error decoding token:", error);
      return false; // Token is invalid or malformed
    }
  };

  useEffect(() => {
    if (!id) {
      console.error("Event ID is missing!");
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        const response = await fetch(`https://ict-project-yp5v.onrender.com/api/event/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBooking = async () => {
    if (!checkTokenExpiration()) {
      alert("Your session has expired. Please log in again.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please log in to book tickets.");
      }

      const response = await fetch("https://ict-project-yp5v.onrender.com/api/event/book", {
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
      setIsBooked(true); // Update the button state
      setShowModal(false); // Close the modal
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking tickets:", error);
      alert(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching event data
  }

  if (!event) {
    return <div>Event not found.</div>; // Show an error message if event data is not found
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        padding: "20px",
        width: "100%",
        height: "100vh", // Cover the full height of the viewport
        margin: "0",
        backgroundImage: `url(${event.imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Black Overlay */}
      <div
        style={{
          position: "fixed", // Cover the entire viewport
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative", // Ensure content is above the overlay
          zIndex: 2,
          padding: "20px",
          display: "flex",
          alignItems: "flex-start", // Align items at the start
          gap: "20px",
        }}
      >
        {/* Image */}
        <img
          src={event.imgURL}
          alt={event.eventname}
          style={{
            width: "300px",
            height: "500px",
            borderRadius: "10px",
          }}
        />

        {/* Text Content */}
        <div style={{ flex: 1, textAlign: "left",marginLeft:'20px' }}>
          <h1
            style={{
              fontSize: "50px",
              color: "#f1c40f",
              marginBottom: "20px",
            }}
          >
            {event.eventname}
          </h1>
          <p
            style={{
              fontSize: "25px",
              
              color: "#ecf0f1",
              marginBottom: "20px",
            }}
          >
            {event.description}
          </p>
          <p 
          style={{
            fontSize: "25px",

          }}>
            <strong>Venue:</strong> {event.venue}
          </p>
          <p style={{
            fontSize: "25px",

          }}>
            <strong>Date:</strong> {event.date}
          </p>
          <p style={{
            fontSize: "25px",

          }}>
            <strong>Ticket Price:</strong> ${event.ticketprice}
          </p>
          <p style={{
            fontSize: "25px",

          }}>
            <strong>Host Name:</strong> {event.hostname}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="number"
              value={tickets}
              min="1"
              onChange={(e) => setTickets(e.target.value)}
              disabled={isBooked}
              style={{
                width: "80px",
                padding: "5px",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
             <button onClick={() => setShowModal(true)} disabled={isBooked}>
        {isBooked ? "Booked" : "Book Tickets"}
      </button>
      {/* Custom Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h3>Confirm Booking</h3>
            <p style={{color:'black'}}>
              Are you sure you want to book {tickets} ticket(s) for this event?
            </p>
            <div>
              <button
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  backgroundColor: "#ddd",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={handleBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
