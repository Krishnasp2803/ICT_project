import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import bg from '../images/eventbg.png';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null); // To store the selected day

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // January is 0
    const days = new Array(new Date(year, month + 1, 0).getDate())
      .fill(null)
      .map((_, index) => index + 1); // Generates array [1, 2, ..., 31]
    setDaysInMonth(days);
  }, [currentDate]);

  const monthNames = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  const today = currentDate.getDate(); // Get the current day number (1-31)

  const handleClick = (day) => {
    setSelectedDay(day);
    // Smooth scroll to the new page (day section)
    setTimeout(() => {
      const section = document.getElementById(`section-${day}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Adding a slight delay to ensure the UI is updated before scrolling
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the background takes the full height of the viewport
          width: '100%',
        }}
      >
        {/* Dimmed background overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for the background only
            zIndex: 0, // Make sure the overlay is behind content
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1, // Ensure the content is above the background and overlay
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          <Navbar />

          {/* Month Name and Year */}
          <h2
            style={{
              color: 'white',
              letterSpacing: '0.25em',
              fontFamily: 'monospace',
              fontSize: '40px',
              zIndex: 1,
            }}
          >
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          {/* Calendar Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '30px',
              justifyContent: 'center',
              maxWidth: '1000px',
              margin: '20px auto',
              zIndex: 1,
            }}
          >
            {daysInMonth.map((day) => (
              <button
                key={day}
                onClick={() => handleClick(day)}
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)', // Slightly transparent background
                  color: 'black',
                  fontSize: '22px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  zIndex: 1, // Ensure buttons are on top of the overlay
                  border: day === today ? '3px solid white' : 'none', // White border for current date
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* New section for the selected day */}
        {selectedDay && (
          <div
          id={`section-${selectedDay}`}
          style={{
            padding: '50px',
            position: 'relative',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Ensure the background takes the full height of the viewport
            width: '90%',
            marginTop: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            minHeight: '50vh', // Ensure the section is large enough to fill space
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for the background only
              zIndex: 0, // Make sure the overlay is behind content
            }}
          ></div>
          <div style={{ zIndex: 1, position: 'relative' }}>
            <h3 style={{ color: 'white' }}>Events on Day {selectedDay}</h3>
            <p style={{ color: 'white' }}>
              Events in ol with time for day {selectedDay}.
            </p>
            {/* Add more content for the selected day */}
          </div>
        </div>
)}
</div>
</div>
);
}
export default Home;
