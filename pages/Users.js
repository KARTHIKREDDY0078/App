import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Users List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user._id} className="user-card">
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
