import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import { fetchUserData } from '../api';

function UserDetails() {
  // Array of objects to display in the dropdown
  const options = [
    { id: 1, name: "General"  },
    { id: 2, name: "VIP"  },
    { id: 3, name: "Accessibility" },
  ];

  // State for selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true); // Declare loading state
    const [error, setError] = useState(null);     // Declare error state

  // Handle selection change
  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const selected = options.find((item) => item.id === selectedId);
    setSelectedItem(selected);
  }
    
  //const [userData, setUserData] = useState(null);
    const [userData, setUserData] = useState({
      username: '',
      email: '',
      phone: '',
      firstName: '',
    });
  
    // Fetch user data when component mounts
    useEffect(() => {
          // Get token from localStorage
    const token = localStorage.getItem("token");  
    if (!token) {
      setError("No token found. Please log in.");
      setLoading(false);
      return;
    }
      const loadUserData = async () => {
          try {
              const data = await fetchUserData();
              console.log('Fetched user data:', data); // Log the data
              const { user_name, user_email, user_contactno } = data;
              setUserData({
                username: user_name,   // mapping from response
                email: user_email, // mapping from response
                phone: user_contactno, // mapping from response
                
              })
          } catch (error) {
              console.error('Error loading user data:', error);
          }
      };
  
      loadUserData();
  }, []);
   // Empty dependency array means this effect runs once when the component mount

  return (
    <div className="profile-card" style={{
      width: '1000px',
      
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      
      marginLeft: '400px',
      backgroundColor:'rgb(77,49,25,0.8)',
      zIndex: '1000',
      
    }}>
      <h2 style={{
        color: 'white',
        fontFamily: 'LimeLight',
        marginRight:'30px',
      }}>Profile</h2>
    

    <div class="user-name" style={{width:'100%',height:'130px',marginTop:'20px',display:'flex',marginLeft:'30px'}}>
      <div class="first-name" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'0px',}}>First Name</div>
         <TextField  type='name' name='name' value={userData.username}
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                        
                      },
                    }}/>
      </div>
      <div class="last-name" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'0px',}}>
          Last Name</div>
         <TextField  type='name' name='name' value='Warner'
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                      },
                    }}/>
      </div>
    </div>
    <div class="contact-det" style={{width:'100%',height:'130px',marginTop:'10px',display:'flex',marginLeft:'30px',}}>
      <div class="email" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'90%',width:'70px',height:'20px',marginTop:'5px',marginLeft:'0px',marginRight:'10px'}}>
          E-mail</div>
         <TextField  type='email' name='name' value={userData.email}
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                        
                      },
                    }}/>
      </div>
      <div class="phone-num" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'90%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'0px',}}>
          Phone No.</div>
         <TextField  type='phone number' name='name' value={userData.phone}
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                      },
                    }}/>
      </div>
    </div>
    <div class="address" style={{width:'100%',height:'130px',marginTop:'0px',display:'flex',flexDirection:'column',marginLeft:'30px',}}>
    <div style={{color:'white',fontSize:'90%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'0px',}}>
          Address</div>
         <TextField  type='address' name='name'  multiline rows={4} variant='outlined'
                    sx={{
                      
                      marginInline: '10px',
                      width: '90%',
                      marginLeft:'3px',
                      
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                        height:'130px',
                        alignItems:'flex-start',
                      },
                      
                    }}/>
      </div>
      <div class="age-gender" style={{width:'100%',height:'130px',marginTop:'65px',display:'flex',marginLeft:'30px',}}>
      <div class="age" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'90%',width:'70px',height:'20px',marginTop:'5px',marginLeft:'0px',marginRight:'10px'}}>
          Age</div>
         <TextField  type='age' name='age' value='19'
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      
                      
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                        
                      },
                    }}/>
      </div>
      <div class="gender" style={{color:'white',width:'50%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'90%',width:'80px',height:'20px',marginTop:'5px',marginLeft:'0px',marginRight:'10px'}}>
          Gender</div>
         <TextField  type='name' name='gender' value='Male'
                    sx={{
                      
                      marginInline: '10px',
                      width: '80%',
                      marginLeft:'3px',
                      
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                      },
                    }}/>
      </div>
    </div>
      <div class="interests" style={{width:'100%',height:'130px',marginTop:'5px',display:'flex',flexDirection:'column',marginLeft:'30px',}}>
    <div style={{color:'white',fontSize:'90%',width:'100px',height:'20px',marginTop:'5px',marginRight:'0px',}}>
          Interests</div>
         <TextField  type='name' name='interests' multiline rows={4} variant='outlined'
                    sx={{
                      
                      marginInline: '10px',
                      width: '90%',
                      marginLeft:'3px',
                      marginTop:'2px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', 
                        color:'white',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                        height:'130px',
                      },
                    }}/>
      </div>
      <div style={{ marginTop:'70px',marginLeft:'0px',marginBottom:'20px',width:'50%',marginLeft:'30px',}}>
      <div style={{color:'white',marginRight:'300px',fontSize:'90%',}}>Select Ticket Type</div>

      {/* Dropdown */}
      <select onChange={handleChange} defaultValue="" 
      style={{
        width:'100%',
        height:'50px',
        borderRadius:'20px',
        backgroundColor:'rgb(77,49,25,0.4)',
        color:'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        marginTop:'5px',
        borderColor:'rgb(0,0,0,0.3)',
        marginLeft:'7px',
        
        }}>
        <option value="" disabled style={{color:'black'}}>
          -- Choose an option --
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id} style={{color:'black'}}>
            {option.name}
          </option>
        ))}
      </select>

    
      
    </div>
    </div>
   
  )
}

export default UserDetails