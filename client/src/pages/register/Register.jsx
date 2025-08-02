import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [inputs,setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  });
  const [err,setError] = useState(null);

  const handleChange = (e) => { 
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/auth/register`, inputs);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>BBMedia</h1>
          <p>
            Don't have an account? Register here!
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>

            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
