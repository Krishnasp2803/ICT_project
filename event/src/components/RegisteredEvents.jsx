import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

function RegisteredEvents() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if the token is expired
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

  // Fetch user bookings
  useEffect(() => {
    const fetchBookings = async () => {
      if (!checkTokenExpiration()) {
        alert("Your session has expired. Please log in again.");
        return;
      }

      try {
        const token = localStorage.getItem("token"); // Get the token from local storage.
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          "https://ict-project-yp5v.onrender.com/api/event/booking/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const text = await response.text(); // Read as text first

        // If the response is an error (HTML), handle it
        if (text.includes("<!DOCTYPE html>")) {
          alert("Error fetching bookings: Invalid response from server");
          return;
        }

        const data = JSON.parse(text); // Parse as JSON if it's not HTML
        setBookings(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      style={{
        width: "1100px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        marginLeft: "400px",
        backgroundColor: "rgb(77,49,25,0.8)",
        zIndex: "1000",
      }}
    >
      <h2
        style={{
          color: "white",
          fontFamily: "LimeLight",
          textAlign: "center",
        }}
      >
        Registered Events
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              flex: "1 1 calc(40% - 20px)",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(44, 17, 3, 0.4)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
              borderRadius: "10px",
              padding: "20px",
              height: "auto",
              marginBottom: "0px",
            }}
          >
            <img
              src={booking.eventId.imgURL}
              alt={booking.eventId.eventname}
              style={{
                width: "300px",
                height: "50%",
                borderRadius: "10px",
                marginLeft: "100px",
              }}
            />
            <div
              style={{
                marginTop: "0px", // Removed additional margin space
                fontFamily: "Crimson Pro",
                color: "white",
                height:'200px'
              }}
            >
              <h3 style={{
                marginTop:'25px',

              }}>{booking.eventId.eventname}</h3>
              <p style={{ fontSize: "24px" }}>Venue: {booking.eventId.venue}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "0px", // Removed any spacing between buttons and container
                }}
              >
                <Button
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgb(160, 17, 7)",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                  }}
                >
                  {booking.eventId.date}
                </Button>
                <Button
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgb(160, 17, 7)",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                  }}
                >
                  Tickets: {booking.tickets}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredEvents;
