const express = require("express");

// Importing the book controller functions
const {
  createBook,
  getBooks,
  getBookById,
  deleteBookById,
  updateBook,
} = require("../Controllers/BookController");

// Creating an instance of Express Router
const app = express.Router();

// Route to get all books
app.get("/", getBooks);

// Route to get a book by ID
app.get("/:id", getBookById);

// Route to create a new book
app.post("/", createBook);

// Route to delete a book by ID
app.delete("/:id", deleteBookById);

// Route to update a book by ID
app.patch("/:id", updateBook);

// Exporting the router for use in the main application
module.exports = app;
