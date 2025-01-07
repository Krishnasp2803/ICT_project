import React, { useState, useEffect } from 'react';
import cbg from '../images/Calenbg.png';
import { MdKeyboardArrowLeft, MdChevronRight } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = new Array(new Date(year, month + 1, 0).getDate())
      .fill(null)
      .map((_, index) => index + 1);
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

  const handleMonthChange = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setIsSidebarOpen(true); // Open the sidebar
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  const handleDateChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    let newDate = new Date(currentDate);
    if (type === 'day') {
      newDate.setDate(value);
    } else if (type === 'month') {
      newDate.setMonth(value);
    } else if (type === 'year') {
      newDate.setFullYear(value);
    }
    setCurrentDate(newDate);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  };

  const Sidebar = () => (
    <div
      style={{
        width: '30%',
        backgroundColor: '#fff',
        color: '#000',
        padding: '20px',
        boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.2)',
        overflowY: 'auto',
      }}
    >
      <button
        onClick={closeSidebar}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Close Sidebar
      </button>
      <h2>Details for {selectedDate?.toLocaleDateString()}</h2>
      <p>Content for the selected date goes here.</p>
    </div>
  );

  const today = new Date();
  const isToday = (day) =>
    day === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Calendar Section */}
      <div
        style={{
          flex: isSidebarOpen ? '0 0 70%' : '1',
          transition: 'flex 0.3s ease',
          position: 'relative',
          backgroundImage: `url(${cbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 0,
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: 'center',
            paddingTop: '20px',
            marginTop: '26px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MdKeyboardArrowLeft
              onClick={() => handleMonthChange(-1)}
              style={{
                fontSize: '30px',
                color: 'white',
                cursor: 'pointer',
                marginRight: '20px',
              }}
            />
            <h2
              style={{
                letterSpacing: '0.25em',
                fontFamily: 'monospace',
                fontSize: '40px',
              }}
            >
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <MdChevronRight
              onClick={() => handleMonthChange(1)}
              style={{
                fontSize: '30px',
                color: 'rgba(255, 255, 255)',
                cursor: 'pointer',
                marginLeft: '20px',
              }}
            />
            <IoIosArrowDropdownCircle
              size={35}
              color="white"
              onClick={handleDropdownToggle}
              style={{ marginLeft: '50px', cursor: 'pointer' }}
            />
          </div>

          {/* Dropdown */}
          {dropdownVisible && (
            <div style={{ marginBottom: '20px' }}>
              <select
                value={currentDate.getDate()}
                onChange={(e) => handleDateChange(e, 'day')}
                style={{
                  marginRight: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {daysInMonth.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <select
                value={currentDate.getMonth()}
                onChange={(e) => handleDateChange(e, 'month')}
                style={{
                  marginRight: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {monthNames.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={currentDate.getFullYear()}
                onChange={(e) => handleDateChange(e, 'year')}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {generateYearOptions().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '30px',
              justifyContent: 'center',
              maxWidth: '1000px',
              margin: '20px auto',
            }}
          >
            {daysInMonth.map((day) => (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'black',
                  fontSize: '22px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: isToday(day) ? '3px solid white' : 'none',
                  cursor: 'pointer',
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}

export default Calendar;
