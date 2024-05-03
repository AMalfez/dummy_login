import React, { useState } from "react";
import AuthImg from "../assets/AuthImg.jpg";
import "../css/Login.css";
import axios from "axios";
import config from "../config";
import { Bounce, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setLoginPage, setUserDetails }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const User = await axios.post(config.backend_url + "/auth/login", user);
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
      console.log(error);
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
    <div className="login__container">
      <div className="login_page_img auth_img_container">
        <img className="auth-img" src={AuthImg} alt="nature img" />
      </div>
      <div className="login__form">
        <p className="auth__title">Login</p>
        <form onSubmit={handleLogin}>
          <div className="username__field">
            <input
              id="username"
              placeholder="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
        <p onClick={() => setLoginPage(false)} className="auth__link">
          Not a member? Signup
        </p>
      </div>
    </div>
  );
}

export default Login;
