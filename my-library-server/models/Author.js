// models/Author.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

export default Author;
