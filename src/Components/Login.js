import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email=== loggeduser.email && input.password===loggeduser.password){
            localStorage.setItem("loggedin", true);
            navigate("/");
        }
        else{
            alert("Invalid Credentials");
        }
    };

  return (
    <div className="App">
      
      <form onSubmit={handleLogin}>
      <div class="card mt-5 border-0 shadow-lg px-5">
        <div class="card-header border-0 bg-white">
        <h2>Login</h2>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div class="mb-3">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary w-75">Sign in</button>
          </div>
          <div class="mb-3">Don't have an account? <Link to="/register">Sign up</Link></div>
        </div>
      </div>
      </form>
      
    </div>
 
  );
}

export default Login;