import React from 'react'

import {useState} from 'react'
import TextField from '@mui/material/TextField';

function UserDetails() {
  // Array of objects to display in the dropdown
  const options = [
    { id: 1, name: "General"  },
    { id: 2, name: "VIP"  },
    { id: 3, name: "Accessibility" },
  ];

  // State for selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle selection change
  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const selected = options.find((item) => item.id === selectedId);
    setSelectedItem(selected);}

  return (
    <div className="profile-card" style={{
      width: '1000px',
      
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      
      marginLeft: '120px',
      backgroundColor:'rgb(77,49,25,0.8)',
      zIndex: '1000',
      
    }}>
      <h2 style={{
        color: 'white',
        fontFamily: 'LimeLight',
        marginRight:'260px',
      }}>Profile</h2>
    

    <div class="user-name" style={{width:'100%',height:'130px',marginTop:'20px',display:'flex',marginLeft:'100px'}}>
      <div class="first-name" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>First Name</div>
         <TextField  type='name' name='name' value='Aaron'
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
      <div class="last-name" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
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
    <div class="contact-det" style={{width:'100%',height:'130px',marginTop:'10px',display:'flex',}}>
      <div class="email" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
          E-mail</div>
         <TextField  type='email' name='name' value='aaronwarner@gmail.com'
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
      <div class="phone-num" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
          Phone No.</div>
         <TextField  type='phone number' name='name' value='1234567890'
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
    <div class="address" style={{width:'100%',height:'130px',marginTop:'0px',display:'flex',flexDirection:'column',}}>
    <div style={{color:'white',fontSize:'90%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
          Address</div>
         <TextField  type='address' name='name'  multiline rows={4} variant='outlined'
                    sx={{
                      
                      marginInline: '10px',
                      width: '722px',
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
      <div class="age-gender" style={{width:'100%',height:'130px',marginTop:'65px',display:'flex',}}>
      <div class="age" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
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
      <div class="gender" style={{color:'white',width:'40%',height:'90px',display:'flex',flexDirection:'column',}}>
        <div style={{color:'white',fontSize:'80%',width:'100px',height:'20px',marginTop:'5px',marginLeft:'17px',}}>
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
      <div class="interests" style={{width:'100%',height:'130px',marginTop:'5px',display:'flex',flexDirection:'column',}}>
    <div style={{color:'white',fontSize:'90%',width:'100px',height:'20px',marginTop:'5px',marginRight:'0px',}}>
          Interests</div>
         <TextField  type='name' name='interests' multiline rows={4} variant='outlined'
                    sx={{
                      
                      marginInline: '10px',
                      width: '722px',
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
      <div style={{ marginTop:'70px',marginLeft:'0px',marginBottom:'20px',}}>
      <div style={{color:'white',marginRight:'800px',fontSize:'90%'}}>Select Ticket Type</div>

      {/* Dropdown */}
      <select onChange={handleChange} defaultValue="" 
      style={{
        width:'722px',
        height:'50px',
        borderRadius:'20px',
        backgroundColor:'rgb(77,49,25,0.4)',
        color:'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        marginTop:'5px',
        borderColor:'rgb(0,0,0,0.3)',
        marginRight:'220px'
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