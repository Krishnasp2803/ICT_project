import React from 'react'
import {useState} from 'react'


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
       height:'90px',
       position:'fixed',
       zIndex: '1000',
       //backdropFilter:'blur(10px)',
       
       }}>
        <img
        src="/logo192.png"
        className="profile-avatar"
        alt="logo"
        style={{
          width: '50px',
          height: '50px',
          marginRight:'20px',
          
         
        }}
      />
      <a //href="/"
       style={{
        color:'white',
        marginRight:'690px',
        fontFamily:'Arizonia',
        fontSize:'58px',

       }}>Event</a>
     
      <a href="/" style={
        {
          textDecoration:hovered===5?'underline':'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'120%',
        
        }}
        onMouseEnter={()=>handleMouseHover(5)}
        onMouseLeave={handleMouseLeave}>Home</a>
      <a href="/events" style={
        {
          textDecoration:hovered===6?'underline':'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'120%'
          }}
          onMouseEnter={()=>handleMouseHover(6)}
          onMouseLeave={handleMouseLeave}>Events</a>
      <a href="/contact" style={
        {
          textDecoration:hovered===7?'underline':'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'120%'
          }}
          onMouseEnter={()=>handleMouseHover(7)}
          onMouseLeave={handleMouseLeave}>Contact</a>
      <a href="/login" style={
        {
          textDecoration:hovered===8?'underline':'none',
          color:'white',
          marginRight:'30px',
          fontFamily:'Julius Sans One',
          fontSize:'120%'
          }}
          onMouseEnter={()=>handleMouseHover(8)}
          onMouseLeave={handleMouseLeave}>Login</a>
      
        
    
    </div>
  )
}

export default Navbar
