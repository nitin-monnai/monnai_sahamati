import React, { useState } from "react";
import "../LandingPage.scss";
import { useNavigate } from "react-router-dom";
// import Image from "../assets/cool-background.png";

const Login = ({ setphoneNumber, phoneNumber }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!phoneNumber || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Clear error
    setError("");

    // setphoneNumber("");
    // setPassword("");

    navigate("/page1");
  };

  return (
    <div className="onboard-login-container">
      <h2>
        <img
          src="https://monnai.com/wp-content/uploads/2024/02/gradient-logo.svg"
          alt="Monnai"
        ></img>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="onboard-grouped">
          <div className="onboard-form-group">
            <label className="onboard-label" htmlFor="phoneNumber">
              PHONE NUMBER
            </label>
            <input
              type="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="onboard-inputbox"
            />
          </div>
          <div className="onboard-form-group">
            <label className="onboard-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
              className="onboard-inputbox"
            />
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="centeredElement">
          <button type="submit" className="onboard-login-btn">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
