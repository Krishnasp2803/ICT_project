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
    button: {
      margin: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "white",
      backgroundColor: "violet",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.body}>
      <h1>Welcome to the Event Management App!</h1>
      <h3>
        "We provide you with seamless event planning solutions, ensuring
        unforgettable experiences and hassle-free celebrations tailored just for
        you!"
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
  );
};

export default WelcomePage;
