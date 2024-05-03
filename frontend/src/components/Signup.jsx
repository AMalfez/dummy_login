import React, { useState } from "react";
import "../css/Signup.css";
import AuthImg from "../assets/AuthImg.jpg";
import axios from "axios";
import config from "../config";

function Signup({ setLoginPage, setUserDetails }) {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOption, setDropdownOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDropdownChange = (event) => {
    setDropdownOption(event.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const User = await axios.post(config.backend_url + "/auth/signup", user);
      toast.info(`${User.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      if (User.data.status) setUserDetails(User.data.user);
    } catch (error) {
      toast.info(`error occured`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="signup__container">
      <div className="signup_page_img auth_img_container">
        <img className="auth-img" src={AuthImg} alt="nature img" />
      </div>
      <div className="signup__form">
        <p className="auth__title">Signup</p>
        <form onSubmit={handleSignup}>
          <div className="username__field">
            <input
              id="username"
              placeholder="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="email__field">
            <input
              id="email"
              placeholder="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="password__field">
            <input
              id="password"
              placeholder="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="gender__field">
            <span>Gender:</span>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
              />
              Option 2
            </label>
          </div>

          <div className="skill__field">
            <label htmlFor="options">Skills:</label>
            <select id="options" value={dropdownOption} onChange={handleDropdownChange}>
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <button type="submit" className="auth-btn">
            Signup
          </button>
        </form>
        <p onClick={() => setLoginPage(true)} className="auth__link">
          Already a member? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
