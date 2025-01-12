import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div style={{
            height:'50px',
            width:'100%'
        }}>
        <Link to='/aevent'>
        <button style={{
            height:'50px',
            marginLeft:'1500px',
            marginTop:'20px',
            backgroundColor:'transparent',
            border:'none',
            color:'white',
            fontSize:'17px',
            letterSpacing:'0.1em'
        }}
        onMouseOver={(e) => (e.target.style.letterSpacing = '0.25em')}
        onMouseOut={(e) => (e.target.style.letterSpacing = '0.1em')}
        >EVENTS</button></Link>
        <Link to='/acalendar'>
        <button style={{
            height:'50px',
            marginLeft:'90px',
            marginTop:'20px',
            width:'200px',
            backgroundColor:'transparent',
            border:'none',
            color:'white',
            fontSize:'17px',
            letterSpacing:'0.1em'
        }}
        onMouseOver={(e) => (e.target.style.letterSpacing = '0.25em')}
        onMouseOut={(e) => (e.target.style.letterSpacing = '0.1em')}>CALENDAR</button></Link>
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
        <p style={{color:'white',marginTop:'35px',marginLeft:'10px'}} value='USERNAME'></p>
      </div>
        
    </div>
  )
}

export default Navbar