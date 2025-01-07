import React from 'react'
import {useState} from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";



function SidebarUserProf({setActiveTab}) {
    const[hovered,setHoverColour]=useState(null)                //background colour change on hovering
    const handleMouseHover=(index)=>{setHoverColour(index)}
    const handleMouseLeave=()=>{setHoverColour(null)}

    
  
  return (
    <div style={{
        position: 'fixed',
        width: '290px',
        height: '100%',
        marginTop: '0px', // Adjust for the navbar height
        color: 'white',
        zIndex: '1000', // Ensure it stays on top of other elements
        //backgroundColor:'lightblue'
    }}>
        <div style={
            {
                
                width:'290px',
                height:'200px',
                
            }
        }> <IoPersonCircleSharp style={{
            fontSize:'700%',
            marginLeft:'90px',
            marginTop:'20px',
            
        }}/>
        <h4 
        style={{
            textAlign:'center',
            marginTop:'0px',
            fontFamily:'Julius Sans One',
        }}>USER NAME</h4>
            
        </div>
        <div>
           
                <button style={{
                    width:'290px',
                    fontSize:'120%',
                    backgroundColor:hovered===1?'#733a08':'#472609',
                    border:'none',
                    padding:'20px',
                    color:'white',
                    transition: "all 0.3s ease",
                    fontFamily:'Crimson Pro',
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    transform:hovered===1?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
                    boxShadow: hovered===1?'0 10px 10px rgba(0, 0, 0, 0.5)':'none' /* Add shadow for depth */
                    

                }}
                
                onClick={() => setActiveTab('details')}
                onMouseEnter={()=>handleMouseHover(1)}
                onMouseLeave={handleMouseLeave}
                >
                    DETAILS</button>
           
                <button style={{
                    width:'290px',
                    fontSize:'120%',
                    marginTop:'20px',
                    backgroundColor:hovered===2?'#733a08':'#472609',
                    border:'none',
                    padding:'20px',
                    color:'white',
                    transition: "all 0.3s ease",
                    fontFamily:'Crimson Pro',
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    transform:hovered===2?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
                    boxShadow: hovered===2?'0 10px 10px rgba(0, 0, 0, 0.5)':'none' /* Add shadow for depth */

                }}
                
                onClick={() => setActiveTab('registeredEvents')}
                onMouseEnter={()=>handleMouseHover(2)}
                onMouseLeave={handleMouseLeave}
                >
                    REGISTERED EVENTS
                </button>
            
                <button style={{
                    width:'290px',
                    fontSize:'110%',
                    marginTop:'110px',
                    color:hovered===4?'#a2591b':'white',
                    border:'none',
                    padding:'20px',
                    transition: "all 0.3s ease",
                    fontFamily:'Julius Sans One',
                    fontWeight:'bold',       
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    backgroundColor:'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onMouseEnter={()=>handleMouseHover(4)}
                onMouseLeave={handleMouseLeave}
                >
                    <RiLogoutCircleRLine style={
                        {
                            fontSize:'150%',
                            marginRight:'13px',
                            marginTop:'4px',
                            fontWeight:'bolder',

                        }}/>
                    LOGOUT</button>
        </div>
    </div>
  )
}

export default SidebarUserProf