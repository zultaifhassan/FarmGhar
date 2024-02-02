import React, { useState, useEffect } from "react";
import "./Login.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/loginSlice";
import Spinner from "../../components/spinners/Spinner";

const Login = () => {
  console.log('in login')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, user, success, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    
    if (success && user) {
      navigate('/dashboard')
      window.alert("Login Successfully")
    } else {
      // dispatch((error))
    }
  }, [success, navigate, formData]);

  
  
  return (
    <div className="main">
      <div className="sub-main">
        <form className="login-form" onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="Login-form-title">
            <h2>FarmGhar</h2>
          </div>
          <div className="input-box">
            <div className="icon">
              <FiPhone />
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="input-box">
            <div className="icon">
              <RiLockPasswordLine />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="forget">
            <a href="/forget">Forget Password?</a>
          </div>
          <div className="buttons">
            <button>
              {loading ? <Spinner /> : "Log In"}
            </button>
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
