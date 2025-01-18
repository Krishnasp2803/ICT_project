import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import {jwtDecode} from "jwt-decode"; // Correct import for jwt-decode

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

        const response = await fetch('http://localhost:5000/api/event/booking/me', { // Update the route for fetching bookings
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
        width: "1000px",
        display:'flex',
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        marginLeft: "400px",
        backgroundColor: "rgb(77,49,25,0.8)",
        zIndex: "1000",
      }}
    >
      <h2
        style={{
          color: "white",
          fontFamily: "LimeLight",
        }}
      >
        Registered Events
      </h2>
      <div
        className="row"
        style={{ width: "100%", height: "400px", display: "flex", marginTop: "50px" }}
      >
        {bookings.map((booking) => (
          <div
            key={booking._id}
            style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", color:'white' }}
          >
            <h3>{booking.eventId.eventname}</h3>
            <p>Venue: {booking.eventId.venue}</p>
            <p>Date: {booking.eventId.date}</p>
            <p>Tickets Booked: {booking.tickets}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredEvents;
