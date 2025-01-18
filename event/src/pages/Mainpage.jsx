import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mnpg.css"; // Import your CSS file
import "../images/map.jpg";

const Mainpage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setIsBackVisible(true);
  };

  const handleEventTypeClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  return (
    <div>
      {/* Background Container */}
      <div className="background-container"></div>

      {/* Navbar */}
      <div className="navbar">
        <a href="/home">Home</a>
        <a href="#">Events</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="/userprofile">Profile</a>
      </div>

      {/* Main Section */}
      <div className="secdiiv" style={{ backgroundImage: "url(map.jpg)" }}>
        <div className="firstdiv">
          {/* Heading */}
          <div className="subdiv1">
            <h1 className="txt1">Find the Next Event You'll Want to Attend</h1>
          </div>

          {/* Event Type Links */}
          <div className="subdiv1">
          <Link to={`/eventlist?eventtype=concert&city=${selectedCity}`}>
          <button onClick={() => handleEventTypeClick("concert")}>Concerts</button>
        </Link>
        <Link to={`/eventlist?eventtype=foodfest&city=${selectedCity}`}>
          <button onClick={() => handleEventTypeClick("foodfest")}>Food Fests</button>
        </Link>
        <Link to={`/eventlist?eventtype=workshop&city=${selectedCity}`}>
          <button onClick={() => handleEventTypeClick("workshop")}>Workshops</button>
        </Link>
        <Link to={`/eventlist?eventtype=exhibition&city=${selectedCity}`}>
          <button onClick={() => handleEventTypeClick("exhibition")}>Exhibitions</button>
        </Link>
          </div>

          {/* City Selector */}
          <div className="subdiv2">
            <h2>Select a City for Concerts</h2>
            <div className="dropdown">
              <label htmlFor="city-select">Choose a City:</label>
              <select
                id="city-select"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="" disabled>
                  Choose a city
                </option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Calicut">Calicut</option>
                <option value="Kochi">Kochi</option>
              </select>
            </div>
            <br />
            <br />
            {isBackVisible && (
              <button
                id="back-button"
                className="back-button"
                onClick={() => setSelectedCity("")}
              >
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
