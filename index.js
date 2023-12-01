// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./Src/Config/db");
const cors = require("cors");

// Loading environment variables from .env file
require("dotenv").config();

// Importing book route
const bookrouter = require("./Src/Routes/BookRoute");

// Creating an Express application
const app = express();

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// Using the book route for /book endpoint
app.use("/book", bookrouter);

// Welcome message for the root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Triluxo Backend");
});

// Starting the server and establishing a database connection
app.listen(process.env.port, async () => {
  try {
    await connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
  console.log(`Server running at port ${process.env.port}`);
});
