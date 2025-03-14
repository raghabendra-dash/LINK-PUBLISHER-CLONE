import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  let token;

  try {
    // Check if Authorization header contains a Bearer token
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        throw new Error("Token missing after Bearer");
      }

      // Verify and decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        throw new Error("User not found");
      }

      next();
    } else {
      throw new Error("No Bearer token provided");
    }
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(401).json({ message: error.message });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};

export { protect, isAdmin };
