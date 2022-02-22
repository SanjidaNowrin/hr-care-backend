const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const attendanceSchema = require("../schemas/attendanceSchema");
const Attendance = new mongoose.model("Attendance", attendanceSchema);

//post entry time
router.post("/entryTime", async (req, res) => {
    const newAttendance = new Attendance(req.body);
    console.log(newAttendance)
    await newAttendance.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Attendance was inserted successfully!",
        });
      }
    });
  });

  //get
  router.get("/punchTime", async (req, res) => {
    try {
        const attendance = await Attendance.find({});
        res.status(200).json({
            data: attendance,
            message: "attendance Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "There was an error on the server side",
        });
    } 
});

//UPDATE
router.put("/leaveTime", async (req, res) => {
  const result = await Attendance.findOneAndUpdate(
    {date: req.body.date },
    {
      $set: {
        leave: new Date().toLocaleString().split(",")[1],
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "was updated successfully!",
        });
      }
    }
  ).clone().catch(function(err){ console.log(err)})
  console.log(result);
});
  module.exports = router;