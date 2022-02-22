const mongoose = require("mongoose");
const attendanceSchema = mongoose.Schema({
  ID: Number,
  date: String,
  entry: String,
  leave: String,
});
module.exports = attendanceSchema;
