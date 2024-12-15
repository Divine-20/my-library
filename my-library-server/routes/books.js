import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import Book from "../models/Book.js";
import Author from "../models/Author.js";
import { where } from "sequelize";

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
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
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: Author,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", authenticateToken, async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      isbn: req.body.isbn,
      authorId: req.body.authorId,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.update(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.destroy();
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
