import express from "express";
import cors from "cors";
import morgan from "morgan";
import { logger } from "./config/database.js";
import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import authorRoutes from "./routes/authors.js";
import { sequelize } from "./config/database.js";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

// Database sync and server start
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
});
