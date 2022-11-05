// Import libraries/frameworks
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require("./seedDB");

// Get routes
const indexRoutes = require("./routes/index");
const playerRoutes = require("./routes/players");

// Server config
const app = express();
const port = process.env.port || 3000; // If local use 3000 else use host port
const publicPath = path.join(__dirname, "/public");

// Express/ejs config
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static(publicPath));

// DB Config
const dbUrl = process.env.DATABASEURL || "mongodb://localhost/Steepswakes";
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(`Connected to db on ${dbUrl}`);
  }
);

// Console log any DB error
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
app.use("/", indexRoutes);
app.use('/players', playerRoutes);

// Start server on port...
app.listen(port, () => {
  console.log(`Server is up on port ${port}...`);
});