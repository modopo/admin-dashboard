import mongoose from "mongoose";

const Transaction = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true },
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
