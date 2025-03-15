const express = require("express");
const { getPosts } = require("../controllers/postController"); // ✅ Ensure this is correct

const router = express.Router();

router.get("/", getPosts);

module.exports = router;
