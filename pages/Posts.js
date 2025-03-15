import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
