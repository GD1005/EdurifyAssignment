// SignUp.js
import React, { useState } from "react";
import Logo from "../assest/easylogo.png";
import Box from "../assest/greenbox.png";
import Reacty from "../assest/Rectangle37.png";
import SignupGirl from "../assest/signupgirl.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, password, confirmPassword });
  };

  return (
    <>
      <div className="col-md-7">
        <img src={Logo} alt="logo" />
        <h2>Join Easyform</h2>
        <p>Sign up for free!</p>
        {/* Sign-up form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Click here to login</Link>
        </p>
      </div>
      <div className="col-md-5">
        <img src={Box} alt="Box" />
        <img src={Reacty} alt="reactangledBox" />
        <img src={SignupGirl} alt="SignupGirl" />
      </div>
    </>
  );
};

export default SignUp;
