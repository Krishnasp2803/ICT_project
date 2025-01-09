import React from "react";
import { Link } from "react-router-dom";

const UserSignUpPage = () => {
  const styles = {
    body: {
      fontFamily: "'Times New Roman', Times, serif",
      color: "white",
      padding: "20px",
      backgroundImage:
        "url('https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk=')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
    },
    form: {
      maxWidth: "300px",
      margin: "0 auto",
    },
    input: {
      width: "100%",
      padding: "8px",
      margin: "5px 0",
      border: "2px solid lightblue",
    },
    button: {
      width: "50%",
      padding: "8px",
      marginLeft: "100px",
      border: "3px solid transparent",
      backgroundColor: "beige",
    },
    h2: {
      textAlign: "left",
      marginLeft: "calc((108vw - 300px) / 2)",
      marginBottom: "10px",
    },
    checkboxLabel: {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
  };

  return (
    <div style={styles.body}>
      <h2 style={styles.h2}>User Sign Up</h2>
      <form style={styles.form}>
        <input
          type="text"
          id="Username"
          name="Username"
          placeholder="Username"
          required
          style={styles.input}
        />
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="text"
          id="Contact"
          name="Contact"
          placeholder="Contact Number"
          required
          style={styles.input}
        />
        <input
          type="password"
          id="Password"
          name="Password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <div style={styles.checkboxLabel}>
          <input type="checkbox" id="Terms" name="Terms" required />
          <label htmlFor="Terms">I agree to the terms and conditions</label>
        </div>
        <button type="submit" style={styles.button}>
          Sign Up As New User
        </button>
        <p>
          Already have an account? <Link to="/user-login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default UserSignUpPage;
