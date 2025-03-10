import React from 'react'
import {useState} from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  const[hovered,setHoverColour]=useState(null)                //background colour change on hovering
  const handleMouseHover=(index)=>{setHoverColour(index)}
  const handleMouseLeave=()=>{setHoverColour(null)}
  return (
    
    <div style={{
       display: 'flex',  
       alignItems: 'center', 
       justifyContent:'flex-end',
       width:'100%',
       height:'120px',
       position:'fixed',
       zIndex: '1000',
       //backdropFilter:'blur(10px)',
       marginLeft:'20px'
       
       }}>
        <Link to='/home'>
        <img
        src={logo}
        className="profile-avatar"
        alt="logo"
        style={{
          width: '120px',
          height: 'auto',
          marginRight:'10px',
          
        }}
      />
      </Link>
      <Link
        to="/home"
        style={{
        color:'white',
        marginRight:'67%',
        fontFamily:'Arizonia',
        fontSize:'50px',
        textDecoration:'none'

       }}>Celestial</Link>
     
      <a href="/home" style={
        {
          textDecoration:'none',
          color:'white',
          marginRight:'26px',
          fontFamily:'Julius Sans One',
          fontSize:'150%',
          transform:hovered===5?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
        
        }}
        onMouseEnter={()=>handleMouseHover(5)}
        onMouseLeave={handleMouseLeave}>
          Home</a>
      <a href="/events" style={
        {
          textDecoration:'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'150%',
          transform:hovered===6?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
          }}
          onMouseEnter={()=>handleMouseHover(6)}
          onMouseLeave={handleMouseLeave}>
            Events</a>
      <a href="/contact" style={
        {
          textDecoration:'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'150%',
          transform:hovered===7?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
          }}
          onMouseEnter={()=>handleMouseHover(7)}
          onMouseLeave={handleMouseLeave}>
            Contact</a>
    
    </div>
  )
}

export default Navbar
