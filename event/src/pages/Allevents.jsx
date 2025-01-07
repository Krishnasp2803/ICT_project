import React from 'react';
import logo from '../images/logo.png';
import ebg from '../images/Ebg.png';

function Allevents() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${ebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the background takes the full height of the viewport
          width: '100%',
        }}
      >
        {/* Dimmed background overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)', // Dark overlay for the background only
            zIndex: 0, // Make sure the overlay is behind content
          }}
        ></div>
      </div>
      
    </div>
  );
}

export default Allevents;
