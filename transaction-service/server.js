const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Transaction Service Running");
});

app.listen(3002, () => {
    console.log("Transaction Service running on port 3002");
});