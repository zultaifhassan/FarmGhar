import React from "react";
import "./Login.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <form className="login-form" >
        <div className="image">
          <img src="/images/login.svg" alt="login" />
        </div>
        <div className="input-box">
          <div className="icon">
            <FiPhone/>
          </div>
          <div>
          <input type="text" placeholder="Mobile Number" />
          </div>
        </div>
        <div className="input-box">
          <div className="icon">
            <RiLockPasswordLine/>
          </div>
          <div>
          <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forget">
          <a href="/forget">Forget Password?</a>
        </div>
        <div className="buttons">
          <button>Sign In</button>
        </div>
        <div className="text">
          <p>Don't have an account?</p>
          <a href="/Signup">Create Account</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
