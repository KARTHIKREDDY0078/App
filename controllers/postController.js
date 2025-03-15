const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPosts }; // ✅ Make sure it is correctly exported
