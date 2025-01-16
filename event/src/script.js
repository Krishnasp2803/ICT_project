import React, { useState } from "react";

const eventsData = {
  trivandrum: [
    { name: "Music Fest 2025", date: "January 20, 2025", venue: "Trivandrum", image: "muus1.jpg" },
    { name: "Trivandrum Jazz Night", date: "February 5, 2025", venue: "Trivandrum", image: "mus2.jpg" },
    { name: "Trivandrum Art Expo", date: "March 15, 2025", venue: "Trivandrum", image: "muus1.jpg" },
  ],
  calicut: [
    { name: "Calicut Rock Show", date: "February 25, 2025", venue: "Calicut", image: "mus2.jpg" },
    { name: "Calicut Folk Festival", date: "March 10, 2025", venue: "Calicut", image: "muus1.jpg" },
    { name: "Calicut Book Fair", date: "April 5, 2025", venue: "Calicut", image: "mus2.jpg" },
  ],
  kochi: [
    { name: "Kochi Symphony", date: "March 15, 2025", venue: "Kochi", image: "muus1.jpg" },
    { name: "Kochi Indie Music Fest", date: "April 1, 2025", venue: "Kochi", image: "mus2.jpg" },
    { name: "Kochi Food Carnival", date: "May 10, 2025", venue: "Kochi", image: "muus1.jpg" },
  ],
};

const EventApp = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [currentEventComments, setCurrentEventComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleLike = (e) => {
    const button = e.target;
    if (!button.classList.contains("liked")) {
      button.classList.add("liked");
      button.textContent = "Liked";
    } else {
      button.classList.remove("liked");
      button.textContent = "Like";
    }
  };

  const openCommentModal = (event) => {
    setSelectedEvent(event);
    setCurrentEventComments(event.comments || []);
    setIsModalOpen(true);
  };

  const addComment = (newComment) => {
    if (newComment.trim()) {
      setCurrentEventComments([...currentEventComments, newComment]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <select onChange={handleCityChange}>
        <option value="">Select a city</option>
        <option value="trivandrum">Trivandrum</option>
        <option value="calicut">Calicut</option>
        <option value="kochi">Kochi</option>
      </select>

      {selectedCity && (
        <button onClick={() => setSelectedCity("")} className="back-button">
          Back
        </button>
      )}

      <div id="events-container">
        {selectedCity &&
          eventsData[selectedCity]?.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-poster">
                <img src={event.image} alt="Event Poster" />
              </div>
              <div className="event-options">
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Venue: {event.venue}</p>
                <p>
                  <button onClick={() => window.open(event.link, "_blank")} className="button">
                    Event Details
                  </button>
                </p>
              </div>
              <div className="event-buttons">
                <button className="like-button" onClick={handleLike}>
                  Like
                </button>
                <button
                  className="comment-button"
                  onClick={() => openCommentModal(event)}
                >
                  Comment
                </button>
              </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <div id="comment-modal" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>Comments</h3>
            <div id="modal-comment-list">
              {currentEventComments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
            <input
              type="text"
              id="modal-comment-input"
              placeholder="Add a comment"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button onClick={() => addComment(document.getElementById("modal-comment-input").value)}>
              Add Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventApp;
