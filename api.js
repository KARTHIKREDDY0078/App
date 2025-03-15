import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/test";

export const fetchUsers = async () => {
    const res = await axios.get(`${API_BASE_URL}/users`);
    return res.data;
};

export const fetchPosts = async () => {
    const res = await axios.get(`${API_BASE_URL}/posts`);
    return res.data;
};

export const fetchComments = async () => {
    const res = await axios.get(`${API_BASE_URL}/comments`);
    return res.data;
};
