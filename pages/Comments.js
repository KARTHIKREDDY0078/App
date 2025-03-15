import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comments.css";
const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/comments")
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment._id} className="comment-card">
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
