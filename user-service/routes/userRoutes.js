const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUsers
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

// 🔹 Register User
router.post("/register", registerUser);

// 🔹 Login User
router.post("/login", loginUser);

// 🔹 Get all users (optional)
router.get("/", getUsers);

// 🔐 Protected Route (Profile)
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

module.exports = router;