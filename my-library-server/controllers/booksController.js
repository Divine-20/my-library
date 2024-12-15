import Book from "../models/Book.js";
import Author from "../models/Author.js";
import { validateBook } from "../utils/validators.js";
import logger from "../utils/logger.js";

export const getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const books = await Book.findAndCountAll({
      include: Author,
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    res.json({
      books: books.rows,
      total: books.count,
      totalPages: Math.ceil(books.count / limit),
      currentPage: page,
    });
  } catch (error) {
    logger.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: Author,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    logger.error("Error fetching book:", error);
    res.status(500).json({ message: "Failed to fetch book" });
  }
};

export const createBook = async (req, res) => {
  try {
    const errors = validateBook(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    logger.error("Error creating book:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const errors = validateBook({ ...book.toJSON(), ...req.body });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await book.update(req.body);
    res.json(book);
  } catch (error) {
    logger.error("Error updating book:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
};
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid book ID" });
    }
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    await Book.destroy({ where: { id } });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
