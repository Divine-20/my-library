import jwt from "jsonwebtoken";
import "dotenv/config";
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  return jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "24h" });
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
