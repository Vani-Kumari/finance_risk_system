const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/transactions", require("./routes/transactionRoutes"));

app.get("/", (req, res) => {
    res.send("Transaction Service Running");
});

app.listen(3002, () => {
    console.log("Transaction Service running on port 3002");
});