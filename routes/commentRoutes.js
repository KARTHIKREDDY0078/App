const express = require("express");
const { getComments } = require("../controllers/commentController");

const router = express.Router();

router.get("/", getComments);

module.exports = router;  // ✅ Ensure `router` is exported
