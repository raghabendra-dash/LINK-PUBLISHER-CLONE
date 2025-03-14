import express from "express";
import {
  getSeoTools,
  getSeoTool,
  createSeoTool,
  updateSeoTool,
  deleteSeoTool
} from "../controllers/seotoolController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.route("/")
  .get(protect, getSeoTools)       // GET /api/seotools
  .post(protect, createSeoTool);    // POST /api/seotools

router.route("/:id")
  .get(protect, getSeoTool)         // GET /api/seotools/:id
  .put(protect, updateSeoTool)       // PUT /api/seotools/:id
  .delete(protect, deleteSeoTool);   // DELETE /api/seotools/:id

export default router;
