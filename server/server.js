// Load environment variables from .env file
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");

// Create the Express app and define Routes
const app = express();
const ticketRoutes = require("./routes/ticketRoutes");
const userRoutes = require("./routes/userRoutes");

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Mount the routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB and start the server
const { startServer } = require("./lib/mongodb");
const PORT = process.env.PORT || 5000;

startServer(app, PORT);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
