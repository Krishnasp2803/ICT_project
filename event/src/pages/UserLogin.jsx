import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div style={styles.body}>
      <h2 style={styles.h2}>User Login</h2>
      <form style={styles.form}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          style={styles.input}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login As User
        </button>
        <p>
          Don't have an account? <Link to="/user-signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLoginPage;
