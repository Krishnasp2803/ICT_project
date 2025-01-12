import React from 'react'
import {useState, useEffect} from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { fetchUserData } from '../api';


function SidebarUserProf({setActiveTab}) {
    const[hovered,setHoverColour]=useState(null)                //background colour change on hovering
    const handleMouseHover=(index)=>{setHoverColour(index)}
    const handleMouseLeave=()=>{setHoverColour(null)}
    const [selected, setSelected] = useState(1);
    const handleOptionClick = (index, tab) => {
        setSelected(index); // Set the selected option
        setActiveTab(tab); // Call the parent handler to update the active tab
      };

    const [loading, setLoading] = useState(true); // Declare loading state
    const [error, setError] = useState(null);     // Declare error state
    //const [userData, setUserData] = useState(null);
        const [userData, setUserData] = useState({
          username: '',
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
                  const { user_name,} = data;
                  setUserData({
                    username: user_name,   // mapping from response
                    
                    
                  })
              } catch (error) {
                  console.error('Error loading user data:', error);
              }
          };
      
          loadUserData();
      }, []);
    
  
  return (
    <div style={{
        position: 'fixed',
        width: '20%',
        height: '100%',
        marginTop: '0px', // Adjust for the navbar height
        color: 'white',
        zIndex: '1000', // Ensure it stays on top of other elements
        //backgroundColor:'lightblue'
        display:'flex',
        flexDirection:'column'
    }}>
        <div style={
            {
                
                width:'290px',
                height:'200px',
                
            }
        }> <IoPersonCircleSharp style={{
            fontSize:'700%',
            marginLeft:'50%',
            marginTop:'25px',
            
        }}/>
        <h4 
        style={{
            textAlign:'center',
            marginTop:'0px',
            fontFamily:'Julius Sans One',
            marginLeft:'50%',
        }}
        >{userData.username}</h4>
            
        </div>
        <div>
           
                <button style={{
                    width:'100%',
                    fontSize:'160%',
                    backgroundColor:selected==1? '#733a08': hovered===1?'#733a08':'#472609',
                    border:'none',
                    padding:'20px',
                    color:'white',
                    transition: "all 0.3s ease",
                    fontFamily:'Crimson Pro',
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    transform:selected==1? '#733a08':hovered===1?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
                    boxShadow:selected==1? '#733a08': hovered===1?'0 10px 10px rgba(0, 0, 0, 0.5)':'none' /* Add shadow for depth */
                    

                }}
                
                
                onMouseEnter={()=>handleMouseHover(1)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleOptionClick(1, 'userprofile')}
                >
                    PROFILE</button>
           
                <button style={{
                    width:'100%',
                    fontSize:'160%',
                    marginTop:'20px',
                    backgroundColor:selected==2? '#733a08':hovered===2?'#733a08':'#472609',
                    border:'none',
                    padding:'20px',
                    color:'white',
                    transition: "all 0.3s ease",
                    fontFamily:'Crimson Pro',
                    borderTopRightRadius:'30px',
                    borderBottomRightRadius:'30px',
                    transform:selected==2? '#733a08':hovered===2?'scale(1.1)':'scale(1.0)', /* Slightly increase size */
                    boxShadow: hovered===2?'0 10px 10px rgba(0, 0, 0, 0.5)':'none' /* Add shadow for depth */

                }}
                
                onClick={() => handleOptionClick(2, 'registeredEvents')}
                onMouseEnter={()=>handleMouseHover(2)}
                onMouseLeave={handleMouseLeave}

                >
                    REGISTERED EVENTS
                </button>
            
                <button style={{
                    width:'290px',
                    fontSize:'140%',
                    marginTop:'86%',
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
                    marginLeft:'15%'
                }}
                onMouseEnter={()=>handleMouseHover(4)}
                onMouseLeave={handleMouseLeave}
                >
                    <RiLogoutCircleRLine style={
                        {
                            fontSize:'150%',
                            marginRight:'10px',
                            marginTop:'2px',
                            fontWeight:'bolder',

                        }}/>
                    LOGOUT</button>
        </div>
    </div>
  )
}

export default SidebarUserProf