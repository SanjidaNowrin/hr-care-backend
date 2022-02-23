const express = require("express");
// const res = require("express/lib/response");
const mongoose = require("mongoose");
const router = express.Router();
const addCourseSchema = require("../schemas/addCourseSchema");
const Course = new mongoose.model("Course", addCourseSchema);

// POST Course
router.post("/", async (req, res) => {
    const newCourse = new Course(req.body);
    console.log(req.body);
    try {
        const data = await newCourse.save((err) => {
            if (err) {
                res.status(500).json({
                    message: "there was a server site error",
                });
            }
        });
    } catch {
        res.status(200).json({
            message: "Course added successfully",
        });
    }
});

//GET Course
router.get("/", async (req, res) => {
    try {
        const Courses = await Course.find({});
        res.status(200).json({
            data: Courses,
            message: "Courses Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "There was an error on the server side",
        });
    }
});

module.exports = router;