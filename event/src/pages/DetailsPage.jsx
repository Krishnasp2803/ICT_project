import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function DetailsPage() {
  const { id } = useParams(); // Get the event ID from the URL parameter
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (!id) {
      console.error("Event ID is missing!");
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/event/${id}`);
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
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please log in to book tickets.");
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
      setIsBooked(true); // Update the button state to "Booked"
      setShowModal(false); // Close the modal after booking
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
      <p>Host Name: {event.hostname}</p>

      <input
        type="number"
        value={tickets}
        min="1"
        onChange={(e) => setTickets(e.target.value)}
        disabled={isBooked}
      />
      <button onClick={() => setShowModal(true)} disabled={isBooked}>
        {isBooked ? "Booked" : "Book Tickets"}
      </button>

      {/* Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"  // Prevent clicking outside the modal to close it
        keyboard={false}   // Prevent closing the modal using the keyboard
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to book {tickets} ticket(s) for this event?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsPage;
