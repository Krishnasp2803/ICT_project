import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Login_admin() {

const [message,setMessage]=useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = async () => {
  const logindata = { email, password };
  
    
    // Create the logindata object to send
    
    try {
        // Send POST request to the backend
        const response = await fetch('http://localhost:5000/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logindata),
        });

        // Process the response
        if (response.ok) {
            const jsonResponse = await response.json();
            setMessage("Login successful!");
            navigate('/adminhome');
            
        } else {
            const errorResponse = await response.json();

            setMessage(`Error: ${errorResponse.message}`);
        }
    } 

    catch (error) {
      console.error("Axios Error:", error.message, error.stack); // Log complete error details
      let errorMessage = 'Login failed: An unexpected error occurred.';
  
      if (error.response) {
        // Server responded with an error status code
        const status = error.response.status;
        const data = error.response.data;
        errorMessage = `Login failed (HTTP ${status}): ${data.message || 'Server error'}`;
      } else if (error.request) {
        // Request made, but no response received (likely network issue)
        errorMessage = 'Login failed: No response from server (network error?)';
      } else {
        // Error occurred before sending the request
        errorMessage = `Login failed: ${error.message}`;
      }
      alert(errorMessage);
    }
  
    
    
};               // Call loginUser with the appropriate email and password
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
          ADMIN LOGIN
        </h2>
        <TextField
          label="Email"
          type="text"
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
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
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
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
          
          Login
        </Button>
        {message && <p>{message}</p>}
        <p
          style={{
            fontSize: '16px',
            color: '#47196b',
            textAlign: 'center',
            marginTop: '20px',
            cursor: 'pointer',
            fontSize:'18px'
          }}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Login_admin;
