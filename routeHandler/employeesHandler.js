const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const employeesSchema = require('../schemas/employeesSchema');
const Employees = new mongoose.model("employee", employeesSchema);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// POST A Employees
router.post("/", async (req, res) => {
    const newEmployees = new Employees({
        ...req.body,

    });
    try {
        const employees = await newEmployees.save();

        res.status(200).json({
            message: "Todo was inserted successfully!",
            data: employees
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

})

module.exports = router;
