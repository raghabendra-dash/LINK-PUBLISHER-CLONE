import mongoose from "mongoose";

const seoToolSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  domain: { type: String, required: true }, 
  keywords: [{ type: String }],
  backlinks: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["active", "completed", "failed"],
    default: "active",
  },
  analyzedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export default mongoose.model("SeoTool", seoToolSchema);
