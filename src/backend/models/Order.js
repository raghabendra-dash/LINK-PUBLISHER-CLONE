import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  website: { type: String, required: true }, // e.g., "techinsider.com"
  title: { type: String, required: true },   // e.g., "10 Emerging Tech Trends"
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "cancelled"],
    default: "pending",
  },
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export default mongoose.model("Order", orderSchema);
