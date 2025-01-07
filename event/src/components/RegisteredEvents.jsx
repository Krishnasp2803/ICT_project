import React from 'react';
import { Button } from 'react-bootstrap';

function RegisteredEvents() {
  return (
    <div style={{
        width: '1000px',
      
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        marginLeft: '140px',
        backgroundColor:'rgb(77,49,25,0.8)',
        zIndex: '1000',
    }}>
      <h2 style={{
        color: 'white',
        fontFamily: 'LimeLight',
      }}>Registered Events</h2>
      <div class='row' style={{width:'100%',height:'400px',display: 'flex', marginTop: '20px'}}>
        
        <div class='row-element'style={{
            width:'40%',
            height:'100%',
            backgroundColor:'rgba(44, 17, 3, 0.4)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            marginLeft:'20px',
        
            
        }}>
            <div class='event-image'>
                <img src='/eventImg_1.jpg'
                    style={{
                       width:'200px',
                        height:'250px',
                        margin: '0', // Remove any default margin
                        padding: '0',
                        display: 'block',
                        marginLeft: '100px',
                        marginTop:'10px',
                      }}/>
            </div>
            <div class='event-det'
                style={{
                    width:'100%',
                    height:'140px',
                    
                    marginTop:'0px',
                    margin: '0', // Remove any default margin
                    padding: '0', 

                }}>
                <div class='event-name'style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Name
                </div>
                <div class='event-place' style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Place
                </div>
                <div class='event-date-ticket' style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                    <div><Button  style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>20 January</Button></div>
                    <div><Button style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>Get Ticket</Button></div>
                </div>

            </div>
        
        </div>
        <div class='row-element-2'style={{
            width:'40%',
            height:'100%',
            backgroundColor:'rgba(44, 17, 3, 0.4)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            marginLeft:'160px',
        
            
        }}>
            <div class='event-image-2'>
                <img src='/eventImg_2.jpg'
                    style={{
                       width:'200px',
                        height:'250px',
                        margin: '0', // Remove any default margin
                        padding: '0',
                        display: 'block',
                        marginLeft: '100px',
                        marginTop:'10px',
                      }}/>
            </div>
            <div class='event-det-2'
                style={{
                    width:'100%',
                    height:'140px',
                    
                    marginTop:'0px',
                    margin: '0', // Remove any default margin
                    padding: '0', 

                }}>
                <div class='event-name-2'style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Name
                </div>
                <div class='event-place-2' style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Place
                </div>
                <div class='event-date-ticket-2' style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                    <div><Button  style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>14 March</Button></div>
                    <div><Button style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>Get Ticket</Button></div>
                </div>

            </div>
        
        </div>
      </div>
      <div class='row' style={{width:'100%',height:'400px',display: 'flex', marginTop: '20px'}}>
        
        <div class='row-element'style={{
            width:'40%',
            height:'100%',
            backgroundColor:'rgba(44, 17, 3, 0.4)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            marginLeft:'20px',
        
            
        }}>
            <div class='event-image'>
                <img src='/eventImg_1.jpg'
                    style={{
                       width:'200px',
                        height:'250px',
                        margin: '0', // Remove any default margin
                        padding: '0',
                        display: 'block',
                        marginLeft: '100px',
                        marginTop:'10px',
                      }}/>
            </div>
            <div class='event-det'
                style={{
                    width:'100%',
                    height:'140px',
                    
                    marginTop:'0px',
                    margin: '0', // Remove any default margin
                    padding: '0', 

                }}>
                <div class='event-name'style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Name
                </div>
                <div class='event-place' style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Place
                </div>
                <div class='event-date-ticket' style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                    <div><Button  style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>20 January</Button></div>
                    <div><Button style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>Get Ticket</Button></div>
                </div>

            </div>
        
        </div>
        <div class='row-element-2'style={{
            width:'40%',
            height:'100%',
            backgroundColor:'rgba(44, 17, 3, 0.4)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            marginLeft:'160px',
        
            
        }}>
            <div class='event-image-2'>
                <img src='/eventImg_2.jpg'
                    style={{
                       width:'200px',
                        height:'250px',
                        margin: '0', // Remove any default margin
                        padding: '0',
                        display: 'block',
                        marginLeft: '100px',
                        marginTop:'10px',
                      }}/>
            </div>
            <div class='event-det-2'
                style={{
                    width:'100%',
                    height:'140px',
                    
                    marginTop:'0px',
                    margin: '0', // Remove any default margin
                    padding: '0', 

                }}>
                <div class='event-name-2'style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Name
                </div>
                <div class='event-place-2' style={{
                    width:'95%',
                    height:'40px',
                    
                    textAlign:'left',
                    paddingLeft:'20px',
                    alignContent:'center',
                    fontFamily:'Crimson Pro',
                    fontSize:'130%',
                    color:'white',
                }}>
                    Event Place
                </div>
                <div class='event-date-ticket-2' style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
                    <div><Button  style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>14 March</Button></div>
                    <div><Button style={{
                        width:'100px',
                        height:'30px',
                        borderRadius:'15px',
                        backgroundColor:'rgb(160, 17, 7)',
                        color:'white',
                        border:'none',
                        boxShadow:'0 8px 16px rgba(0, 0, 0, 0.7)',
                        }}>Get Ticket</Button></div>
                </div>

            </div>
        
        </div>
      </div>
    </div>
   
  );
}

export default RegisteredEvents;