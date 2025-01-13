import React, { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';


function Sidebar({ selectedDate }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [eventname, setEventName] = useState('');
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

  const handleNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleAdd = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create the data object to send
    const data = {  eventname, venue,time,hostname,ticketprice,imgURL,description,city,date };

    try {
        // Send POST request to the backend
        const response = await fetch('http://localhost:5000/api/event/newevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Process the response
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Response data:", jsonResponse);
            alert("New Event Added Successfully");
            // Optionally reset the form
            setEventName('');
            setVenue('');
            setCity('');
            setTime('');
            setHostName('');
            setTicketPrice('');
            setImgUrl('');
            setDescription('');


        } else {
            const errorResponse = await response.json();
            console.error("Error response:", errorResponse);
            alert(`Error: ${errorResponse.message}`);
        }
        setIsPopupOpen(false);
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred. Please try again later.');
    }
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
            width: '700px',
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
  value={eventname} // Ensure the state is bound to the field
  onChange={(event) => setEventName(event.target.value)}// Handle input changes
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
  );
}

export default Sidebar;
