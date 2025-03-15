import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import "./App.css";
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  </Router>
);

export default App;
