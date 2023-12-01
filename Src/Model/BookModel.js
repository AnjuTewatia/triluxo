const mongoose = require("mongoose");

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  price: { type: String },
});

// Create the Book model using the defined schema
const BookModel = mongoose.model("Book", bookSchema);

// Export the BookModel for use in other parts of the application
module.exports = { BookModel };
