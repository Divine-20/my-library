import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import Author from "../models/Author.js";

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/create", authenticateToken, async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    await author.destroy();
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});
export default router;
