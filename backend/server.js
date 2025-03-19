require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth"); // Ensure this path is correct

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if frontend and backend are on different ports

// Connect to MongoDB
// const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/socialmedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/auth", authRoutes);  // Make sure this is included

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
