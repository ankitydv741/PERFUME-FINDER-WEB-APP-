const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const recommendRoute = require("./routes/recommend");

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/recommend", recommendRoute);

app.get("/", (req, res) => {
  res.send("Frag.OS Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});