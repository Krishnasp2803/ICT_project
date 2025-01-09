import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Admin_signup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create the data object to send
    const data = { name, email, password };

    try {
        // Send POST request to the backend
        const response = await fetch('http://localhost:5000/api/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Process the response
        if (response.ok) {
            const jsonResponse = await response.json();
            setMessage("Registration successful!");
            // Optionally reset the form
            setName('');
            setEmail('');
            setPassword('');

        } else {
            const errorResponse = await response.json();

            setMessage(`Error: ${errorResponse.message}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        setMessage('An error occurred. Please try again later.');
    }
};
  return (
    <div
      style={{
        backgroundImage:
          "url('https://d194ip2226q57d.cloudfront.net/images/Event-Guide_Header_CO-Shutterstock.original.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.5)', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '10px',
          border: '1px solid #fff',
          backdropFilter: 'blur(10px)',
          marginTop:'-90px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px',color:'#47196b' }}>
          ADMIN SIGNUP
        </h2>
        <TextField
          label="Name"
          type="text"
          onChange={(e) => { setName(e.target.value) }}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          label="Email"
          type="text"
          onChange={(e) => { setEmail(e.target.value) }}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => { setPassword(e.target.value) }}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px', height: '50px' }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {message && <p>{message}</p>}
        
      </div>
    </div>
  );
}

export default Admin_signup;
