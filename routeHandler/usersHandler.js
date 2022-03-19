const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const usersSchema = require("../schemas/usersSchema");
const User = new mongoose.model("User", usersSchema);

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await jwtUser.find({ name: req.body.name });
        if (user && user.length > 0) {
            const isValidEmail = await bcrypt.compare(req.body.email, user[0].email);

            if (isValidEmail) {
                // generate token
                const token = jwt.sign(
                    {
                        name: user[0].name,
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h",
                    }
                );

                res.status(200).json({
                    access_token: token,
                    message: "Login successful!",
                });
            } else {
                res.status(401).json({
                    error: "Authetication failed!",
                });
            }
        } else {
            res.status(401).json({
                error: "Authetication failed!",
            });
        }
    } catch {
        res.status(401).json({
            error: "Authetication faileds!",
        });
    }
});

// sign up user
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

//update user
router.put("/", async (req, res) => {
    console.log("put", req.headers.authorization);
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
        res.status(404).send({ error: "user is not found!" });
    }
});

//find admin
router.get("/:email", async (req, res) => {
    console.log("users handler");
    try {
        const admin = await User.find({ email: req.params.email });
        res.status(200).json({
            result: admin,
            message: "Success",
        });
    } catch {
        res.status(404).send({ error: "admin is not found!" });
    }
});

module.exports = router;
