import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Hash the password before saving
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

export default User;
