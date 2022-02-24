const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const employeesSchema = require('../schemas/employeesSchema');
const Employees = new mongoose.model("employee", employeesSchema);


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

// get employees
router.get("/", async (req, res) => {
    try {
        const allEmployees = await Employees.find({});
        res.status(200).json({
            data: allEmployees,
            message: "allEmployees Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "There was an error on the server side",
        });
    }
});
module.exports = router;
