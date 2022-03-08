const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const usersSchema = require("../schemas/usersSchema");
const User = new mongoose.model("User", usersSchema);

// POST A Employees
router.post("/", async (req, res) => {
    const newUsers = new User(req.body);
    console.log(newUsers);
    await newUsers.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error!",
            });
        } else {
            res.status(200).json({
                message: "Employee was inserted successfully!",
            });
        }
    });
});

router.put("/", async (req, res) => {
    console.log(req.body.email);
    try {
        const user = await User.findOneAndUpdate(
            { email: req.body.email },
            { name: req.body.name, email: req.body.email },
            { upsert: true }
        );
        res.status(200).json({
            result: user,
            message: "Success",
        });
    } catch {
        res.status(404).send({ error: "admin is not found!" });
    }
});

router.get("/:email", async (req, res) => {
    console.log("users handler");
    try {
        const admin = await User.find({ email: req.params.email });
        res.status(200).json({
            result: admin,
            message: "Success",
        })
    } catch {
        res.status(404).send({ error: "admin is not found!" });
    }
});

module.exports = router;
