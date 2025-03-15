import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">SocialMediaApp</h2> {/* Added class for styling */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/comments">Comments</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </nav>
);

export default Navbar;
