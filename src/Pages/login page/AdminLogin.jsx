import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './AdminLogin.css'

function AdminLogin() {
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function handleLogin() {
    if (userName == "admin" && pass == "admin123") {
      navigate("/admin");
    } else {
      alert("Please try again.");
    }
  }
  return (
    <div>
      <div className="main1" >
        <h1 className="head1"> Admin Login </h1>
        <p className="text">(U:admin P:admin123)</p>
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
        <Link className="lnk" to="/">Student Login</Link>
      </div>
    </div>
  );
}

export default AdminLogin;
