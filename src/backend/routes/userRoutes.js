import express from "express";
import {
  getProfile,
  updateProfile,
  addBalance,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// User profile routes
router.route("/profile")
  .get(protect, getProfile)      // GET /api/users/profile
  .put(protect, updateProfile);   // PUT /api/users/profile

// Add balance to user account
router.put("/balance", protect, addBalance); // PUT /api/users/balance
router.get("/admin", protect, isAdmin, (req, res) => {
  res.json({ message: "Admin access granted" });
});

export default router;
