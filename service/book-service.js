const BookModel = require("../models/book-model");

class BookService {
  async getAllBooks() {
    const books = await BookModel.find();
    return books;
  }

  async getBookById(id) {
    const book = await BookModel.findById(id);
    if (!book) {
      throw new Error("Книга не найдена");
    }
    return book;
  }

  async createBook(bookData) {
    const newBook = new BookModel(bookData);
    const savedBook = await newBook.save();
    return savedBook;
  }

  async deleteBook(bookId) {
    const deletedBook = await BookModel.findByIdAndDelete(bookId);
    return deletedBook;
  }

  async updateBook(bookId, updatedBookData) {
    const updatedBook = await BookModel.findByIdAndUpdate(bookId, updatedBookData, { new: true });
    return updatedBook;
  }
}

module.exports = new BookService();
