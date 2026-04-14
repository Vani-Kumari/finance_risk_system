const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    type: String,
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);