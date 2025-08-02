import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  const [inputs,setInputs] = useState({
    username: "",
    password: ""
  });
  const [err,setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => { 
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>BBMedia</h1>
          <p>
            Welcome to BBMedia, a React/Node/Express social media web app project by {" "}
            <a href="https://github.com/SwegMax" target="_blank" rel="noopener noreferrer">
              SwegMax
            </a>.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
