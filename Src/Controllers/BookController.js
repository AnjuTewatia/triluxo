const { BookModel } = require("../Model/BookModel");

// Get all books
const getBooks = async (req, res) => {
  const { title, author, price } = req.query;

  try {
    // Retrieve all books from the database
    let books = await BookModel.find();

    // Send the books as a response
    return res.status(200).send(books);
  } catch (error) {
    // Handle errors and send a 500 status with the error message
    return res.status(500).send(error);
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    // Find a book by its ID
    let book = await BookModel.findById({ _id: req.params.id });

    // Send the book as a response
    return res.status(200).send(book);
  } catch (error) {
    // Handle errors and send a 500 status with the error message
    return res.status(500).send(error);
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, price } = req.body;

  try {
    // Create a new book instance
    const book = new BookModel({
      title,
      author,
      price,
    });

    // Save the new book to the database
    await book.save();

    // Send a success message as a response
    return res.status(200).send({ message: "Book added successfully" });
  } catch (error) {
    // Handle errors and send a 500 status with the error message
    return res.status(500).send({ message: error });
  }
};

// Delete a book by ID
const deleteBookById = async (req, res) => {
  try {
    // Find and delete a book by its ID
    await BookModel.findByIdAndDelete({ _id: req.params.id });

    // Send a success message as a response
    return res.status(200).send("Book deleted successfully");
  } catch (error) {
    // Handle errors and send a 500 status with the error message
    return res.status(500).send(error);
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    // Find and update a book by its ID (Note: You might want to pass update data in the request body)
    await BookModel.findByIdAndUpdate({ _id: req.params.id });

    // Send a success message as a response
    return res.status(200).send("Book updated successfully");
  } catch (error) {
    // Handle errors and send a 500 status with the error message
    return res.status(500).send(error);
  }
};

// Export the CRUD operations for use in routes
module.exports = {
  createBook,
  getBooks,
  getBookById,
  deleteBookById,
  updateBook,
};
