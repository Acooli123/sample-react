import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/student">Student</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>

      <button className="btn">Login</button>
      
    </nav>
  );
}

export default Navbar;