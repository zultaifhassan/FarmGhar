import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import './Signup.css'
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-main">
        <form className="login-form" >
        <div className="image">
          <img src="/images/login.svg" alt="login" />
        </div>
        <h1 className='community'>Lets Join Our Community</h1>
        <div className="input-box">
          <div className="icon">
            <FiPhone/>
          </div>
          <div>
          <input type="text" placeholder="Mobile Number" />
          </div>
        </div>
        <div className="eg">
          <p>e.g (03011234567 or 3011234567)</p>
        </div>
        <div className="input-box">
          <div className="icon">
            <CiUser/>
          </div>
          <div>
          <input type="text" placeholder="Name" />
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
        <div className="input-box">
          <div className="icon">
            <RiLockPasswordLine/>
          </div>
          <div>
          <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="signup-btn">
          <button>Continue</button>
        </div>
        <div className="text">
          <p>Already have an account?</p>
          <a href="/login">Login Now</a>
        </div>
        </form>
      </div>
    </div>
  );
};


export default Signup