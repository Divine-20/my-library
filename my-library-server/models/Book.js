// models/Book.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Author from "./Author.js"; // Import Author here

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.UUID,
      references: {
        model: Author,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

Book.belongsTo(Author, { foreignKey: "authorId" });

export default Book;
