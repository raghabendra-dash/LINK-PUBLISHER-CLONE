import Payment from "../models/Payment.js";
import User from "../models/User.js";

// Create a new payment record
export const createPayment = async (req, res) => {
  const { orderId, amount, paymentMethod } = req.body;

  try {
    const payment = await Payment.create({
      user: req.user.id,
      order: orderId,
      amount,
      paymentMethod,
      status: "completed",
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: "Payment failed" });
  }
};

// Get user's payment history
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id }).populate("order");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch payments" });
  }
};
