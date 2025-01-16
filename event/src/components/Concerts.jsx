import React, { useState } from "react";
import "../styles/mnpg.css"; // Import external CSS
import "../images/map.jpg";
const Concerts = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setIsBackVisible(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Background Container */}
      <div className="background-container"></div>

      {/* Navbar */}
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>

      {/* Main Section */}
      <center>
        <div className="secdiiv" style={{ backgroundImage: "url('map.jpg')" }}></div>

        <div className="firstdiv">
          {/* Heading */}
          <div className="subdiv1">
            <h1 className="txt1">Find the Next Event You'll Want to Attend</h1>
          </div>

          {/* Links */}
          <div className="subdiv1">
            <a href="concerts.html" className="glass-button">Concerts</a>
            <a href="foodfests.html" className="glass-button">Food Fests</a>
            <a href="workshops.html" className="glass-button">Workshops</a>
            <a href="exhibitions.html" className="glass-button">Exhibitions</a>
          </div>

          {/* City Selector */}
          <div className="subdiv2">
            <h2>Select a City for Concerts</h2>
            <div className="dropdown">
              <label htmlFor="city-select">Choose a City:</label>
              <select id="city-select" value={selectedCity} onChange={handleCityChange}>
                <option value="" disabled>
                  Choose a city
                </option>
                <option value="trivandrum">Trivandrum</option>
                <option value="calicut">Calicut</option>
                <option value="kochi">Kochi</option>
              </select>
            </div>
            <br />
            <br />
            {isBackVisible && (
              <button
                id="back-button"
                className="back-button"
                onClick={() => {
                  setSelectedCity("");
                  setIsBackVisible(false);
                }}
              >
                Back
              </button>
            )}
          </div>

          {/* Modal */}
          {modalOpen && (
            <div id="comment-modal" className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>
                  &times;
                </span>
                <h3 id="modal-event-name">Comments</h3>
                <textarea
                  id="modal-comment-input"
                  placeholder="Add your comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button id="modal-add-comment-button" onClick={handleAddComment}>
                  Add Comment
                </button>
                <div id="modal-comment-list">
                  {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Events Grid */}
          <div className="events-grid" id="events-container">
            {/* Dynamic event cards can be added here */}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Concerts;
