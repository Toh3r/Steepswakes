// Import libraries/frameworks
const express = require('express');
const path = require('path');

// Get routes
const indexRoutes = require("./routes/index");

// Server config
const app = express();
const port = process.env.port || 3000; // If local use 3000 else use host port
const publicPath = path.join(__dirname, "/public");

// Express/ejs config
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs");
app.use(express.static(publicPath));

// Routes
app.use("/", indexRoutes);

// Start server on port...
app.listen(port, () => {
  console.log(`Server is up on port ${port}...`);
});