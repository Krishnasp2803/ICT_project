import React, { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Sidebar({ selectedDate }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [addedEvents, setAddedEvents] = useState([]);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleAdd = () => {
    setAddedEvents([...addedEvents, { name: eventName, time: eventTime }]);
    setEventName('');
    setEventTime('');
    setIsPopupOpen(false);
  };

  const handleNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleTimeChange = (event) => {
    setEventTime(event.target.value);
  };

  return (
    <div
      style={{
        flex: '0 0 30%',
        backgroundColor: 'rgb(0, 42, 59)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        height: '100vh',
        padding: '20px',
        overflowY: 'auto',
        color: 'white'
      }}
    >
      <h2 style={{ marginBottom: '20px', fontFamily: 'monospace', color: 'white' }}>EVENT LIST</h2>
      {selectedDate ? (
        <div>
          <p>Selected Date: {selectedDate.toDateString()}</p>
          <GoPlusCircle
            style={{
              fontSize: '50px',
              color: 'white',
              cursor: 'pointer',
              position: 'absolute',
              marginLeft:'160px',
              marginTop:'10px',
              zIndex: 1001
            }}
            onClick={togglePopup}
          />
          {addedEvents.map((event, index) => (
            <p key={index} style={{ color: 'white' }}>
              Name: {event.name}, Time: {event.time}
            </p>
          ))}
        </div>
      ) : (
        <p>Select a date to display more details here.</p>
      )}


      {/* Popup Window */}
      {isPopupOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            padding: '40px',
            background: 'rgba(0, 42, 59, 0.9)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            border: '1px solid #fff',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>ADD NEW EVENT</h2>

          <TextField
  label="Name"
  type="text"
  fullWidth
  variant="outlined"
  margin="normal"
  value={eventName} // Ensure the state is bound to the field
  onChange={handleNameChange} // Handle input changes
  InputProps={{
    style: { color: 'white' },
  }}
  InputLabelProps={{
    style: { color: 'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset': { borderColor: 'white' },
      '&.Mui-focused fieldset': { borderColor: 'white' },
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Ensures the label color is white
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white', // Label remains white when focused
    },
  }}
/>


          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <TextField
                label="Venue"
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
  );
}

export default Sidebar;
