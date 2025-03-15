import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <div className="hero">
      <h1>Welcome to the Social Media API 🚀</h1>
      <p>Connect with people, share posts, and comment on discussions.</p>
      <div className="buttons">
        <Link to="/register" className="btn">Sign Up!</Link>
        <Link to="/login" className="btn btn-outline">Login</Link>
      </div>
    </div>
  </div>
);

export default Home;
