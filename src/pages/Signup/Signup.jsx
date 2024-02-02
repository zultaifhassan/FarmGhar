import React, { useState } from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpFailure, signUpStart, signUpSuccess, signUpAsync } from '../../features/auth/signupSlice';
import Spinner from '../../components/spinners/Spinner';




const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    role: '',
  })

  const { loading, error } = useSelector((state) => state.signUp);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(setFormData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signUpStart());
      await dispatch(signUpAsync(formData));
      dispatch(signUpSuccess());
      navigate('/login'); 
    } catch (err) {
      dispatch(signUpFailure(err.message));
    }
  };

  return (
    <div className="signup">
      <div className="signup-main">
        <form className="login-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="sign-up-title">
          <h2>FarmGhar</h2>
        </div>
        <h1 className='community'>Lets Join Our Community</h1>
        <div className="input-box">
          <div className="icon">
            <FiPhone/>
          </div>
          <div>
          <input type="text" name='email' value={formData.email} onChange={handleInputChange} placeholder="Email" required />
          </div>
        </div>
        <div className="eg">
          <p>e.g (abc@gmail.com)</p>
        </div>
        <div className="input-box">
          <div className="icon">
            <CiUser/>
          </div>
          <div>
          <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder="Name" required />
          </div>
        </div>
        <div className="input-box">
          <div className="icon">
            <RiLockPasswordLine/>
          </div>
          <div>
          <input type="password" name='password' value={formData.password} onChange={handleInputChange} placeholder="Password" required />
          </div>
        </div>
        <div className="input-box">
          <div className="icon">
            <RiLockPasswordLine/>
          </div>
          <div>
          <input type="text" name='role' value={formData.role} onChange={handleInputChange} placeholder="Enter Role" required />
          </div>
        </div>
        <div className="signup-btn">
          <button>{loading ? <Spinner /> : 'Continue'}</button>
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