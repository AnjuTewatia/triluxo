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
  const { title, author, price } = req.body;
  const { id } = req.params;
  try {
    const deleteBook = await BookModel.findByIdAndDelete(
      { _id: id },
      {
        title,
        author,
        price,
      },
      { new: true }
    );

    if (!deleteBook) {
      // Handle Error when book id is not find for delete
      return res.status(404).json({ message: "Book is  not found" });
    }
    // Send a success message as a response
    res.status(200).json("Book is deleted successfully");
  } catch (err) {
    // Handle errors and send a 500 status with the error message
    res.status(500).json({ message: err.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  const { title, author, price } = req.body;
  const { id } = req.params;
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        author,
        price,
      },
      { new: true }
    );

    if (!updatedBook) {
      // Handle Error when book id is not find for update
      return res.status(404).json({ message: "Book is  not found" });
    }

    // Send a success message as a response
    res.status(200).json(updatedBook);
  } catch (err) {
    // Handle errors and send a 500 status with the error message
    res.status(500).json({ message: err.message });
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
