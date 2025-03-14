import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["buyer", "editor", "admin"],
    default: "buyer",
  },
  balance: { type: Number, default: 0 },
  companyWebsite: { type: String },
  country: { type: String },
  whatsappUpdates: { type: Boolean, default: false },
  joinedOn: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export default mongoose.model("User", userSchema);
