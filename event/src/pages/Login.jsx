import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
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
          label="Name"
          type="text"
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
        >
          Login
        </Button>
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

export default Login;
