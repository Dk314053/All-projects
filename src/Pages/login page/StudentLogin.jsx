import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentLogin() {
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function handleLogin() {
    if (userName == "user" && pass == "user123") {
      navigate("/student");
    } else {
      alert("Please try again.");
    }
  }
  return (
    <div>
      <div className="main1" >
        <h1 className="head1"> Student Login </h1>
        <p className="text">(U:user P:user123)</p>
        <input
        className="form"
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="UserName"
        />
        <input
          className="form2"
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button className="btn2" onClick={handleLogin}>
          Login
        </button>
        <Link to="/adminlogin" className="lnk">Admin Login</Link>
      </div>
    </div>
  );
}

export default  StudentLogin;