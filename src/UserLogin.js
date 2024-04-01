//This oode belongs to "Aditya Waykos"
import React, { useState } from "react";
import "./UserLoginStyles.css"; // Importing CSS file for styling
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom

const UserLogin = () => {
  // State variables to hold email and password
  const [email, setEmail] = useState(""); 
  const [userPassword, setUserPassword] = useState(""); 
  const navigate = useNavigate(); // Initializing the navigate function using useNavigate hook

  // Function to update email state when input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to update password state when input changes
  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing default form submission behavior
    // Checking if email and password match a predefined value
    if (email === "aditya.waykos@gmail.com" && userPassword === "Jan@123") {
      navigate("/recipe-search"); // Redirecting to "/recipe-search" route upon successful login
    } else {
      alert("E-mail or Password does not match"); // Alerting user if email or password is incorrect
    }
  };

  return (
    <div className="userLoginContainer"> {/* Container for login form */}
      <h1>Welcome to Recipe Explorer</h1> {/* Heading */}
      <form onSubmit={handleSubmit}> {/* Form for user login */}
        <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} /> {/* Email input field */}
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={userPassword}
        /> {/* Password input field */}
        <button type="submit">Login</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default UserLogin;
