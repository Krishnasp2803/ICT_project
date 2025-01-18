import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

function RegisteredEvents() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchBookings = async () => {
          const token = localStorage.getItem("token");
          if (!token) {
            alert("Please log in to view your bookings.");
            return;
          }
          try {
            const response = await fetch('http://localhost:5000/api/event/registeredevents', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (!response.ok) {
              throw new Error("Failed to fetch bookings");
            }
    
            const data = await response.json();
            setBookings(data);
          } catch (error) {
            console.error("Error fetching bookings:", error);
            alert(error.message);
          }
        };


    fetchBookings();
        }, []);

        if (loading) {
            return <div>Loading your bookings...</div>;
        }

        if (bookings.length === 0) {
            return <div>No bookings found.</div>;
        }




  return (
    <div style={{
        width: '1000px',
      
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        marginLeft: '400px',
        backgroundColor:'rgb(77,49,25,0.8)',
        zIndex: '1000',
    }}>
      <h2 style={{
        color: 'white',
        fontFamily: 'LimeLight',
      }}>Registered Events</h2>
      <div class='row' style={{width:'100%',height:'400px',display: 'flex', marginTop: '20px'}}>
        
      {bookings.map((booking) => (
        <div key={booking._id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
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