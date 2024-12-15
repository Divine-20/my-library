import Author from "../models/Author.js";
import { validateAuthor } from "../utils/validators.js";
import logger from "../utils/logger.js";

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    logger.error("Error fetching authors:", error);
    res.status(500).json({ message: "Failed to fetch authors" });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    logger.error("Error fetching author:", error);
    res.status(500).json({ message: "Failed to fetch author" });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const errors = validateAuthor(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    logger.error("Error creating author:", error);
    res.status(500).json({ message: "Failed to create author" });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    const errors = validateAuthor({ ...author.toJSON(), ...req.body });
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await author.update(req.body);
    res.json(author);
  } catch (error) {
    logger.error("Error updating author:", error);
    res.status(500).json({ message: "Failed to update author" });
  }
};
export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid Author" });
    }
    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    await Author.destroy({ where: { id } });
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    console.error("Error deleting author:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
