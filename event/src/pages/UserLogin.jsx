import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

const UserLoginPage = () => {
  const styles = {
    body: {
      fontFamily: "'Times New Roman', Times, serif",
      padding: "20px",
      color: "white",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1489513691500-41ef4acdb665?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative", // For overlay positioning
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
      zIndex: 0, // Below other content
    },
    content: {
      position: "relative", // Keep content above overlay
      zIndex: 1,
      marginTop: "-100px", // Adjust the content upwards by 30px
    },
    h2: {
      marginBottom: "20px",
    },
    form: {
      maxWidth: "300px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "8px",
      margin: "10px 0",
      border: "2px solid pink",
    },
    button: {
      width: "100%",
      padding: "8px",
      margin: "10px 0",
      border: "3px solid transparent",
      backgroundColor: "rgb(0, 90, 122)",
      cursor: "pointer",
      color: "white",
    },
  };

  const [message, setMessage] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const logindata = { user_email, user_password };

    try {
      const response = await axios.post(
        "https://ict-project-h0nu.onrender.com/api/user/userlogin",
        logindata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;

      if (response.status === 200) {
        localStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage(
        `Error: ${
          error.response ? error.response.data.message : "Server error"
        }`
      );
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div style={styles.body}>
      {/* Overlay to dim the background */}
      <div style={styles.overlay}></div>

      {/* Content container */}
      <div style={styles.content}>
        <h2 style={styles.h2}>User Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
            required
            style={styles.input}
          />
          <Button type="submit" style={styles.button}>
            Login
          </Button>
          <p>
            Don't have an account? <Link to="/usersignup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLoginPage;
