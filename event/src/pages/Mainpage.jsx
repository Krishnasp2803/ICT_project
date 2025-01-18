import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mnpg.css"; // Import your CSS file
import "../images/map.jpg";
import logo from '../images/logo.png'

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
        <div>
          <Link to='/home'>
            <img src={logo} className="profile-avatar" alt="logo" />
          </Link>
          <Link to="/home">Celestial</Link>
        </div>

        <Link to="/userprofile" className="profile-link">Profile</Link>
      </div>

      {/* Main Section */}
      <div className="secdiiv">
        <div className="firstdiv">
          {/* Heading */}
          <div className="subdiv1">
            <h1 className="txt1">Find the Next Event You'll Want to Attend</h1>
          </div>

          {/* Event Type Links */}
          <div className="subdiv1">
          <Link to={`/eventlist?eventtype=concert&city=${selectedCity}`}>
          <button className="glass-button" onClick={() => handleEventTypeClick("concert")}>Concerts</button>
        </Link>
        <Link to={`/eventlist?eventtype=foodfest&city=${selectedCity}`}>
          <button className="glass-button" onClick={() => handleEventTypeClick("foodfest")}>Food Fests</button>
        </Link>
        <Link to={`/eventlist?eventtype=workshop&city=${selectedCity}`}>
          <button className="glass-button" onClick={() => handleEventTypeClick("workshop")}>Workshops</button>
        </Link>
        <Link to={`/eventlist?eventtype=exhibition&city=${selectedCity}`}>
          <button className="glass-button" onClick={() => handleEventTypeClick("exhibition")}>Exhibitions</button>
        </Link>
          </div>

          {/* City Selector */}
          <div>
            <div className="dropdown">
              <label htmlFor="city-select" style={{fontSize:'25px', fontFamily:'Ariel'}}
               >Select City:</label>
              <select style={{
                marginTop:'40px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
                outline: 'none',
                width:'300px',
                marginLeft:'20px'
              }}
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
