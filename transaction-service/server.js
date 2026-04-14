const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");

dotenv.config();

const app = express();

// 🔹 Middleware
app.use(express.json());
app.use(morgan("dev"));

// 🔹 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected (Transaction Service)"))
    .catch(err => {
        console.error("DB Error:", err);
        process.exit(1);
    });

// 🔹 Routes
app.use("/api/transactions", require("./routes/transactionRoutes"));

// 🔹 Test Route
app.get("/", (req, res) => {
    res.send("Transaction Service Running");
});

// 🔹 Global Error Handler (optional but good)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
});

// 🔹 Server Start
const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Transaction Service running on port ${PORT}`);
});