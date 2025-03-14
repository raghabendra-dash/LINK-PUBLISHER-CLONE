import express from "express";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.route("/")
  .get(protect, getOrders)      // GET /api/orders
  .post(protect, createOrder);   // POST /api/orders

router.route("/:id")
  .put(protect, updateOrder)     // PUT /api/orders/:id
  .delete(protect, deleteOrder);  // DELETE /api/orders/:id

export default router;
