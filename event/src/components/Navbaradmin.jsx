import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { fetchAdminData } from '../api';
import {useState, useEffect} from 'react'

function Navbar() {
  const [loading, setLoading] = useState(true); // Declare loading state
      const [error, setError] = useState(null);     // Declare error state
  //const [userData, setAdminData] = useState(null);
      const [adminData, setAdminData] = useState({
        adminname: '',
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
        const loadAdminData = async () => {
            try {
                const data = await fetchAdminData();
                console.log('Fetched admin data:', data); // Log the data
                const { admin_name} = data;
                setAdminData({
                  adminname: admin_name,   // mapping from response
                })
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };
    
        loadAdminData();
    }, []);
  return (
    <div>
        <div style={{
            height:'50px',
            width:'100%'
        }}>
        <Link to='/acalendar'>
        <button style={{
            height:'50px',
            marginLeft:'1200px',
            marginTop:'20px',
            backgroundColor:'transparent',
            border:'none',
            color:'white',
            fontSize:'17px',
            letterSpacing:'0.1em'
        }}
        onMouseOver={(e) => (e.target.style.letterSpacing = '0.25em')}
        onMouseOut={(e) => (e.target.style.letterSpacing = '0.1em')}
        >CALENDAR</button></Link>
        <Link to='/asignup'>
        <button style={{
            height:'50px',
            marginLeft:'20px',
            marginTop:'20px',
            width:'500px',
            backgroundColor:'transparent',
            border:'none',
            color:'white',
            fontSize:'17px',
            letterSpacing:'0.1em'
        }}
        onMouseOver={(e) => (e.target.style.letterSpacing = '0.25em')}
        onMouseOut={(e) => (e.target.style.letterSpacing = '0.1em')}>ADMIN SIGN IN </button></Link>
        </div>
        <div
        style={{
          display: 'flex', 
          justifyContent: 'flex-start', 
          padding: '10px',
          marginTop:'-50px'
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '100px', height: 'auto',marginTop:'-5px' }} 
        />
        <p style={{color:'white',marginTop:'35px',marginLeft:'10px'}}>{adminData.adminname}</p>
      </div>
        
    </div>
  )
}

export default Navbar