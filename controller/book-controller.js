const ApiError = require("../exceptions/api-error");
const bookService = require("../service/book-service");
class BookController {
  async getBooks(req, res, next) {
    try {
      const books = await bookService.getAllBooks();
      return res.json(books);
    } catch (e) {
      next(e);
    }
  }

  async getBookById(req, res, next) {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      return res.json(book);
    } catch (error) {
      next(error);
    }
  }

  async createBook(req, res, next) {
    try {
      const bookData = req.body;
      const createdBook = await bookService.createBook(bookData);
      return res.json(createdBook);
    } catch (e) {
      next(e);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const bookId = req.params.id;
      const deletedBook = await bookService.deleteBook(bookId);
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.json(`Вы успешно удалали книгу ${deletedBook.name}`);
    } catch (e) {
      next(e);
    }
  }

  async updateBook(req, res, next) {
    try {
      const bookId = req.params.id;
      const updatedBookData = req.body;
      const updatedBook = await bookService.updateBook(bookId, updatedBookData);
      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.json(updatedBook);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BookController();
