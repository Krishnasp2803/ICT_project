import React, { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IoIosClose } from "react-icons/io";

function Sidebar({ isSidebarOpen, onClose, selectedDate }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [eventname, setEventName] = useState('');
  const [eventtype, setType] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');
  const [hostname, setHostName] = useState('');
  const [ticketprice, setTicketPrice] = useState('');
  const [imgURL, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [addedEvents, setAddedEvents] = useState([]);
  const [date, setEventDate] = useState(new Date());

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    const data = { eventname, eventtype, venue, time, hostname, ticketprice, imgURL, description, city, date };

    try {
      const response = await fetch('http://localhost:5000/api/event/newevent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("New Event Added Successfully");
        setEventName('');
        setType('');
        setVenue('');
        setCity('');
        setTime('');
        setHostName('');
        setTicketPrice('');
        setImgUrl('');
        setDescription('');
      } else {
        const errorResponse = await response.json();
        alert(`Error: ${errorResponse.message}`);
      }
      setIsPopupOpen(false);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      {isSidebarOpen && (
        <div style={{ flex: '0 0 30%', backgroundColor: 'rgb(0, 42, 59)', color: 'white', height: '100vh', padding: '20px' }}>
          <IoIosClose style={{ fontSize: '40px', float: 'right' }} onClick={onClose} />
          <h2 style={{ fontFamily: 'monospace', marginTop:'20px' }}>EVENT LIST</h2>
          {selectedDate ? (
            <div>
              <p>Selected Date: {selectedDate.toDateString()}</p>
              <GoPlusCircle
                style={{ fontSize: '40px', color: 'white', cursor: 'pointer',marginLeft:'450px' }}
                onClick={togglePopup}
              />
            </div>
          ) : (
            <p>Select a date to display more details here.</p>
          )}

          {isPopupOpen && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', padding: '40px', backgroundColor: 'rgba(0, 42, 59, 0.9)', borderRadius: '10px', zIndex: 1000 }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>ADD NEW EVENT</h2>

              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  label="Name"
                  value={eventname}
                  onChange={(event) => setEventName(event.target.value)}
                  fullWidth
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                />
                <Select
            value={eventtype}
  onChange={(event) => setType(event.target.value)}
  displayEmpty
  fullWidth
  style={{ color: 'white' }}
  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'white' } }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' }, // Default outline
      '&:hover fieldset': { borderColor: 'white' }, // Outline on hover
      '&.Mui-focused fieldset': { borderColor: 'white' }, // Outline when focused
    },
    '& .MuiSelect-icon': {
      color: 'white', // Ensures the dropdown arrow icon is white
    },
  }}
>
                  <MenuItem value="" disabled>
                    <em>Select Type</em>
                  </MenuItem>
                  <MenuItem value="Concerts">Concerts</MenuItem>
                  <MenuItem value="Food Fest">Food Fest</MenuItem>
                  <MenuItem value="Workshop">Workshop</MenuItem>
                </Select>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <TextField
                label="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
            </div>
            <div style={{ width: '300px',  }}>
      
      <TextField
        label="Selected Date"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        InputProps={{
          readOnly: true, // Make the input read-only
           style: { color: 'white' } 
        }}
        InputLabelProps={{ style: { color: 'white' } }}

        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
        
      />
      {/* Other form fields for adding an event */}
    </div>

          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <TextField
                label="Venue"
                value={venue}
                onChange={(event) => setVenue(event.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <TextField
                label="Time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <TextField
                label="Host Name"
                value={hostname}
                onChange={(event) => setHostName(event.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <TextField
                label="Ticket Price"
                value={ticketprice}
                onChange={(event) => setTicketPrice(event.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
              />
            </div>
          </div>

          <TextField
            label="Image URL"
            value={imgURL}
            onChange={(event) => setImgUrl(event.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
            }}
          />
          <TextField
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
            }}
          />
          
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px', height: '50px' }} onClick={handleAdd}>
            Add
          </Button>
        </div>
      )}

      {/* Overlay */}
      {isPopupOpen && (
        <div
          onClick={togglePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
      )}
    </>
  );
}



export default Sidebar;
