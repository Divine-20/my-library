import express from "express";
import { generateToken } from "../middleware/auth.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// In-memory mock database
const users = [];

// Signup route
router.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = { id: uuidv4(), firstName, lastName, email, password };
  users.push(user);

  // Generate a token
  const token = generateToken({ email });

  res.status(201).json({
    success: true,
    user: { id: user.id, firstName, lastName, email },
    token,
  });
});

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }

  // Generate a token
  const token = generateToken({ email });

  res.json({
    success: true,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email,
    },
    token,
  });
});

export default router;
