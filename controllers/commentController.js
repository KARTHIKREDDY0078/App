const Comment = require("../models/Comment");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("user", "name email").populate("post", "title");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getComments }; // ✅ Ensure this is correctly exported
