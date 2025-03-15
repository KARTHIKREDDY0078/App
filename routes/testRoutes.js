const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const router = express.Router();

router.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get("/posts", async (req, res) => {
    const posts = await Post.find().populate("user", "name email");
    res.json(posts);
});

router.get("/comments", async (req, res) => {
    const comments = await Comment.find().populate("user", "name").populate("post", "content");
    res.json(comments);
});

module.exports = router;
