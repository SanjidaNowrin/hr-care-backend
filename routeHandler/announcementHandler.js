const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const router = express.Router();
const announcementSchema = require("../schemas/announcementSchema");
const Announcement = new mongoose.model("announcement", announcementSchema);

// ANNOUNCEMENT POST
router.post("/", async (req, res) => {
    const newAnnouncement = new Announcement(req.body);
    console.log(req.body);
    try {
        const data = await newAnnouncement.save((err) => {
            if (err) {
                res.status(500).json({
                    message: "there was a server site error",
                });
            }
        });
    } catch {
        res.status(200).json({
            message: "announcement added successfully",
        });
    }
});

//GET ALL ANNOUNCEMENT
router.get("/", async (req, res) => {
    try {
        const announcements = await Announcement.find({});
        res.status(200).json({
            data: announcements,
            message: "Announcement Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "There was an error on the server side",
        });
    }
});

//GET User ANNOUNCEMENT
router.get("/:email", async (req, res) => {
    try {
        const announcements = await Announcement.find({ email: req.params.email });
        res.status(200).json({
            data: announcements,
            message: "Announcement Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "There was an error on the server side",
        });
    }
});

//approved leave application
router.put("/:_id", async (req, res) => {
    try {
        const updateLeave = await Leave.findByIdAndUpdate(
            { _id: req.params._id },
            {
                status: req.body.status,
            },
            { new: true }
        );

        res.status(200).send({ data: updateLeave });
        console.log(updateLeave);
    } catch {
        res.status(404).send({ message: "There was an error on the server side!" });
    }
});

module.exports = router;
