import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const styles = {
    body: {
      fontFamily: "'Times New Roman', Times, serif",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",
      minHeight: "100vh",
      textAlign: "left",
    },
    textSection: {
      backgroundColor: "black",
      color: "lightyellow",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      width: "30%",
      zIndex: 1,
      height: "100vh",
      boxSizing: "border-box",
    },
    h1: {
      marginBottom: "20px", // Add spacing below the <h1>
    },
    h4: {
      textAlign: "justify", // Justify the text
      marginBottom: "20px", // Add spacing below the <h4>
    },
    p: {
      marginBottom: "20px", // Add spacing below the <p>
    },
    imageContainer: {
      flex: 1,
      backgroundImage:
        "url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
      position: "relative",
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 0,
    },
    button: {
      margin: "10px 10px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "white",
      backgroundColor: "rgba(53, 4, 53)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.body}>
      {/* Left section with text */}
      <div style={styles.textSection}>
        <h1 style={styles.h1}>Welcome to Celestial!</h1>
        <h5 style={styles.h4}>
          "We provide you with seamless event planning solutions, ensuring
          unforgettable experiences and hassle-free celebrations tailored just
          for you!"
        </h5>
        <p style={styles.p}>Please select an option to proceed:</p>
        <div>
          <Link to="/userlogin">
            <button style={styles.button}>Login as User</button>
          </Link>
          <Link to="/alogin">
            <button style={styles.button}>Login as Admin</button>
          </Link>
        </div>
      </div>

      {/* Right section with background image and overlay */}
      <div style={styles.imageContainer}>
        <div style={styles.imageOverlay}></div>
      </div>
    </div>
  );
};

export default WelcomePage;



