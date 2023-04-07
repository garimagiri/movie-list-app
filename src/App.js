import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overlay, Tooltip, Button } from "react-bootstrap";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./pages/Home";
import ProtectedRoutes from "./Services/ProtectedRoutes";

function App() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <BrowserRouter>
    <navbar class="d-flex justify-content-end mt-3 me-3">
        <div>
          <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
            Company Info
          </Button>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip {...props}>
                <div><span class="fw-bold">Company:</span> Geeksynergy Technologies Pvt Ltd </div>
                <div><span class="fw-bold">Address:</span> Sanjayanagar, Bengaluru-56</div>
                 <div><span class="fw-bold">Phone:</span> XXXXXXXXX09</div>
                <div><span class="fw-bold">Email:</span> XXXXXX@gmail.com</div>
              </Tooltip>
            )}
          </Overlay>
        </div>
      </navbar>
     <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoutes />}>
         <Route path="/" element={<Home />}/>   
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
