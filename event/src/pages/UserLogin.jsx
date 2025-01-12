import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from 'axios'; // Make sure to import axios

const UserLoginPage = () => {
  const styles = {
    body: {
      fontFamily: "'Times New Roman', Times, serif",
      padding: "20px",
      color: "white",
      backgroundImage:
        "url('https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
    },
    h2: {
      textAlign: "center",
      marginBottom: "20px",
    },
    form: {
      maxWidth: "300px",
      margin: "0 auto",
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
      backgroundColor: "pink",
      cursor: "pointer",
    },
  };

  const [message, setMessage] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const logindata = { user_email, user_password };

    try {
      // Make the API call using axios
      const response = await axios.post('http://localhost:5000/api/user/userlogin', logindata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = response.data; // Token is returned from backend

      if (response.status === 200) {
        localStorage.setItem('token', token); // Store the token in localStorage

        alert("Login successful!");
        navigate("/userprofile"); // Redirect to user profile page
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage(`Error: ${error.response ? error.response.data.message : "Server error"}`);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div style={styles.body}>
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
  );
};

export default UserLoginPage;
