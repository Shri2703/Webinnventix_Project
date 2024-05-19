import React from 'react';
import logo from '../asserts/logo1.png';
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top" >
      <a className="navbar-brand" href="#">
        <img src={logo} width="147" height="52" className="d-inline-block align-top " id='img' alt="Logo" />
        
      </a>
      <div className="d-flex ml-auto">
        <button className="btn btn-nav1 mr-4">Report content piracy</button>
        <button className="btn btn-nav2">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
