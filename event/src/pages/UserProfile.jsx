import React,{useState}from 'react'
import Navbar_user from '../components/Navbar_user'
import SidebarUserProf from '../components/SidebarUserProf'
import UserDetails from '../components/UserDetails'
import RegisteredEvents from '../components/RegisteredEvents'



function UserProfile() {
  const [activeTab, setActiveTab] = useState('userprofile');
  
  return (
    
    <div style={
      {
        backgroundImage: 'url("/drinks_1.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:'100%',
        height:'100vh',
        position:'fixed',
        zIndex: -1,
      }
    }>
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        zIndex: -1,
      }}></div>
      <Navbar_user/>
      <div>
          <div>
          <SidebarUserProf setActiveTab={setActiveTab} />
          </div>
        
          {/* Scrollable Content */}
          <div
            style={{
              position: 'relative',
              marginTop: '120px', // Adjust for the navbar height
              padding: '20px',
              //width: 'calc(100% - 200px)', // Account for sidebar width
              height: 'calc(100vh - 120px)', // Remaining height excluding navbar
              overflowY: 'auto', // Enable vertical scrolling for content
              zIndex: 1, // Ensure it appears above the background
              paddingLeft:'200px',
              flex:'1',
              
              
            }}
          >
            {activeTab === 'userprofile' && <UserDetails />}
            {activeTab === 'registeredEvents' && <RegisteredEvents />}
            
        </div>
          </div>
    </div>
    
    
  )
}

export default UserProfile
