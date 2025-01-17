import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const styles = {
    body: {
      fontFamily: "'Times New Roman', Times, serif",
      display: "flex",
      color: "lightyellow",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage:
        "url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      textAlign: "center",
    },
    textContainer: {
      backgroundColor: "rgba(53, 4, 53, 0.8)", // Translucent purple
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      maxWidth: "100%",
      margin: "20px",
    },
    button: {
      margin: "10px",
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
      <div style={styles.textContainer}>
        <h1>Welcome to Celestial!</h1>
        <h3>
          "We provide you with seamless event planning solutions, ensuring
          unforgettable experiences and hassle-free celebrations tailored just
          for you!"
        </h3>
        <p>Please select an option to proceed:</p>
        <div>
          <Link to="/userlogin">
            <button style={styles.button}>Login as User</button>
          </Link>
          <Link to="/alogin">
            <button style={styles.button}>Login as Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
