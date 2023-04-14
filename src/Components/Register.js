import React, { useState} from "react";
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    profession: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/signin");
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div class="card mt-4 border-0 shadow-lg px-5">
          <div class="card-header border-0 bg-white">
            <h2>Sign up</h2>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>

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
              <input
                name="number"
                value={input.number}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="number"
                class="form-control"
                id="phonenumber"
                placeholder="Enter phone number"
              />
            </div>
            <div class="mb-3">
              <select
                class="form-select"
                aria-label="select"
                name="profession"
                value={input.profession}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              >
                <option selected>Profession</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary w-75">
                Register
              </button>
            </div>
            <div class="mb-3">
              Already have an account <Link to="/signin">Log in</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
