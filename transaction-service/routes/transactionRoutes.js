const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
    createTransaction,
    getTransactions
} = require("../controllers/transactionController");

const authMiddleware = require("../middleware/authMiddleware");

// 🔐 + validation
router.post(
    "/",
    authMiddleware,
    [
        body("amount")
            .isNumeric().withMessage("Amount must be a number")
            .custom(value => value > 0).withMessage("Amount must be > 0"),

        body("type")
            .isIn(["credit", "debit"]).withMessage("Type must be credit or debit")
    ],
    createTransaction
);

router.get("/", authMiddleware, getTransactions);

module.exports = router;