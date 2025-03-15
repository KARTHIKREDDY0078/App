const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ Added user routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default route for testing
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Social Media API 🚀</h1>");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes); // ✅ Users route added

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("✅ Server running on port 5000"));
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
