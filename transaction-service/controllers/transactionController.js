const Transaction = require("../models/Transaction");

const { validationResult } = require("express-validator");

exports.createTransaction = async (req, res) => {
    try {
        // 🔴 check validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const transaction = await Transaction.create({
            userId: req.user.id,
            amount: req.body.amount,
            type: req.body.type
        });

        res.status(201).json(transaction);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
};