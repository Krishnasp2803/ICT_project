import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbaradmin';
import bg from '../images/eventbg.png';
import axios from 'axios';
import { format } from 'date-fns';

function AdminHome() {
  const [currentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const sectionRef = useRef(null); // Add useRef hook
  const searchParams = new URLSearchParams(window.location.search);
  //const eventDateFromUrl = searchParams.get("date");

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, index) => index + 1);
    setDaysInMonth(days);
  }, [currentDate]);

  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
  ];

  const today = currentDate.getDate();

  const handleDayClick = async (day) => {
    setSelectedDay(day);
    try {
      const formattedDate = format(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), 'yyyy-MM-dd'); // Format the date correctly
      console.log('Formatted Date:', formattedDate);
      const url = `https://ict-project-yp5v.onrender.com/api/event/eventlist?eventDate=${encodeURIComponent(formattedDate)}`;
      console.log('Fetching URL:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setSelectedDayEvents(data || []); // Fallback to an empty array if data is undefined
    } catch (error) {
      console.error('Error fetching events:', error);
      setSelectedDayEvents([]); // Reset to an empty array on error
    }
  };
 

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedDay]); // Only run this effect when selectedDay changes


  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          <Navbar />
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
                onClick={() => handleDayClick(day)}
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'black',
                  fontSize: '22px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  zIndex: 1,
                  border: day === today ? '3px solid white' : 'none',
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {selectedDay && (
         <div
         ref={sectionRef} // Add ref to the section
         id={`section-${selectedDay}`}
            style={{
              padding: '50px',
              position: 'relative',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '90%',
              margin: '30px auto',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height:'1000px'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 0,
              }}
            ></div>
            <div style={{ zIndex: 1, position: 'relative', color: 'white' }}>
              <h3>Events on Day {selectedDay}</h3>
              {Array.isArray(selectedDayEvents) && selectedDayEvents.length === 0 ? (
                <p>No events found for this day.</p>
              ) : (
                selectedDayEvents.map((event) => (
                  <div key={event._id} style={{ marginBottom: '10px' }}>
                    <h4>{event.eventname}</h4>
                    <p>Type: {event.eventtype}</p>
                    <p>Venue: {event.venue}</p>
                    <p>Time: {event.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminHome;
