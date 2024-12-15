import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "your-secret-key", {
    expiresIn: "1h",
  });
};

// Signup
export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user);

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to register user" });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Failed to log in" });
  }
};
