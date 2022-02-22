const mongoose = require("mongoose");
const attendanceSchema = mongoose.Schema({
  ID: Number,
  email: String,
  date: String,
  entry: String,
  leave: String,
});
module.exports = attendanceSchema;
