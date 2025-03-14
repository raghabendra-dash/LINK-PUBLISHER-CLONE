import express from "express";
import { createPayment, getPayments } from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", protect, createPayment);   // POST /api/payments
router.get("/", protect, getPayments);      // GET /api/payments

export default router;
