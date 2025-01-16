import React, { useState } from "react";
import "./workshops.css"; // Import your CSS file here

const eventsData = {
  trivandrum: [
    { name: "Music Fest 2025", date: "January 20, 2025", venue: "Trivandrum", image: "E1.jpg" },
    { name: "Trivandrum Jazz Night", date: "February 5, 2025", venue: "Trivandrum", image: "e2.jpg" },
    { name: "Trivandrum Art Expo", date: "March 15, 2025", venue: "Trivandrum", image: "e3.jpg" },
  ],
  calicut: [
    { name: "Calicut Rock Show", date: "February 25, 2025", venue: "Calicut", image: "e3.jpg" },
    { name: "Calicut Folk Festival", date: "March 10, 2025", venue: "Calicut", image: "E1.jpg" },
    { name: "Calicut Book Fair", date: "April 5, 2025", venue: "Calicut", image: "e2.jpg" },
  ],
  kochi: [
    { name: "Kochi Symphony", date: "March 15, 2025", venue: "Kochi", image: "e4.jpg" },
    { name: "Kochi Indie Music Fest", date: "April 1, 2025", venue: "Kochi", image: "E1.jpg" },
    { name: "Kochi Food Carnival", date: "May 10, 2025", venue: "Kochi", image: "e2.jpg" },
  ],
};

const EventSelector = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [comments, setComments] = useState([]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setEvents(eventsData[city] || []);
  };

  const handleBack = () => {
    setSelectedCity("");
    setEvents([]);
  };

  const handleLike = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].liked = !updatedEvents[index].liked;
    setEvents(updatedEvents);
  };

  const openCommentModal = (event) => {
    setCurrentEvent(event);
    setComments(event.comments || []);
    setShowModal(true);
  };

  const addComment = (newComment) => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setCurrentEvent({ ...currentEvent, comments: updatedComments });
    }
  };

  return (
    <div className="event-selector">
      <div className="dropdown">
        <label htmlFor="city-select">Choose a City:</label>
        <select id="city-select" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a City</option>
          <option value="trivandrum">Trivandrum</option>
          <option value="calicut">Calicut</option>
          <option value="kochi">Kochi</option>
        </select>
      </div>
      {selectedCity && (
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      )}
      <div id="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-poster">
              <img src={event.image} alt={`${event.name} Poster`} />
            </div>
            <div className="event-options">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
              <button
                className="button"
                onClick={() => window.open(event.link || "#", "_blank")}
              >
                Event Details
              </button>
            </div>
            <div className="event-buttons">
              <button
                className={`like-button ${event.liked ? "liked" : ""}`}
                onClick={() => handleLike(index)}
              >
                {event.liked ? "Liked" : "Like"}
              </button>
              <button className="comment-button" onClick={() => openCommentModal(event)}>
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div id="comment-modal" className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h3 id="modal-event-name">{currentEvent.name} - Comments</h3>
            <textarea
              id="modal-comment-input"
              placeholder="Add your comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addComment(e.target.value);
                  e.target.value = "";
                  e.preventDefault();
                }
              }}
            ></textarea>
            <div id="modal-comment-list">
              {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSelector;
